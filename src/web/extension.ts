import * as vscode from 'vscode';
import {termPanel} from "../panels/termPanel";

export function activate(context: vscode.ExtensionContext) {
  termPanel.render();
}

export function deactivate() {}
