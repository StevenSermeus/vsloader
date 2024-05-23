import { createSpinner } from "nanospinner";
import { Client } from "@cweijan/ssh2";
import puppeteer, { Browser, Page } from "puppeteer";
import { file, sleep } from "bun";

interface Action {
	time: number;
}

interface OpenAction extends Action {
	action: "open";
	file: string;
}

interface ChangeAction extends Action {
	action: "change";
	file: string;
	text: string;
	line: number;
	column: number;
}

interface SaveAction extends Action {
	action: "save";
	file: string;
}

export class Student {
	private name: string;
	private ssh_connection: Client;
	private host: string;
	private username: string;
	private password: string;
	private desired_port: number;
	private browser: Browser | null = null;
	private vscode_page: Page | null = null;
	private current_file: string | null = null;
	constructor(
		name: string,
		host: string,
		username: string,
		password: string,
		desired_port: number
	) {
		this.name = name;
		this.ssh_connection = new Client();
		this.host = host;
		this.username = username;
		this.password = password;
		this.desired_port = desired_port;
	}

	getPassword() {
		return this.password;
	}

	async openVscode() {
		this.browser = await puppeteer.launch({
			headless: false,
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
		});
		this.vscode_page = await this.browser.newPage();
		await this.vscode_page.goto(
			`http://${this.host}:${this.desired_port}/?folder=/home/${this.username}`
		);
		console.log("Opening vscode");
		await this.vscode_page.waitForFunction(
			() => document.title.includes("Code"),
			{ timeout: 10000 }
		);
		console.log("Vscode opened");
	}

	async emulateStudent(actions: (OpenAction | ChangeAction | SaveAction)[]) {
		for (const action of actions) {
			await this.think(action.time);
			switch (action.action) {
				case "open":
					await this.openAction(action.file);
					break;
				case "change":
					await this.changeAction(
						action.file,
						action.text,
						action.line,
						action.column
					);
					break;
				case "save":
					await this.saveAction(action.file);
					break;
				default:
					//@ts-ignore
					console.log(`Unknown action ${action.action}`);
					break;
			}
		}
	}

	async think(time: number) {
		await new Promise((resolve) => setTimeout(resolve, time));
	}

	async openAction(filePath: string) {
		console.log("Opening action");
		this.current_file = filePath;
		const fileName = filePath.split("/").pop() || "";
		await this.vscode_page?.keyboard.down("Meta");
		await this.vscode_page?.keyboard.press("p");
		await this.vscode_page?.keyboard.up("Meta");
		await this.vscode_page?.keyboard.type(fileName);
		await this.think(2000);
		await this.vscode_page?.keyboard.press("Enter");
		await this.think(100);
	}

	async saveAction(filePath: string) {
		console.log("Save action");
		if (this.current_file !== filePath) await this.openAction(filePath);
		await this.vscode_page?.keyboard.down("Meta");
		await this.vscode_page?.keyboard.press("s");
		await this.vscode_page?.keyboard.up("Meta");
	}

	async changeAction(
		filePath: string,
		text: string,
		line: number,
		column: number
	) {
		if (this.current_file !== filePath) await this.openAction(filePath);
		if (column !== 0) column++;
		await this.vscode_page?.keyboard.down("Meta");
		await this.vscode_page?.keyboard.press("p");
		await this.vscode_page?.keyboard.up("Meta");
		await this.vscode_page?.keyboard.type(`:${line}:${column}`);
		await this.vscode_page?.keyboard.press("Enter");
		if (text === "") {
			await this.vscode_page?.keyboard.press("Delete");
			return;
		}

		if (text === " ") {
			await this.vscode_page?.keyboard.press("Space");
			return;
		}

		if (text === "\n") {
			await this.vscode_page?.keyboard.press("Enter");
			return;
		}
		await this.vscode_page?.keyboard.type(text);
	}

	async closeVscode() {
		await this.browser?.close();
	}

	async setup() {
		const spinner = createSpinner("Connecting to SSH server...").start();

		try {
			await new Promise((resolve, reject) => {
				this.ssh_connection.on("ready", () => {
					spinner.success({
						text: "Connected to SSH server",
					});
					resolve(undefined);
				});

				this.ssh_connection.on("error", (error) => {
					spinner.error({
						text: "Failed to connect to SSH server",
					});
					reject(error);
				});

				this.ssh_connection.connect({
					host: this.host,
					username: this.username,
					password: this.password,
				});
			});
		} catch (error) {
			spinner.error({
				text: "Failed to connect to SSH server",
			});
			console.error(error);
		}
	}

	async endConnection() {
		this.ssh_connection.end();
	}

	async executeCommand(command: string, log: boolean = true) {
		await new Promise((resolve, reject) => {
			this.ssh_connection.exec(command, (error, stream) => {
				if (error) {
					console.error(error);
					reject(error);
				}
				stream.on("data", (data: any) => {
					if (log) {
						console.log(data.toString());
					}
				});
				stream.on("close", (code: any, signal: any) => {
					console.debug(`Command ${command} executed on ${this.host}`);
					resolve({ code, signal });
				});
			});
		});
	}

	async installCode() {
		await this.executeCommand(
			"curl -LO https://github.com/cdr/code-server/releases/download/3.2.0/code-server-3.2.0-linux-x86_64.tar.gz"
		);
		await this.executeCommand(
			"tar -xzvf code-server-3.2.0-linux-x86_64.tar.gz"
		);
		await this.executeCommand(
			`./code-server-3.2.0-linux-x86_64/code-server --bind-addr 0.0.0.0:${this.desired_port} --auth none > /dev/null 2>&1 &`
		);
	}

	async killCode() {}
}
