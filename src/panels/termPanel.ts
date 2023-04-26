import * as vscode from "vscode";
import { getUri } from "../utils/getUri";
const style: string = require("./css/style.css").default.toString();

export class termPanel {
  public static currentPanel: termPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];
  private recentFiles: { key: string, filePath: string }[];
  private static rawCDN: string = "https://raw.githubusercontent.com/term-world/TNN/main/";

  private constructor(panel: vscode.WebviewPanel, extensionContext: vscode.ExtensionContext, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
    this._panel.onDidDispose(this.dispose, null, this._disposables);
    this._panel.webview.onDidReceiveMessage(
      (message: any) => {
        switch (message.command) {
          case 'recents':
            vscode.commands.executeCommand(message.text);
            return;
        }
      },
    );
    this.recentFiles = extensionContext.globalState.get('recents', []);
  }

  public static render(extensionContext: vscode.ExtensionContext, extensionUri: vscode.Uri) {

    if (termPanel.currentPanel) {
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
    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }

  private async _loadExternJSONFile(uri: string): Promise<string> {
    let data = await fetch(
      `${termPanel.rawCDN}${uri}`
    )
    return data.json();
  }

  private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
    // Cookies
    let cookies = vscode.workspace.openTextDocument(
      vscode.Uri.parse(`http:///static/mount/.cookies.json`)
    ).then(doc => {
      console.log(doc.getText());
    });
    // Ads
    let availableAds = (async () => {
      return await this._loadExternJSONFile("ads/network.json");
    })();
    let cbAd;
    availableAds.then(orgs => {
      let org = Object(orgs[Math.floor(Math.random() * orgs.length)]);
      cbAd = `${termPanel.rawCDN}ads/${org.ads.candybar.visited}`;
    });
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
        ${style}
      </style>
      <!-- HEADER -->
      <Div style = "width: 100vw;">
      <?xml version="1.0" encoding="UTF-8"?><svg id="uuid-f5b42290-82f3-4424-ba3b-8c0f1b080734" xmlns="http://www.w3.org/2000/svg" style = "display: block; height: 250px; width: auto; position: relative; margin: 0 auto; margin-bottom: 5%;" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 179.13 97.86"><defs><linearGradient id="uuid-d7f6995a-6693-4a59-81a8-37d467e569b6" x1="56.19" y1="81.38" x2="56.19" y2="39.17" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a86628"/><stop offset=".02" stop-color="#b2772a"/><stop offset=".09" stop-color="#cea52b"/><stop offset=".14" stop-color="#dfc223"/><stop offset=".17" stop-color="#e6cd1d"/><stop offset=".23" stop-color="#e9be1f"/><stop offset=".36" stop-color="#f49922"/><stop offset=".38" stop-color="#f79221"/><stop offset=".41" stop-color="#f9a242"/><stop offset=".46" stop-color="#faca92"/><stop offset=".51" stop-color="#fbe5cc"/><stop offset=".54" stop-color="#fff8f1"/><stop offset=".56" stop-color="#fff"/><stop offset=".63" stop-color="#fbdcb8"/><stop offset=".71" stop-color="#fab467"/><stop offset=".77" stop-color="#f99c35"/><stop offset=".79" stop-color="#f79221"/><stop offset=".82" stop-color="#f49822"/><stop offset=".85" stop-color="#f1a71f"/><stop offset=".89" stop-color="#e8c11f"/><stop offset=".91" stop-color="#e6cd1d"/><stop offset="1" stop-color="#a86628"/></linearGradient><linearGradient id="uuid-268dd3f9-6cb7-47cd-a456-eb87e8e23ce4" x1="90.28" x2="90.28" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-cb9c4470-1c23-4c77-a004-09d0d6ebbab1" x1="124.37" x2="124.37" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-0a5e2952-15f5-42c0-bd60-ca86b1488213" x1="89.56" y1="90.3" x2="89.56" y2="30.24" xlink:href="#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6"/><linearGradient id="uuid-957a3f17-c9ae-4aae-9eda-cc869db87483" x1="46.16" y1="92.58" x2="46.16" y2="86.81" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f79221"/><stop offset="1" stop-color="#e6cd1d"/></linearGradient><linearGradient id="uuid-302367df-1eb5-4e3c-94cd-605c93ed3e02" x1="51.56" x2="51.56" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-4839fbfd-7373-4301-9ecc-a3f5a27f3d1e" x1="56.96" y1="92.58" x2="56.96" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-d04c5134-8a01-4d39-9ffd-9eb9aac87d78" x1="62.36" y1="92.58" x2="62.36" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-390e5a5a-6b59-4b69-acea-9ad10787f761" x1="69.69" y1="92.58" x2="69.69" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-07339b36-b736-492c-9f68-0cdc08b9ddb5" x1="75.09" y1="92.58" x2="75.09" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-f36f6940-930c-43e0-95ae-405a58674f6d" x1="80.49" y1="92.58" x2="80.49" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-3be79951-f6d4-48a1-9a85-c1fb704d42b8" x1="87.82" y1="92.58" x2="87.82" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-24a19680-3b66-4802-827f-bc142441100e" x1="93.22" x2="93.22" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-0f892f51-8c92-49ed-b48c-17e14e5b472e" x1="98.62" y1="92.58" x2="98.62" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-2760403e-def0-48c5-8ed8-b2548ae74c05" x1="104.02" x2="104.02" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-2eec4c9f-feac-4cfc-9b5e-921e1f597c53" x1="111.35" y1="92.58" x2="111.35" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-92b67ab1-711c-45b0-8260-5d6d84fd513d" x1="116.76" y1="92.58" x2="116.76" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-e375a926-630d-454f-a4d0-7c05e37dfa96" x1="122.16" y1="92.58" x2="122.16" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-71dc830e-1272-43cf-ad14-743854aa1121" x1="127.56" y1="92.58" x2="127.56" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/><linearGradient id="uuid-a53c4442-d28d-46bb-bebe-f31cebf1cde7" x1="132.96" y1="92.58" x2="132.96" y2="86.81" xlink:href="#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483"/></defs><path d="M71.53,39.17v6.96h-11.12v35.25h-8.46V46.12h-11.11v-6.96h30.69Z" fill="url(#uuid-d7f6995a-6693-4a59-81a8-37d467e569b6)" stroke="#222"/><path d="M97.44,81.38c-1.91-4.68-3.99-9.35-6.24-14.01-2.25-4.66-4.67-9.33-7.26-14.01v28.03h-7.57V39.17h6.75c1.27,2,2.55,4.17,3.82,6.51,1.27,2.34,2.51,4.67,3.72,6.99,1.2,2.32,2.32,4.57,3.34,6.75,1.02,2.18,1.9,4.09,2.63,5.73v-25.98h7.57v42.21h-6.75Z" fill="url(#uuid-268dd3f9-6cb7-47cd-a456-eb87e8e23ce4)" stroke="#222"/><path d="M131.53,81.38c-1.91-4.68-3.99-9.35-6.24-14.01-2.25-4.66-4.67-9.33-7.26-14.01v28.03h-7.57V39.17h6.75c1.27,2,2.55,4.17,3.82,6.51,1.27,2.34,2.51,4.67,3.72,6.99,1.2,2.32,2.32,4.57,3.34,6.75,1.02,2.18,1.9,4.09,2.63,5.73v-25.98h7.57v42.21h-6.75Z" fill="url(#uuid-cb9c4470-1c23-4c77-a004-09d0d6ebbab1)" stroke="#222"/><polyline points="40.5 89.8 30.88 89.8 30.88 30.74 148.25 30.74 148.25 89.8 138.63 89.8" fill="none" stroke="url(#uuid-0a5e2952-15f5-42c0-bd60-ca86b1488213)"/><path d="M47.89,86.81h.57v5.77h-2.3v-.57h-.57v-4.61h-.58v5.19h-1.15v-5.77h2.3v.58h.57v4.61h.58v-5.19h.57Z" fill="url(#uuid-957a3f17-c9ae-4aae-9eda-cc869db87483)"/><path d="M53.29,86.81h.57v1.15h-3.46v1.15h2.88v.57h-.58v.58h-2.3v1.15h3.46v1.15h-4.61v-5.77h4.04Z" fill="url(#uuid-302367df-1eb5-4e3c-94cd-605c93ed3e02)"/><path d="M58.69,86.81h.57v5.77h-1.15v-.57h-.58v-.58h-1.15v.58h-.58v.57h-1.15v-5.77h1.15v4.04h.58v-3.46h1.15v3.46h.58v-4.04h.57Z" fill="url(#uuid-4839fbfd-7373-4301-9ecc-a3f5a27f3d1e)"/><path d="M64.09,87.39h.58v1.15h-1.15v-.57h-2.3v1.15h2.88v.57h.58v2.3h-.58v.58h-3.46v-.58h-.57v-1.15h1.15v.57h2.3v-1.15h-2.3v-.57h-.58v-.57h-.57v-1.73h.57v-.58h3.46v.58Z" fill="url(#uuid-d04c5134-8a01-4d39-9ffd-9eb9aac87d78)"/><path d="M71.42,86.81h.57v2.31h-.57v.57h-.58v.57h-.57v2.31h-1.15v-2.31h-.57v-.57h-.57v-.57h-.58v-2.31h1.15v1.73h.57v.58h1.15v-.58h.57v-1.73h.58Z" fill="url(#uuid-390e5a5a-6b59-4b69-acea-9ad10787f761)"/><path d="M76.82,87.39h.57v4.61h-.57v.57h-3.46v-.57h-.58v-4.61h.58v-.58h3.46v.58Zm-.57,1.15v-.57h-2.31v3.46h2.31v-2.88Z" fill="url(#uuid-07339b36-b736-492c-9f68-0cdc08b9ddb5)"/><path d="M82.22,86.81h.58v5.19h-.58v.57h-3.46v-.57h-.57v-5.19h1.15v4.61h2.31v-4.61h.57Z" fill="url(#uuid-f36f6940-930c-43e0-95ae-405a58674f6d)"/><path d="M89.55,86.81h.57v5.77h-1.15v-4.04h-.58v3.46h-1.15v-3.46h-.58v4.04h-1.15v-5.77h1.15v.58h.58v.57h1.15v-.57h.58v-.58h.57Z" fill="url(#uuid-3be79951-f6d4-48a1-9a85-c1fb704d42b8)"/><path d="M94.95,86.81h.57v1.15h-4.61v-1.15h4.04Zm0,4.62h.57v1.15h-4.61v-1.15h4.04Zm0-4.62v1.15h-1.15v3.46h1.15v1.15h-3.46v-1.15h1.15v-3.46h-1.15v-1.15h3.46Z" fill="url(#uuid-24a19680-3b66-4802-827f-bc142441100e)"/><path d="M100.35,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-0f892f51-8c92-49ed-b48c-17e14e5b472e)"/><path d="M105.76,86.81h.57v1.15h-3.46v1.15h2.88v.57h-.58v.58h-2.3v1.15h3.46v1.15h-4.61v-5.77h4.04Z" fill="url(#uuid-2760403e-def0-48c5-8ed8-b2548ae74c05)"/><path d="M113.08,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-2eec4c9f-feac-4cfc-9b5e-921e1f597c53)"/><path d="M118.49,87.39h.57v2.3h-.57v.57h-.58v.58h.58v.57h.57v1.15h-1.15v-.58h-.57v-.57h-.58v-.57h-1.15v1.73h-1.15v-5.77h4.04v.58Zm-1.15,2.3h.57v-1.73h-2.3v1.73h1.73Z" fill="url(#uuid-92b67ab1-711c-45b0-8260-5d6d84fd513d)"/><path d="M123.88,86.81h.58v5.19h-.58v.57h-3.46v-.57h-.57v-5.19h1.15v4.61h2.31v-4.61h.57Z" fill="url(#uuid-e375a926-630d-454f-a4d0-7c05e37dfa96)"/><path d="M129.29,87.39h.58v1.15h-1.15v-.57h-2.3v1.15h2.88v.57h.58v2.3h-.58v.58h-3.46v-.58h-.57v-1.15h1.15v.57h2.3v-1.15h-2.3v-.57h-.58v-.57h-.57v-1.73h.57v-.58h3.46v.58Z" fill="url(#uuid-71dc830e-1272-43cf-ad14-743854aa1121)"/><path d="M134.69,86.81h.58v1.73h-.58v-.57h-1.15v4.61h-1.15v-4.61h-1.15v.57h-.57v-1.73h4.03Z" fill="url(#uuid-a53c4442-d28d-46bb-bebe-f31cebf1cde7)"/></svg>
      </div>
      <!-- HEADER -->
      <script>
        let ads = "${termPanel.rawCDN}ads/network.json";
        jQuery.ajax({
          url: ads,
          success: (data) => {
            let json = JSON.parse(data);
            let org = Object(json[Math.floor(Math.random() * json.length)]);
            jQuery('#cbAd').attr('src', '${termPanel.rawCDN}ads/' + org.ads.candybar.visited);
            jQuery('#boxAd').attr('src', '${termPanel.rawCDN}ads/' + org.ads.block.visited);
          }
        });
      </script>
      <img src = '' id = 'cbAd' style = 'width: 75%; margin: 0 12.5% 5% 12.5%;'>
      <div id = "content" class = "white">
      <div>
        <div id = "term-weather" style="background: #fff; color: #222; overflow: auto;">
          <h3 style = "color: #222;">term-world Weather</h3>
          <div id = "report">
          </div>
        </div>
        <h2>Live from term-world</h2>
        <img src = "https://unsplash-proxy.glitch.me/random/512x512?query=computer">
      </div>
      <!-- Column 2 -->
      <div>
      <h2 id = "title"></h2>
      <h3 id = "byline"></h3>
      <p id = "text">
      </p>
      <script>
        let news = "${termPanel.rawCDN}news.json";
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
          let weather = "${termPanel.rawCDN}weather.json";
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
        <div>
          <img src = '' id = "boxAd">
        </div>
    </html>`;
  }
}
