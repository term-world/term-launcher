import * as vscode from 'vscode';
import {termPanel} from "../panels/termPanel";


vscode.ExtensionContext;
export async function activate(context: vscode.ExtensionContext) {
  const worldMenu = vscode.commands.registerCommand("world.menu", () => {
    termPanel.render(context, context.extensionUri);
  })
  termPanel.render(context, context.extensionUri);
}

export function deactivate() {}