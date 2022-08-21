import * as vscode from "vscode";

export class termPanel {
  public static currentPanel: termPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel) {
    this._panel = panel;
    this._panel.webview.html = this._getWebviewContent();
    this._panel.onDidDispose(this.dispose, null, this._disposables);
  }

  public static render() {
    if(termPanel.currentPanel) {
      termPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel("term-world", "term-world", vscode.ViewColumn.One, {
      });
      termPanel.currentPanel = new termPanel(panel);
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

  private _getWebviewContent() {
    return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.typekit.net/vwi0iai.css">
        <title>TERM. WORLD!</title>
      </head>
      <body>
      <style>
        html, h1, h2, h3, h4, h5, body {
          font-family: fira-mono, monospace; 
          color: #fff;
          background-color: #222;
        }
        #content {
          display: grid;
          grid-template-columns: auto auto;
        }
        .orange { color: #F79120; }
        .black { color: #222222; }
        .white { color: #FFFFFF; }
        .auburn { color: #A86416; }
        .gold { color: #E6CD17; }
      </style>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1024 200" style="enable-background:new 0 0 1024 200;" xml:space="preserve">
         <style type="text/css">
           .st0{opacity:0.66;}
           .st1{fill:#F79120;}
         </style>
         <g>
         <image 
           style="overflow:visible;" 
           width="230" 
           height="230" 
           xlink:href="data:image/png;base64,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
         QP4pAAD//8oRF33G+1WRAAAAAElFTkSuQmCC" transform="matrix(0.6826 0 0 0.6826 400.9364 21.5038)">
           </image>
           <g class="st0">
             <path class="st1" d="M139.88,139.01c-14.79,0-21.82-8.09-21.82-21.07V92.29h-11.81v-11.6h11.81V68.45l16.82-2.02v14.26h18.2
               l-1.7,11.6h-16.5v25.65c0,5.64,2.45,7.77,8.09,7.77c3.94,0,7.24-1.06,9.9-2.55l5.53,10.75
               C153.93,136.77,147.65,139.01,139.88,139.01z"/>
             <path class="st1" d="M199.59,126.77c5.11,0,10-1.81,14.47-4.68l6.71,9.15c-5.32,4.58-12.98,7.77-22.56,7.77
               c-19.37,0-29.37-12.45-29.37-30.01c0-16.71,9.79-30.23,27.56-30.23c16.18,0,26.5,10.86,26.5,29.06c0,1.92-0.11,4.36-0.32,6.07
               h-36.61C187.14,123.15,192.35,126.77,199.59,126.77z M185.75,103.67h20.75c-0.11-8.2-2.98-13.62-10.11-13.62
               C190.44,90.05,186.5,94.31,185.75,103.67z"/>
             <path class="st1" d="M287.71,80.69l-3.09,23.63h-10.64V93.88c-6.39,1.17-11.28,7.45-13.94,15.86v16.18h11.17v11.28h-35.44v-11.28
               h7.45V91.86h-7.45V80.69h20.33l2.98,12.67c4.04-9.69,10.22-14.37,19.26-14.37C282.18,78.98,285.05,79.62,287.71,80.69z"/>
             <path class="st1" d="M352.64,95.37v41.83h-14.37V97.29c0-3.94-0.53-5.43-2.77-5.43c-1.81,0-3.62,0.85-5.85,3.73v41.61h-11.92
               V97.29c0-3.94-0.53-5.43-2.77-5.43c-1.7,0-3.62,0.85-5.85,3.73v41.61h-14.58V80.69h12.24l1.17,5.43
               c3.51-4.79,6.81-7.34,11.81-7.34c4.26,0,7.45,2.13,8.73,6.71c3.41-3.94,7.34-6.71,12.45-6.71
               C348.91,78.77,352.64,83.77,352.64,95.37z"/>
           </g>
           <g class="st0">
             <path class="st1" d="M642.84,139.01l-4.9-38l-5.11,38h-18.2l-8.41-56.51h15.43l3.73,45.98l5.85-38.85h14.26l5.21,38.85l3.83-45.98
               h14.9l-8.09,56.51H642.84z"/>
             <path class="st1" d="M729.16,110.59c0,18.95-10.11,30.23-27.46,30.23c-17.35,0-27.46-11.07-27.46-30.12
               c0-17.99,10.11-30.12,27.46-30.12C719.15,80.58,729.16,92.5,729.16,110.59z M691.59,110.7c0,12.56,3.19,17.77,10.11,17.77
               s10.11-5.21,10.11-17.88c0-12.24-3.19-17.56-10.11-17.56S691.59,98.35,691.59,110.7z"/>
             <path class="st1" d="M793.55,82.49l-3.09,23.63h-10.64V95.69c-6.39,1.17-11.28,7.45-13.94,15.86v16.18h11.17v11.28h-35.44v-11.28
               h7.45V93.67h-7.45V82.49h20.33l2.98,12.67c4.04-9.69,10.22-14.37,19.26-14.37C788.01,80.79,790.88,81.43,793.55,82.49z"/>
             <path class="st1" d="M834.42,121.24c0,4.58,2.77,6.28,7.24,6.28c2.98,0,5.75-0.75,8.09-1.7l3.94,11.28
               c-3.73,2.02-9.05,3.72-16.28,3.72c-13.62,0-19.8-8.41-19.8-21.71V71.53H801V60.04h33.42V121.24z"/>
             <path class="st1" d="M917.75,60.04v78.97h-14.9l-0.85-6.17c-3.09,4.36-8.2,7.98-15.64,7.98c-14.05,0-20.75-12.03-20.75-30.23
               c0-17.45,8.62-30.01,22.56-30.01c5,0,9.37,1.81,12.77,5.32V58.23L917.75,60.04z M882.95,110.7c0,13.94,3.62,17.77,8.73,17.77
               c3.83,0,6.81-2.45,9.26-6.49V97.61c-2.34-2.98-4.79-4.68-8.3-4.68C886.78,92.92,882.95,98.03,882.95,110.7z"/>
           </g>
         </g>
         </svg>
         <h1 style = "text-align: center;">Welcome to term-world!</h1>
         <div id = "content" class = "white">
          <div>
            <h2>There's stuff to see.</h2>
            Lorem of the ipsum.
          </div>
          <div>
            <h2>But there's more!</h2>
            Lorem of the other ipsum.
          </div>
         </div>
      </body>
    </html>`;
  }
}

