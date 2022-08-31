import * as vscode from "vscode";
import {getUri} from "../utils/getUri";

export class termPanel {
  public static currentPanel: termPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];
  private recentFiles: {key:string, filePath:string}[];

  private constructor(panel: vscode.WebviewPanel, extensionContext:vscode.ExtensionContext, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
    this._panel.onDidDispose(this.dispose, null, this._disposables);
    this._panel.webview.onDidReceiveMessage(
      message => {
        switch(message.command) {
          case 'recents':
            vscode.commands.executeCommand(message.text);
            return;
        }
      },
    );
    this.recentFiles = extensionContext.globalState.get('recents',[]);
    console.log(extensionContext.globalState.keys());
    console.log(extensionContext.workspaceState.keys());
  }

  public static render(extensionContext: vscode.ExtensionContext, extensionUri: vscode.Uri) {

    if(termPanel.currentPanel) {
      termPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel("term-world", "term-world", vscode.ViewColumn.One, {
        enableScripts: true,
        enableCommandUris: true
      });
      termPanel.currentPanel = new termPanel(panel, extensionContext, extensionUri);
    }
  }

  public dispose() {
    termPanel.currentPanel = undefined;
    this._panel.dispose();
    while(this._disposables.length) {
      const disposable = this._disposables.pop();
      if(disposable) {
        disposable.dispose();
      }
    }
  }

  private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
    const toolkitUri = getUri(webview, extensionUri, [
      "node_modules",
      "@vscode",
      "webview-ui-toolkit",
      "dist",
      "toolkit.js",
    ]);
    //        <script type="module" src="${toolkitUri}"></script>
    return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.typekit.net/vwi0iai.css">
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
         crossorigin="anonymous">
        </script>
        <title>term-world Launcher</title>
      </head>
      <body>
      <style>
        html {
          overflow-x: hidden;
          background-color: #222;
        }
        html, h1, h2, h3, h4, h5, body {
          font-family: fira-mono, monospace; 
          color: #fff;
          font-size: 1vw;
        }
        h2 {
          font-size: 2rem;
        }
        #content {
          display: grid;
          grid-template-columns: 50% auto;
          width: 75%;
          margin: 0 auto;
          column-gap: 5%;
        }
        #term-weather {
          border-radius: 8px;
          width: auto;
          padding: 5%;
        }
        #report {
          display: grid;
          grid-template-columns: auto auto auto;
        }
        .orange { color: #F79120; }
        .black { color: #222222; }
        .white { color: #FFFFFF; }
        .auburn { color: #A86416; }
        .gold { color: #E6CD17; }
        .temp{
          font-size: 4rem;
        }
        .conditions {
          font-size: 1rem;
          display: grid;
          grid-template-rows: auto;
          color: #222;
        }
      </style>
    <!-- HEADER -->
    <Div style = "width: 100vw;">
     <?xml version="1.0" encoding="UTF-8"?><svg id="uuid-f5b42290-82f3-4424-ba3b-8c0f1b080734" xmlns="http://www.w3.org/2000/svg" style = "display: block; height: 250px; width: auto; position: relative; margin: 0 auto; margin-bottom: 5%;" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 179.13 97.86"><defs><linearGradient id="uuid-d7f6995a-6693-4a59-81a8-37d467e569b6" x1="56.19" y1="81.38" x2="56.19" y2="39.17" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a86628"/><stop offset=".02" stop-color="#b2772a"/><stop offset=".09" stop-color="#cea52b"/><stop offset=".14" stop-color="#dfc223"/><stop offset=".17" stop-color="#e6cd1d"/><stop offset=".23" stop-color="#e9be1f"/><stop offset=".36" stop-color="#f49922"/><stop offset=".38" stop-color="#f79221"/><stop offset=".41" stop-color="#f9a242"/><stop offset=".46" stop-color="#faca92"/><stop offset=".51" stop-color="#fbe5cc"/><stop offset=".54" stop-color="#fff8f1"/><stop offset=".56" stop-color="#fff"/><stop offset=".63" stop-color="#fbdcb8"/><stop offset=".71" stop-color="#fab467"/><stop offset=".77" stop-color="#f99c35"/><stop offset=".79" stop-color="#f79221"/><stop offset=".82" stop-color="#f49822"/><stop offset=".85" stop-color="#f1a71f"/><stop offset=".89" stop-color="#e8c11f"/><stop offset=".91" stop-color="#e6cd1d"/><stop offset="1" stop-color="#a86628"/></linearGradient><linearGradient id="uuid-268dd3f9-6cb7-47cd-a456-eb87e8e23ce4" x1="90.28" x2="90.28" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-cb9c4470-1c23-4c77-a004-09d0d6ebbab1" x1="124.37" x2="124.37" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-0a5e2952-15f5-42c0-bd60-ca86b1488213" x1="89.56" y1="90.3" x2="89.56" y2="30.24" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-957a3f17-c9ae-4aae-9eda-cc869db87483" x1="46.16" y1="92.58" x2="46.16" y2="86.81" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f79221"/><stop offset="1" stop-color="#e6cd1d"/></linearGradient><linearGradient id="uuid-302367df-1eb5-4e3c-94cd-605c93ed3e02" x1="51.56" x2="51.56" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-4839fbfd-7373-4301-9ecc-a3f5a27f3d1e" x1="56.96" y1="92.58" x2="56.96" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-d04c5134-8a01-4d39-9ffd-9eb9aac87d78" x1="62.36" y1="92.58" x2="62.36" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-390e5a5a-6b59-4b69-acea-9ad10787f761" x1="69.69" y1="92.58" x2="69.69" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-07339b36-b736-492c-9f68-0cdc08b9ddb5" x1="75.09" y1="92.58" x2="75.09" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-f36f6940-930c-43e0-95ae-405a58674f6d" x1="80.49" y1="92.58" x2="80.49" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-3be79951-f6d4-48a1-9a85-c1fb704d42b8" x1="87.82" y1="92.58" x2="87.82" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-24a19680-3b66-4802-827f-bc142441100e" x1="93.22" x2="93.22" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-0f892f51-8c92-49ed-b48c-17e14e5b472e" x1="98.62" y1="92.58" x2="98.62" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-2760403e-def0-48c5-8ed8-b2548ae74c05" x1="104.02" x2="104.02" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-2eec4c9f-feac-4cfc-9b5e-921e1f597c53" x1="111.35" y1="92.58" x2="111.35" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-92b67ab1-711c-45b0-8260-5d6d84fd513d" x1="116.76" y1="92.58" x2="116.76" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-e375a926-630d-454f-a4d0-7c05e37dfa96" x1="122.16" y1="92.58" x2="122.16" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-71dc830e-1272-43cf-ad14-743854aa1121" x1="127.56" y1="92.58" x2="127.56" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-a53c4442-d28d-46bb-bebe-f31cebf1cde7" x1="132.96" y1="92.58" x2="132.96" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/></defs><path d="M71.53,39.17v6.96h-11.12v35.25h-8.46V46.12h-11.11v-6.96h30.69Z" fill="url(#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6)" stroke="#222"/><path d="M97.44,81.38c-1.91-4.68-3.99-9.35-6.24-14.01-2.25-4.66-4.67-9.33-7.26-14.01v28.03h-7.57V39.17h6.75c1.27,2,2.55,4.17,3.82,6.51,1.27,2.34,2.51,4.67,3.72,6.99,1.2,2.32,2.32,4.57,3.34,6.75,1.02,2.18,1.9,4.09,2.63,5.73v-25.98h7.57v42.21h-6.75Z" fill="url(#uuid-268dd3f9-6cb7-47cd-a456-eb87e8e23ce4)" stroke="#222"/><path d="M131.53,81.38c-1.91-4.68-3.99-9.35-6.24-14.01-2.25-4.66-4.67-9.33-7.26-14.01v28.03h-7.57V39.17h6.75c1.27,2,2.55,4.17,3.82,6.51,1.27,2.34,2.51,4.67,3.72,6.99,1.2,2.32,2.32,4.57,3.34,6.75,1.02,2.18,1.9,4.09,2.63,5.73v-25.98h7.57v42.21h-6.75Z" fill="url(#uuid-cb9c4470-1c23-4c77-a004-09d0d6ebbab1)" stroke="#222"/><polyline points="40.5 89.8 30.88 89.8 30.88 30.74 148.25 30.74 148.25 89.8 138.63 89.8" fill="none" stroke="url(#uuid-0a5e2952-15f5-42c0-bd60-ca86b1488213)"/><path d="M47.89,86.81h.57v5.77h-2.3v-.57h-.57v-4.61h-.58v5.19h-1.15v-5.77h2.3v.58h.57v4.61h.58v-5.19h.57Z" fill="url(#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483)"/><path d="M53.29,86.81h.57v1.15h-3.46v1.15h2.88v.57h-.58v.58h-2.3v1.15h3.46v1.15h-4.61v-5.77h4.04Z" fill="url(#uuid-302367df-1eb5-4e3c-94cd-605c93ed3e02)"/><path d="M58.69,86.81h.57v5.77h-1.15v-.57h-.58v-.58h-1.15v.58h-.58v.57h-1.15v-5.77h1.15v4.04h.58v-3.46h1.15v3.46h.58v-4.04h.57Z" fill="url(#uuid-4839fbfd-7373-4301-9ecc-a3f5a27f3d1e)"/><path d="M64.09,87.39h.58v1.15h-1.15v-.57h-2.3v1.15h2.88v.57h.58v2.3h-.58v.58h-3.46v-.58h-.57v-1.15h1.15v.57h2.3v-1.15h-2.3v-.57h-.58v-.57h-.57v-1.73h.57v-.58h3.46v.58Z" fill="url(#uuid-d04c5134-8a01-4d39-9ffd-9eb9aac87d78)"/><path d="M71.42,86.81h.57v2.31h-.57v.57h-.58v.57h-.57v2.31h-1.15v-2.31h-.57v-.57h-.57v-.57h-.58v-2.31h1.15v1.73h.57v.58h1.15v-.58h.57v-1.73h.58Z" fill="url(#uuid-390e5a5a-6b59-4b69-acea-9ad10787f761)"/><path d="M76.82,87.39h.57v4.61h-.57v.57h-3.46v-.57h-.58v-4.61h.58v-.58h3.46v.58Zm-.57,1.15v-.57h-2.31v3.46h2.31v-2.88Z" fill="url(#uuid-07339b36-b736-492c-9f68-0cdc08b9ddb5)"/><path d="M82.22,86.81h.58v5.19h-.58v.57h-3.46v-.57h-.57v-5.19h1.15v4.61h2.31v-4.61h.57Z" fill="url(#uuid-f36f6940-930c-43e0-95ae-405a58674f6d)"/><path d="M89.55,86.81h.57v5.77h-1.15v-4.04h-.58v3.46h-1.15v-3.46h-.58v4.04h-1.15v-5.77h1.15v.58h.58v.57h1.15v-.57h.58v-.58h.57Z" fill="url(#uuid-3be79951-f6d4-48a1-9a85-c1fb704d42b8)"/><path d="M94.95,86.81h.57v1.15h-4.61v-1.15h4.04Zm0,4.62h.57v1.15h-4.61v-1.15h4.04Zm0-4.62v1.15h-1.15v3.46h1.15v1.15h-3.46v-1.15h1.15v-3.46h-1.15v-1.15h3.46Z" fill="url(#uuid-24a19680-3b66-4802-827f-bc142441100e)"/><path d="M100.35,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-0f892f51-8c92-49ed-b48c-17e14e5b472e)"/><path d="M105.76,86.81h.57v1.15h-3.46v1.15h2.88v.57h-.58v.58h-2.3v1.15h3.46v1.15h-4.61v-5.77h4.04Z" fill="url(#uuid-2760403e-def0-48c5-8ed8-b2548ae74c05)"/><path d="M113.08,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-2eec4c9f-feac-4cfc-9b5e-921e1f597c53)"/><path d="M118.49,87.39h.57v2.3h-.57v.57h-.58v.58h.58v.57h.57v1.15h-1.15v-.58h-.57v-.57h-.58v-.57h-1.15v1.73h-1.15v-5.77h4.04v.58Zm-1.15,2.3h.57v-1.73h-2.3v1.73h1.73Z" fill="url(#uuid-92b67ab1-711c-45b0-8260-5d6d84fd513d)"/><path d="M123.88,86.81h.58v5.19h-.58v.57h-3.46v-.57h-.57v-5.19h1.15v4.61h2.31v-4.61h.57Z" fill="url(#uuid-e375a926-630d-454f-a4d0-7c05e37dfa96)"/><path d="M129.29,87.39h.58v1.15h-1.15v-.57h-2.3v1.15h2.88v.57h.58v2.3h-.58v.58h-3.46v-.58h-.57v-1.15h1.15v.57h2.3v-1.15h-2.3v-.57h-.58v-.57h-.57v-1.73h.57v-.58h3.46v.58Z" fill="url(#uuid-71dc830e-1272-43cf-ad14-743854aa1121)"/><path d="M134.69,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-a53c4442-d28d-46bb-bebe-f31cebf1cde7)"/></svg>
      </div>
      <!-- HEADER -->
      <div id = "content" class = "white">

      <div>
        <div id = "term-weather" style="background: #fff; color: #222; overflow: auto;">
          <h3 style = "color: #222;">term-world Weather</h3>
          <div id = "report">
          </div>
        </div>
        <h2>IS cliV3 ALIVE?</h2>
        <img src = "https://unsplash-proxy.glitch.me/random/512x512">
        <?xml version="1.0" encoding="UTF-8"?><svg id="uuid-4465fb65-d18a-4009-bfc8-0d1366143fbf" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" width="100px" style = "position: relative; top: -512px; left: 125px;" height=200><defs><mask id="uuid-cb4cdbc6-4e18-4929-b9fe-0e4234a08f7e" x="29" y="30.32" width="142" height="132.68" maskUnits="userSpaceOnUse"/><linearGradient id="uuid-6353a97c-a615-44d0-aefc-fc1e1398e07f" x1="100" y1="21.1" x2="100" y2="182.9" gradientTransform="translate(0 202) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a86416"/><stop offset=".02" stop-color="#b37616"/><stop offset=".09" stop-color="#cea517"/><stop offset=".14" stop-color="#e0c217"/><stop offset=".17" stop-color="#e6cd17"/><stop offset=".23" stop-color="#eabe19"/><stop offset=".36" stop-color="#f5981f"/><stop offset=".38" stop-color="#f79120"/><stop offset=".41" stop-color="#f8a140"/><stop offset=".46" stop-color="#fbc991"/><stop offset=".51" stop-color="#fde6cc"/><stop offset=".54" stop-color="#fef8f1"/><stop offset=".56" stop-color="#fff"/><stop offset=".63" stop-color="#fcdcb8"/><stop offset=".71" stop-color="#fab467"/><stop offset=".77" stop-color="#f89b34"/><stop offset=".79" stop-color="#f79120"/><stop offset=".82" stop-color="#f5971f"/><stop offset=".85" stop-color="#f1a71d"/><stop offset=".89" stop-color="#e9c119"/><stop offset=".91" stop-color="#e6cd17"/><stop offset="1" stop-color="#a86416"/></linearGradient></defs><g><g><path d="M141.9,106.5v6.6h-4.1c-1.2,0-2.2,.3-3.1,.8-.9,.5-1.6,1.2-2.2,2.1s-1,1.8-1.3,2.9-.5,2.2-.5,3.3v16.7c0,2.6-.3,4.8-.8,6.7s-1.4,3.6-2.7,4.9c-1.3,1.3-3,2.4-5.1,3.1h0c-.2,.1-.5,.1-.7,.2-.1,0-.2,0-.2,.1-.2,0-.4,.1-.5,.1s-.2,0-.3,.1c-.2,0-.5,.1-.7,.1s-.3,.1-.5,.1h-.3c-.6,.1-1.3,.2-2,.2h0v.1c0,1.4-.1,2.7-.4,3.7-.3,1.1-.8,2-1.5,2.7-.7,.8-1.6,1.3-2.8,1.7-1.2,.4-2.6,.6-4.4,.6h-15.8c-1.8,0-3.2-.2-4.4-.6-1.2-.4-2.1-1-2.8-1.7-.7-.8-1.2-1.7-1.5-2.7-.3-1.1-.4-2.3-.4-3.7v-.3c-.7-.1-1.4-.1-2-.2h-.2c-.2,0-.4-.1-.5-.1-.2,0-.3-.1-.5-.1s-.3-.1-.5-.1-.3-.1-.5-.1c-.1,0-.2,0-.3-.1-.2-.1-.5-.1-.7-.2-2.1-.7-3.8-1.7-5.1-3.1-1.3-1.4-2.2-3-2.7-4.9s-.8-4.2-.8-6.7v-16.7c0-1-.1-2.1-.4-3.2-.2-.6-.4-1.2-.7-1.8,0-.1-.1-.2-.1-.3s-.1-.1-.1-.2c-.1-.2-.2-.4-.4-.6h0c-.6-.9-1.3-1.6-2.2-2.1h0c-.8-.5-1.8-.8-2.9-.8h-4.3v-6.6h4.5c1-.1,1.9-.3,2.6-.8,.9-.5,1.6-1.2,2.2-2.1s1-1.8,1.4-2.9c.3-1.1,.5-2.2,.5-3.3v-16.5c0-2.6,.3-4.8,.8-6.7,.5-1.9,1.4-3.6,2.7-4.9,.6-.7,1.4-1.3,2.2-1.8,.8-.5,1.8-.9,2.9-1.3,.2-.1,.5-.1,.7-.2,.1,0,.2,0,.2-.1,.2,0,.4-.1,.5-.1s.2,0,.3-.1c.2,0,.5-.1,.7-.1s.3-.1,.5-.1h.3c.6-.1,1.3-.2,2-.2h0v-.1c0-1.4,.1-2.7,.4-3.7,.3-1.1,.8-2,1.5-2.7s1.6-1.3,2.8-1.7c1.2-.4,2.6-.6,4.4-.6h15.8c1.8,0,3.2,.2,4.4,.6,1.2,.4,2.1,1,2.8,1.7,.7,.8,1.2,1.7,1.5,2.7s.4,2.3,.4,3.7v.1c.7,.1,1.4,.1,2,.2h.2c.2,0,.4,.1,.5,.1,.2,0,.3,.1,.5,.1s.3,.1,.5,.1,.3,.1,.5,.1c.1,0,.2,0,.3,.1,.2,.1,.5,.1,.7,.2h0c2.1,.7,3.8,1.7,5.1,3.1,1.3,1.4,2.2,3,2.7,4.9s.8,4.2,.8,6.7v16.7c0,1,.1,2.1,.4,3.2,.2,.6,.4,1.2,.7,1.8,0,.1,.1,.2,.1,.3s.1,.1,.1,.2c.1,.2,.2,.4,.4,.6h0c.6,.9,1.3,1.6,2.2,2.1,.9,.6,1.9,.8,3.1,.8h4.1Zm-14.2,4.3c.6-.4,1.1-.7,1.7-1-1.8-.8-3.4-2.4-4.7-4.6-1.2-2.1-1.9-4.9-2.1-8.6v-13.5h-1.7c-.7,0-1.2,.1-1.7,.4s-.9,.7-1.2,1.2c-.3,.5-.6,1-.8,1.6-.2,.6-.3,1.2-.3,1.8v9.3c0,1.4-.1,2.7-.4,3.7-.3,1.1-.8,2-1.5,2.7-.7,.8-1.7,1.3-2.8,1.7-1.2,.4-2.6,.6-4.4,.6h-15.8c-1.8,0-3.2-.2-4.4-.6-1.2-.4-2.1-1-2.8-1.7-.7-.8-1.2-1.7-1.5-2.7-.3-1.1-.4-2.3-.4-3.7v-9.3c0-.6-.1-1.2-.3-1.8-.2-.6-.4-1.1-.8-1.6-.3-.5-.7-.9-1.2-1.2-.5-.3-1-.5-1.7-.5h-1.7v13.8h0v.1c-.2,3.7-.8,6.5-2,8.4-1,1.5-2,2.7-3.1,3.5-.5,.4-1.1,.7-1.6,.9,1.8,.8,3.4,2.4,4.7,4.6,1.3,2.1,2,5,2.1,8.9v13.2h1.7c.7,0,1.2-.1,1.7-.4,.5-.3,.9-.7,1.2-1.2,.3-.5,.6-1,.8-1.6,.2-.6,.3-1.2,.3-1.8v-9.3c0-1.4,.1-2.7,.4-3.7,.3-1.1,.8-2,1.5-2.7s1.7-1.3,2.8-1.7c1.2-.4,2.6-.6,4.4-.6h15.8c1.8,0,3.2,.2,4.4,.6,1.2,.4,2.1,1,2.8,1.7,.7,.8,1.2,1.7,1.5,2.7,.3,1.1,.4,2.3,.4,3.7v9.3c0,.6,.1,1.2,.3,1.8s.4,1.1,.7,1.6c.3,.5,.7,.9,1.2,1.2s1,.5,1.7,.5h1.7v-13.5c.1-3.9,.8-6.9,2-8.8h0c1.1-1.5,2.1-2.6,3.1-3.4Zm-5.1,29.4h-1.6c-.7,0-1.2,.1-1.7,.4-.5,.3-.9,.7-1.2,1.2-.3,.5-.6,1-.7,1.6s-.3,1.2-.3,1.8v2.4h0c.4-.1,.8-.2,1.2-.3h0c.4-.1,.7-.2,1-.4h.1c.1-.1,.2-.1,.4-.2h.1c.1-.1,.3-.2,.4-.2l.1-.1c.1-.1,.2-.1,.3-.2l.1-.1c.1-.1,.2-.2,.3-.3h0c.1-.1,.1-.2,.2-.2l.1-.1c0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.2,.1-.2v-.1c0-.1,.1-.2,.1-.3s0-.1,.1-.2q0-.1,.1-.2t.1-.2v-.2c0-.1,0-.2,.1-.3v-.1c0-.1,0-.2,.1-.3v-.1c-.2-.7-.2-1.5-.1-2.2Zm0-60.8h0c-.1-.8-.1-1.6-.3-2.2h0c0-.1,0-.2-.1-.3v-.1c0-.1-.1-.2-.1-.3v-.1c0-.1-.1-.2-.1-.3v-.1c-.1-.3-.2-.5-.3-.8q0-.1-.1-.2c0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-.1-.1c0-.1-.1-.1-.1-.2l-.1-.1c0-.1-.1-.1-.1-.2,0,0,0-.1-.1-.1l-.2-.2h0c-.1-.1-.2-.2-.3-.3l-.1-.1c-.1-.1-.2-.1-.3-.2,0,0-.1,0-.1-.1-.1-.1-.2-.2-.4-.2h-.1c-.1-.1-.2-.1-.3-.2,0,0-.1,0-.1-.1-.1-.1-.2-.1-.4-.2h-.1c-.1-.1-.3-.1-.5-.2h-.1c-.1,0-.3-.1-.4-.1h-.1c-.2,0-.3-.1-.5-.1h0v2.4c0,.6,.1,1.2,.2,1.8,.2,.6,.4,1.1,.7,1.6,.3,.5,.7,.9,1.2,1.2,.5,.3,1,.5,1.7,.5h1.9Zm-6.2,58.9c-1-.5-1.9-1.3-2.7-2.6-.8-1.3-1.2-3.1-1.2-5.5v-7.9c0-1.9-.3-3.3-1-4s-1.8-1.1-3.4-1.1h-16.4c-1.6,0-2.8,.4-3.4,1.1s-1,2.1-1,4v7.9c0,2.6-.4,4.4-1.2,5.7-.4,.6-.8,1.1-1.2,1.5-.4,.4-.9,.7-1.4,.9,1,.5,1.9,1.3,2.7,2.6,.8,1.3,1.2,3.1,1.2,5.5v1.3h25.3v-1.3c0-2.6,.4-4.4,1.2-5.7,.6-1.1,1.5-2,2.5-2.4Zm0-57.1c-1-.5-1.9-1.3-2.7-2.6-.8-1.3-1.2-3.1-1.2-5.5v-1.3h-25.3v1.3c0,2.6-.4,4.4-1.2,5.7-.8,1.2-1.7,2-2.7,2.5,1,.5,1.9,1.3,2.7,2.6,.8,1.3,1.2,3.1,1.2,5.5v7.9c0,1.9,.3,3.3,1,4s1.9,1.1,3.4,1.1h16.3c1.6,0,2.8-.4,3.4-1.1,.7-.7,1-2.1,1-4v-8c0-2.6,.4-4.4,1.2-5.7,.4-.6,.8-1.1,1.2-1.5,.7-.3,1.2-.7,1.7-.9Zm-10.5-16.1h6.7c0-1.9-.4-3.2-1-3.9-.7-.7-1.8-1.1-3.4-1.1h-16.5c-1.6,0-2.8,.4-3.4,1.1s-1,2-1,3.9h18.6Zm6.7,89.3h-25.3c0,1.9,.4,3.2,1,3.9,.7,.7,1.9,1.1,3.4,1.1h16.3c1.6,0,2.8-.4,3.4-1.1,.8-.7,1.2-2,1.2-3.9Zm-29.7-80v-2.4h0l-1.2,.3h0c-.4,.1-.7,.2-1,.4h-.1c-.1,.1-.2,.1-.4,.2h-.1c-.1,.1-.3,.2-.4,.2h-.1c-.1,.1-.2,.1-.3,.2l-.1,.1c-.1,.1-.2,.2-.3,.3h0c-.1,.1-.1,.2-.2,.2l-.1,.1c0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.2-.1,.2v.1c0,.1-.1,.2-.1,.3s0,.1-.1,.2q0,.1-.1,.2c-.1,.1,0,.1-.1,.2v.2c0,.1,0,.2-.1,.3v.1c0,.1,0,.2-.1,.3v.1c-.1,.7-.2,1.4-.3,2.2h1.6c.7,0,1.2-.1,1.7-.4s.9-.7,1.2-1.2c.3-.5,.6-1,.8-1.6,.5-.5,.6-1.1,.6-1.7Zm0,73.1v-2.4c0-.6-.1-1.2-.2-1.8s-.4-1.1-.7-1.6c-.3-.5-.7-.9-1.2-1.2s-1-.5-1.7-.5h-1.7c.1,.8,.1,1.6,.3,2.2h0c0,.1,0,.2,.1,.3v.1c0,.1,.1,.2,.1,.3v.1c0,.1,.1,.2,.1,.3v.1c.1,.3,.2,.5,.3,.8q0,.1,.1,.2c0,.1,.1,.1,.1,.2s.1,.1,.1,.2l.1,.1c0,.1,.1,.1,.1,.2l.1,.1c0,.1,.1,.1,.1,.2,0,0,0,.1,.1,.1q.1,.1,.2,.2h0c.1,.1,.2,.2,.3,.3l.1,.1c.1,.1,.2,.1,.3,.2,0,0,.1,0,.1,.1,.1,.1,.2,.2,.4,.2h.1c.1,.1,.2,.1,.3,.2,0,0,.1,0,.1,.1,.1,.1,.2,.1,.4,.2h.1c.1,.1,.3,.1,.5,.2h.1c.1,0,.3,.1,.4,.1h.1c-.1,0,.1,.1,.3,.1h0Z"/><path d="M129.5,109.8c-.6,.3-1.2,.6-1.7,1-1.1,.8-2.1,2-3,3.4h0c-1.2,2-1.9,4.9-2,8.8v13.5h-1.7c-.7,0-1.2-.2-1.7-.5s-.9-.7-1.2-1.2c-.3-.5-.6-1-.7-1.6-.2-.6-.3-1.2-.3-1.8v-9.3c0-1.4-.1-2.7-.4-3.7-.3-1.1-.8-2-1.5-2.7s-1.6-1.3-2.8-1.7c-1.2-.4-2.6-.6-4.4-.6h-15.8c-1.8,0-3.2,.2-4.4,.6-1.2,.4-2.1,1-2.8,1.7-.7,.8-1.2,1.7-1.5,2.7-.3,1.1-.4,2.3-.4,3.7v9.3c0,.6-.1,1.2-.3,1.8-.2,.6-.4,1.1-.8,1.6-.3,.5-.7,.9-1.2,1.2s-1,.4-1.7,.4h-1.7v-13.2c-.1-3.8-.8-6.8-2.1-8.9-1.4-2.3-3-3.8-4.7-4.6,.6-.2,1.1-.5,1.6-.9,1.1-.8,2.2-2,3.1-3.5,1.2-1.9,1.9-4.7,2-8.4v-.1h0v-13.7h1.7c.7,0,1.2,.2,1.7,.5s.9,.7,1.2,1.2c.3,.5,.6,1,.8,1.6,.2,.6,.3,1.2,.3,1.8v9.3c0,1.4,.1,2.7,.4,3.7,.3,1.1,.8,2,1.5,2.7,.7,.8,1.6,1.3,2.8,1.7,1.2,.4,2.6,.6,4.4,.6h15.8c1.8,0,3.2-.2,4.4-.6,1.2-.4,2.1-1,2.8-1.7,.7-.8,1.2-1.7,1.5-2.7,.3-1.1,.4-2.3,.4-3.7v-9.3c0-.6,.1-1.2,.3-1.8,.2-.6,.4-1.1,.8-1.6,.3-.5,.7-.9,1.2-1.2,.5-.3,1-.4,1.7-.4h1.7v13.4c.1,3.7,.8,6.6,2.1,8.6,1.2,2.2,2.8,3.7,4.6,4.6Z" fill="#e29925"/><path d="M122.6,140.2h0c0,.8-.1,1.5-.3,2.2v.1c0,.1,0,.2-.1,.3v.1c0,.1,0,.2-.1,.3v.2q0,.1-.1,.2t-.1,.2-.1,.2c0,.1-.1,.2-.1,.3v.1c0,.1-.1,.2-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1,0,.1-.1,.1-.1,.2,0,0,0,.1-.1,.1-.1,.1-.1,.2-.2,.2h0c-.1,.1-.2,.2-.3,.3l-.1,.1c-.1,.1-.2,.1-.3,.2l-.1,.1c-.1,.1-.2,.2-.4,.2h-.1c-.1,.1-.2,.1-.4,.2h-.1c-.3,.1-.6,.3-1,.4h0c-.4,.1-.8,.2-1.2,.3h0v-2.4c0-.6,.1-1.2,.3-1.8,.2-.6,.4-1.1,.7-1.6,.3-.5,.7-.9,1.2-1.2s1.1-.4,1.7-.4c.4,0,1.3,0,2,0Z" fill="#dfaf25"/><path d="M122.6,79.4h-1.7c-.7,0-1.2-.2-1.7-.5s-.9-.7-1.2-1.2c-.3-.5-.6-1-.7-1.6s-.2-1.2-.2-1.8v-2.4h0c.2,0,.4,.1,.5,.1h.1c.1,0,.3,.1,.4,.1h.1c.2,0,.3,.1,.5,.2h.1c.1,0,.2,.1,.4,.2,0,0,.1,0,.1,.1,.1,.1,.2,.1,.3,.2h.1c.1,.1,.3,.2,.4,.2,0,0,.1,0,.1,.1,.1,.1,.2,.1,.3,.2,0,0,.1,0,.1,.1,.1,.1,.2,.2,.3,.3h0l.2,.2s0,.1,.1,.1c0,.1,.1,.1,.1,.2l.1,.1c0,.1,.1,.1,.1,.2l.1,.1c0,.1,.1,.1,.1,.2s.1,.1,.1,.2,0,.1,.1,.2c.1,.2,.2,.5,.3,.8v.1c0,.1,.1,.2,.1,.3v.1c0,.1,.1,.2,.1,.3v.1c0,.1,.1,.2,.1,.3h0c0,.7,0,1.4,.1,2.2Z" fill="#dfaf25"/><path d="M113.7,135.7c.8,1.3,1.7,2.1,2.7,2.6-1,.4-1.9,1.2-2.7,2.5-.8,1.2-1.2,3.1-1.2,5.7v1.3h-25.3v-1.3c0-2.4-.4-4.2-1.2-5.5s-1.7-2.1-2.7-2.6c.5-.2,1-.5,1.4-.9s.9-.9,1.2-1.5c.8-1.2,1.2-3.1,1.2-5.7v-8c0-1.9,.3-3.3,1-4s1.8-1.1,3.4-1.1h16.3c1.6,0,2.8,.4,3.4,1.1,.7,.7,1,2.1,1,4v7.9c.4,2.4,.8,4.3,1.5,5.5Z" fill="#dfaf25"/><path d="M113.7,78.7c.8,1.3,1.7,2.1,2.7,2.6-.5,.2-1,.5-1.4,.9s-.9,.9-1.2,1.5c-.8,1.2-1.2,3.1-1.2,5.7v7.9c0,1.9-.3,3.3-1,4s-1.8,1.1-3.4,1.1h-16.4c-1.6,0-2.8-.4-3.4-1.1s-1-2.1-1-4v-8c0-2.4-.4-4.2-1.2-5.5-.8-1.3-1.7-2.1-2.7-2.6,1-.4,1.9-1.2,2.7-2.5,.8-1.2,1.2-3.1,1.2-5.7v-1.3h25.3v1.3c-.1,2.5,.3,4.4,1,5.7Z" fill="#dfaf25"/><path d="M112.6,65.1h-25.3c0-1.9,.3-3.2,1-3.9s1.8-1.1,3.4-1.1h16.3c1.6,0,2.8,.4,3.4,1.1,.8,.8,1.2,2.1,1.2,3.9Z" fill="#e29925"/><path d="M105.9,154.4h6.7c0,1.9-.3,3.2-1,3.9s-1.8,1.1-3.4,1.1h-16.3c-1.6,0-2.8-.4-3.4-1.1-.7-.7-1-2-1-3.9h18.4Z" fill="#e29925"/><path d="M82.9,72v2.4c0,.6-.1,1.2-.3,1.8-.2,.6-.4,1.1-.8,1.6-.3,.5-.7,.9-1.2,1.2-.5,.3-1.1,.4-1.7,.4h-1.6c0-.8,.1-1.5,.3-2.2v-.1c0-.1,0-.2,.1-.3v-.1c0-.1,0-.2,.1-.3v-.2c0-.1,0-.2,.1-.2q0-.1,.1-.2c.1-.1,0-.1,.1-.2,0-.1,.1-.2,.1-.3v-.1c0-.1,.1-.2,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,0-.1,.1-.1,.1-.2,0,0,0-.1,.1-.1,.1-.1,.1-.2,.2-.2h0c.1-.1,.2-.2,.3-.3l.1-.1c.1-.1,.2-.1,.3-.2h.1c.1-.1,.2-.2,.4-.2h.1c.1-.1,.2-.1,.4-.2h.1c.3-.1,.6-.3,1-.4h0c.1-.2,.5-.3,.9-.4h0Z" fill="#dfaf25"/><path d="M82.9,145.2v2.4h0c-.2,0-.4-.1-.5-.1h-.1c-.1,0-.3-.1-.4-.1h-.1c-.2,0-.3-.1-.5-.2h-.1c-.1,0-.2-.1-.4-.2,0,0-.1,0-.1-.1-.1-.1-.2-.1-.3-.2h-.1c-.1-.1-.3-.2-.4-.2,0,0-.1,0-.1-.1-.1-.1-.2-.1-.3-.2l-.1-.1c-.1-.1-.2-.2-.3-.3h0q-.1-.1-.2-.2s0-.1-.1-.1c0-.1-.1-.1-.1-.2l-.1-.1c0-.1-.1-.1-.1-.2l-.1-.1c0-.1-.1-.1-.1-.2s-.1-.1-.1-.2,0-.1-.1-.2c-.1-.2-.2-.5-.3-.8v-.1c0-.1-.1-.2-.1-.3v-.1c0-.1-.1-.2-.1-.3v-.1c0-.1-.1-.2-.1-.3h0c-.1-.7-.2-1.4-.3-2.2h1.7c.7,0,1.2,.2,1.7,.5s.9,.7,1.2,1.2c.3,.5,.6,1,.7,1.6,.3,.6,.4,1.2,.4,1.8Z" fill="#dfaf25"/></g><g><circle cx="31.8" cy="106.6" r="3.2" fill="#e29925"/><circle cx="38.1" cy="113" r="3.2" fill="#e29925"/><circle cx="44.4" cy="106.6" r="3.2" fill="#e29925"/><circle cx="50.8" cy="113" r="3.2" fill="#e29925"/><circle cx="60.5" cy="77.9" r="3.2" fill="#e29925"/><circle cx="54.2" cy="71.6" r="3.2" fill="#e29925"/><path d="M47.9,68.5c1.8,0,3.2-1.4,3.2-3.2h0c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2h0c0,1.8,1.5,3.2,3.2,3.2Z" fill="#e29925"/><path d="M41.6,74.7h0c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2h0c-1.8,0-3.2,1.4-3.2,3.2,0,1.8,1.4,3.2,3.2,3.2Z" fill="#e29925"/><circle cx="60.5" cy="141.7" r="3.2" fill="#e29925"/><circle cx="54.2" cy="148" r="3.2" fill="#e29925"/><circle cx="47.9" cy="154.2" r="3.2" fill="#e29925"/><path d="M41.6,144.9h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M83.9,31.6c-1.2-1.2-3.3-1.2-4.5,0h0c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0c1.3-1.3,1.3-3.3,0-4.5h0Z" fill="#e29925"/><path d="M79.5,40.5h0c-1.2,1.2-1.2,3.3,0,4.5h0c1.2,1.2,3.3,1.2,4.5,0s1.2-3.3,0-4.5c-1.3-1.2-3.3-1.2-4.5,0Z" fill="#e29925"/><path d="M88.4,40.5c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0,1.2-3.3,0-4.5c-1.3-1.2-3.3-1.2-4.5,0Z" fill="#e29925"/><path d="M92.9,49.5c-1.2-1.2-3.3-1.2-4.5,0h0c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0c1.2-1.3,1.2-3.3,0-4.5h0Z" fill="#e29925"/><path d="M107,49.5c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0,1.2-3.3,0-4.5c-1.2-1.3-3.2-1.3-4.5,0Z" fill="#e29925"/><path d="M111.5,40.5c-1.2-1.2-3.3-1.2-4.5,0s-1.2,3.3,0,4.5h0c1.2,1.2,3.3,1.2,4.5,0h0c1.3-1.2,1.3-3.2,0-4.5h0Z" fill="#e29925"/><path d="M120.5,40.5c-1.2-1.2-3.3-1.2-4.5,0h0c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0,1.2-3.2,0-4.5h0Z" fill="#e29925"/><path d="M116,31.6c-1.2,1.2-1.2,3.3,0,4.5s3.3,1.2,4.5,0,1.2-3.3,0-4.5c-1.2-1.3-3.3-1.3-4.5,0Z" fill="#e29925"/><path d="M167.5,103.5c-1.8,0-3.2,1.4-3.2,3.2h0c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2h0c-.1-1.8-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M161.1,109.8c-1.8,0-3.2,1.4-3.2,3.2h0c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2h0c0-1.8-1.4-3.2-3.2-3.2Z" fill="#e29925"/><path d="M154.8,103.5c-1.8,0-3.2,1.4-3.2,3.2h0c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2h0c0-1.8-1.4-3.2-3.2-3.2Z" fill="#e29925"/><path d="M148.5,109.8c-1.8,0-3.2,1.4-3.2,3.2h0c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2h0c0-1.8-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M138.7,74.7h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h0c1.8,0,3.2-1.4,3.2-3.2s-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M145,74.7h0c1.8,0,3.2-1.4,3.2-3.2,0-1.7-1.4-3.2-3.2-3.2h0c-1.8,0-3.2,1.4-3.2,3.2,.1,1.8,1.5,3.2,3.2,3.2Z" fill="#e29925"/><path d="M151.4,68.5h0c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2Z" fill="#e29925"/><path d="M157.7,74.7c1.8,0,3.2-1.4,3.2-3.2,0-1.7-1.4-3.2-3.2-3.2h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2Z" fill="#e29925"/><path d="M138.7,138.5h0c-1.8,0-3.2,1.4-3.2,3.2h0c0,1.8,1.4,3.2,3.2,3.2h0c1.8,0,3.2-1.4,3.2-3.2,0-1.7-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M145,144.9h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h0c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2Z" fill="#e29925"/><path d="M151.4,151.1h0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.5-3.2-3.2-3.2Z" fill="#e29925"/><path d="M157.7,144.9c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h0c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2Z" fill="#e29925"/></g></g><g mask="url(#uuid-cb4cdbc6-4e18-4929-b9fe-0e4234a08f7e)"><rect x="19.1" y="19.1" width="161.8" height="161.8" fill="url(#uuid-6353a97c-a615-44d0-aefc-fc1e1398e07f)" stroke="#222" stroke-width="2"/></g></svg>
      </div>
      <!-- Column 2 -->
      <div>
      <h2 id = "title"></h2>
      <h3 id = "byline"></h3>
      <p id = "text">
        
      </p>
      <script>
        let news = "https://raw.githubusercontent.com/allegheny-college-cmpsc-100-fall-2022/TNN/main/news.json";
        jQuery.ajax({
          url: news,
          success: (data) => {
            json = JSON.parse(data);
            jQuery('#title').html(json.headline);
            jQuery('#byline').html(json.byline);
            jQuery('#text').html("(" + json.neighborhood + ") " + json.text);
          }
        });
      </script>
      </div>
        <script>
          let weather = "https://raw.githubusercontent.com/allegheny-college-cmpsc-100-fall-2022/TNN/main/weather.json";
          jQuery.ajax({
            url: weather,
            success: (data) => {
              json = JSON.parse(data);
              let main = json.weather[0].main;
              let icon = json.weather[0].icon;
              let temp = parseInt((json.main.temp-273.15) * 1.8 + 32)
              let humid = parseInt(json.main.humidity);
              let feel = parseInt((json.main.feels_like-273.15) * 1.8 + 32)
              jQuery('#report').html('<div><img src = \"https://openweathermap.org/img/wn/'+icon+'@2x.png\"></div>');
              jQuery('#report').append('<div><span class = "temp orange" style = "top: 25%; position:relative;">'+temp+'°');
              jQuery('#report').append('<span class = "conditions" style = "vertical-align:top"><div>'+main+'</div><div>Humidity: '+humid+'%</div></div><div>Feels: '+feel+'°</div>');
            }
          });
        </script>
        <script>
          let uuid = "uuid-4465fb65-d18a-4009-bfc8-0d1366143fbf"
          let randomNumber = (max, min) => {
            return Math.random() * (max - min) + min;
          }
          let top = randomNumber(-1000, -512);
          let left = randomNumber(0, 512);
          $('#'+uuid).style.top = top;
          $('#'+uuid).style.top(-1000, -512)
      </body>
    </html>`;
  }
}