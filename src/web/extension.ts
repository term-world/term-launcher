import * as vscode from 'vscode';
import {termPanel} from "../panels/termPanel";

export function activate(context: vscode.ExtensionContext) {
  const worldMenu = vscode.commands.registerCommand("world.menu", () => {
    termPanel.render();
  })
  termPanel.render();
}

export function deactivate() {}
