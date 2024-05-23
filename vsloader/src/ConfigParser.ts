import * as fs from "fs";
import { createSpinner } from "nanospinner";

interface Action {
	action: "start" | "open" | "change" | "save" | "stop";
	time: number;
}

interface Start extends Action {
	action: "start";
}

interface Open extends Action {
	action: "open";
	file: string;
}
interface Save extends Action {
	action: "save";
	file: string;
}

interface Stop extends Action {
	action: "stop";
}

interface Change extends Action {
	action: "change";
	file: string;
	text: string;
	line: number;
	column: number;
}

export async function parseConfig(configPath: string) {
	const spinner = createSpinner("Loading config").start();
	try {
		const data = fs.readFileSync(configPath, "utf8");
		const parsed = JSON.parse(data);
		// if (!parsed.name || !parsed.students) {
		// 	throw new Error("Invalid missing name or students key in config file");
		// }
		// if (!Array.isArray(parsed.students)) {
		// 	throw new Error("Invalid students key in config file");
		// }
		// const ipRegex = new RegExp(
		// 	/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
		// );
		// parsed.students.forEach((student: any) => {
		// 	if (!student.name || !student.users || !student.actions) {
		// 		throw new Error("Invalid student object in config file");
		// 	}
		// 	if (!Array.isArray(student.users) || !Array.isArray(student.actions)) {
		// 		throw new Error("Invalid student object in config file");
		// 	}
		// 	student.users.forEach((user: any) => {
		// 		if (!user.username || !user.password || !user.host) {
		// 			throw new Error("Invalid user object in config file");
		// 		}
		// 		if (!ipRegex.test(user.host)) {
		// 			throw new Error("Invalid host in config file");
		// 		}
		// 	});
		// 	student.actions.forEach((action: any) => {
		// 		if (!action.action || !action.time) {
		// 			throw new Error("Invalid action object in config file");
		// 		}
		// 		if (
		// 			action.action === "open" ||
		// 			action.action === "save" ||
		// 			action.action === "change" ||
		// 			action.action === "start" ||
		// 			action.action === "stop"
		// 		) {
		// 			if (!action.file) {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 		if (action.action === "change") {
		// 			if (!action.text || !action.line || !action.column) {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 			if (typeof action.time !== "number") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 			if (
		// 				typeof action.line !== "number" ||
		// 				typeof action.column !== "number"
		// 			) {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 			if (typeof action.text !== "string") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 		if (action.action === "start") {
		// 			if (typeof action.time !== "number") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 		if (action.action === "stop") {
		// 			if (typeof action.time !== "number") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 		if (action.action === "open") {
		// 			if (typeof action.time !== "number") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 			if (typeof action.file !== "string") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 		if (action.action === "save") {
		// 			if (typeof action.time !== "number") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 			if (typeof action.file !== "string") {
		// 				throw new Error("Invalid action object in config file");
		// 			}
		// 		}
		// 	});
		// 	//@ts-ignore
		// 	student.actions;
		// });
		spinner.success({
			text: "Config loaded",
		});
		return parsed as {
			name: string;
			sudo_accounts: {
				username: string;
				password: string;
				host: string;
			}[];
			students: {
				name: string;
				users: {
					username: string;
					password: string;
					host: string;
				}[];
				actions: {}[];
			};
		};
	} catch (error: any) {
		spinner.error({
			text: error.message,
		});
		console.error(error);
	}
}
