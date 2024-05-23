import * as vscode from "vscode";
import ProjectConfigGenerator from "./ConfigBuilder";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "recorder" is now active!');
	const configBuilder = new ProjectConfigGenerator();
	let disposable = vscode.commands.registerCommand(
		"recorder.startRecording",
		() => {
			const workspace_folder = vscode.workspace.workspaceFolders;
			if (workspace_folder === undefined) {
				vscode.window.showErrorMessage("No workspace folder found!");
				return;
			}
			configBuilder.setWorkspaceFolder(workspace_folder[0].uri.path);
			const onChangeFile = vscode.workspace.onDidChangeTextDocument((event) => {
				const file_path = event.document.uri.path;
				event.contentChanges.forEach((change) => {
					const text = change.text;
					const line = change.range.start.line + 1;
					const column = change.range.start.character;
					configBuilder.changeFile(file_path, text, line, column);
				});
			});
			const onSaveFile = vscode.workspace.onDidSaveTextDocument((event) => {
				configBuilder.saveFile(event.uri.path);
			});
			const onOpenFile = vscode.workspace.onDidOpenTextDocument((event) => {
				configBuilder.openFile(event.uri.path);
			});
			const onCloseFile = vscode.workspace.onDidCloseTextDocument((event) => {
				configBuilder.closeFile(event.uri.path);
			});

			context.subscriptions.push(onChangeFile);
			context.subscriptions.push(onSaveFile);
			context.subscriptions.push(onOpenFile);
			context.subscriptions.push(onCloseFile);
		}
	);
	const disposable2 = vscode.commands.registerCommand(
		"recorder.stopRecording",
		() => {
			vscode.window.showInformationMessage("Recording stopped!");
			// create a new file
			const config = configBuilder.saveConfig();
			const workspace_folder = vscode.workspace.workspaceFolders;
			if (workspace_folder === undefined) {
				vscode.window.showErrorMessage("No workspace folder found!");
				return;
			}
			const file_path =
				workspace_folder[0].uri.path + "/.config/recording.json";
			vscode.workspace.fs.writeFile(
				vscode.Uri.file(file_path),
				Buffer.from(config)
			);
			context.subscriptions.push(disposable);
			context.subscriptions.push(disposable2);
		}
	);
}

// This method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
	console.log("Deactivated!");
	context.subscriptions.forEach((element) => {
		element.dispose();
	});
}
