class ProjectConfigGenerator {
	private actions: object[] = [];
	private last_action_timer: number = 0;
	private workspace_folder: string = "FAIL_TO_SET_WORKSPACE_FOLDER";

	private validatePath(path: string) {
		return path.startsWith(this.workspace_folder) && !path.endsWith("git");
	}

	constructor() {}

	setWorkspaceFolder(workspace_folder: string) {
		this.workspace_folder = workspace_folder;
		this.actions = [{ action: "start", time: 0 }];
		this.last_action_timer = new Date().getTime();
	}

	changeFile(file_path: string, text: string, line: number, column: number) {
		if (!this.validatePath(file_path)) {
			return;
		}
		file_path.replace(this.workspace_folder, "");
		const timestamp = new Date().getTime();
		this.actions.push({
			action: "change",
			file: file_path,
			text: text,
			line: line,
			column: column,
			time: timestamp - this.last_action_timer,
		});
		this.last_action_timer = timestamp;
	}

	public openFile(file_path: string) {
		if (!this.validatePath(file_path)) {
			return;
		}
		file_path.replace(this.workspace_folder, "");
		const timestamp = new Date().getTime();
		this.actions.push({
			action: "open",
			file: file_path,
			time: timestamp - this.last_action_timer,
		});
		this.last_action_timer = timestamp;
	}

	public closeFile(file_path: string) {
		if (!this.validatePath(file_path)) {
			return;
		}
		file_path.replace(this.workspace_folder, "");
		const timestamp = new Date().getTime();
		this.actions.push({
			action: "close",
			file: file_path,
			time: timestamp - this.last_action_timer,
		});
		this.last_action_timer = timestamp;
	}

	public saveFile(file_path: string) {
		if (!this.validatePath(file_path)) {
			return;
		}
		file_path.replace(this.workspace_folder, "");
		const timestamp = new Date().getTime();
		this.actions.push({
			action: "save",
			file: file_path,
			time: timestamp - this.last_action_timer,
		});
		this.last_action_timer = timestamp;
	}
	public saveConfig() {
		const timestamp = new Date().getTime();
		this.actions.push({
			action: "stop",
			time: timestamp - this.last_action_timer,
		});
		this.last_action_timer = timestamp;
		const config = JSON.stringify(this.actions, null, 2);
		this.actions = [{ action: "start", time: 0 }];
		this.last_action_timer = 0;
		return config;
	}
}

export default ProjectConfigGenerator;
