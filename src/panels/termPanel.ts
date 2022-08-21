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
        // Waiting for UI...
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
      .st0{fill:url(#SVGID_1_);stroke:#222222;stroke-width:3;}
      .st1{fill:url(#SVGID_00000009584393182212574680000001533119110427874944_);stroke:#222222;stroke-width:3;}
      .st2{fill:url(#SVGID_00000069385968210526318640000018167907298204275875_);stroke:#222222;stroke-width:3;}
      .st3{fill:url(#SVGID_00000022525134177011283570000009054099209763011972_);stroke:#222222;stroke-width:3;}
      .st4{fill:url(#SVGID_00000123416604233844189920000014080128603299436954_);stroke:#222222;stroke-width:2;}
      .st5{fill:url(#SVGID_00000053534016721795818110000017586206384212864434_);stroke:#222222;stroke-width:2;}
      .st6{fill:url(#SVGID_00000040576792541767250490000016844743577629568681_);stroke:#222222;stroke-width:2;}
      .st7{fill:url(#SVGID_00000024681046796130647390000014801555280568447625_);stroke:#222222;stroke-width:2;}
      .st8{fill:url(#SVGID_00000059276948130173598530000002064321830059312785_);stroke:#222222;stroke-width:2;}
      .st9{fill:url(#SVGID_00000011743174186465443870000012063122198236112260_);stroke:#222222;stroke-width:2;}
      .st10{fill:url(#SVGID_00000084504572611623614010000006428131539193701784_);stroke:#222222;stroke-width:2;}
      .st11{fill:url(#SVGID_00000054944570371092859440000018227260157565635774_);stroke:#222222;stroke-width:2;}
      .st12{fill:url(#SVGID_00000140726705963297911450000009328066192661274038_);stroke:#222222;stroke-width:2;}
      .st13{fill:#E29925;}
      .st14{fill:#DFAF25;}
      .st15{filter:url(#Adobe_OpacityMaskFilter);}

      .st16{mask:url(#SVGID_00000088852143826817091080000016728276323807082160_);fill:url(#SVGID_00000162320737435020000860000006970224444035292853_);stroke:#222222;stroke-width:2;}
      </style>
      <g>

      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-52.85" y1="42.3" x2="-52.85" y2="114.88" gradientTransform="matrix(1 0 0 1 0 -298)">
      <stop  offset="0" style="stop-color:#A86416"/>
      <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
      <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
      <stop  offset="0.137" style="stop-color:#E0C217"/>
      <stop  offset="0.1654" style="stop-color:#E6CD17"/>
      <stop  offset="0.2335" style="stop-color:#EABE19"/>
      <stop  offset="0.3635" style="stop-color:#F5981F"/>
      <stop  offset="0.3849" style="stop-color:#F79120"/>
      <stop  offset="0.4059" style="stop-color:#F8A140"/>
      <stop  offset="0.4617" style="stop-color:#FBC991"/>
      <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
      <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
      <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
      <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
      <stop  offset="0.7077" style="stop-color:#FAB467"/>
      <stop  offset="0.7659" style="stop-color:#F89B34"/>
      <stop  offset="0.7944" style="stop-color:#F79120"/>
      <stop  offset="0.8205" style="stop-color:#F5971F"/>
      <stop  offset="0.8544" style="stop-color:#F1A71D"/>
      <stop  offset="0.8923" style="stop-color:#E9C119"/>
      <stop  offset="0.9061" style="stop-color:#E6CD17"/>
      <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path class="st0" d="M-45.3-183.2c-14.8,0-21.8-8.1-21.8-21.1v-25.6h-11.8v-11.6h11.8v-12.2l16.8-2v14.3h18.2l-1.7,11.6h-16.5v25.7
      c0,5.6,2.4,7.8,8.1,7.8c3.9,0,7.2-1.1,9.9-2.6l5.5,10.8C-31.3-185.4-37.5-183.2-45.3-183.2z"/>

      <linearGradient id="SVGID_00000165200590542989789840000007832645894491969954_" gradientUnits="userSpaceOnUse" x1="10.65" y1="54.6" x2="10.65" y2="114.8" gradientTransform="matrix(1 0 0 1 0 -298)">
      <stop  offset="0" style="stop-color:#A86416"/>
      <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
      <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
      <stop  offset="0.137" style="stop-color:#E0C217"/>
      <stop  offset="0.1654" style="stop-color:#E6CD17"/>
      <stop  offset="0.2335" style="stop-color:#EABE19"/>
      <stop  offset="0.3635" style="stop-color:#F5981F"/>
      <stop  offset="0.3849" style="stop-color:#F79120"/>
      <stop  offset="0.4059" style="stop-color:#F8A140"/>
      <stop  offset="0.4617" style="stop-color:#FBC991"/>
      <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
      <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
      <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
      <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
      <stop  offset="0.7077" style="stop-color:#FAB467"/>
      <stop  offset="0.7659" style="stop-color:#F89B34"/>
      <stop  offset="0.7944" style="stop-color:#F79120"/>
      <stop  offset="0.8205" style="stop-color:#F5971F"/>
      <stop  offset="0.8544" style="stop-color:#F1A71D"/>
      <stop  offset="0.8923" style="stop-color:#E9C119"/>
      <stop  offset="0.9061" style="stop-color:#E6CD17"/>
      <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000165200590542989789840000007832645894491969954_);stroke:#222222;stroke-width:3;" d="
      M14.4-195.4c5.1,0,10-1.8,14.5-4.7l6.7,9.1c-5.3,4.6-13,7.8-22.6,7.8c-19.4,0-29.4-12.4-29.4-30c0-16.7,9.8-30.2,27.6-30.2
      c16.2,0,26.5,10.9,26.5,29.1c0,1.9-0.1,4.4-0.3,6.1H0.8C1.9-199,7.2-195.4,14.4-195.4z M0.6-218.5h20.8c-0.1-8.2-3-13.6-10.1-13.6
      C5.2-232.1,1.3-227.9,0.6-218.5z"/>

      <linearGradient id="SVGID_00000026138487710159374460000011377952538056764335_" gradientUnits="userSpaceOnUse" x1="76.55" y1="54.8" x2="76.55" y2="113.0101" gradientTransform="matrix(1 0 0 1 0 -298)">
      <stop  offset="0" style="stop-color:#A86416"/>
      <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
      <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
      <stop  offset="0.137" style="stop-color:#E0C217"/>
      <stop  offset="0.1654" style="stop-color:#E6CD17"/>
      <stop  offset="0.2335" style="stop-color:#EABE19"/>
      <stop  offset="0.3635" style="stop-color:#F5981F"/>
      <stop  offset="0.3849" style="stop-color:#F79120"/>
      <stop  offset="0.4059" style="stop-color:#F8A140"/>
      <stop  offset="0.4617" style="stop-color:#FBC991"/>
      <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
      <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
      <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
      <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
      <stop  offset="0.7077" style="stop-color:#FAB467"/>
      <stop  offset="0.7659" style="stop-color:#F89B34"/>
      <stop  offset="0.7944" style="stop-color:#F79120"/>
      <stop  offset="0.8205" style="stop-color:#F5971F"/>
      <stop  offset="0.8544" style="stop-color:#F1A71D"/>
      <stop  offset="0.8923" style="stop-color:#E9C119"/>
      <stop  offset="0.9061" style="stop-color:#E6CD17"/>
      <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000026138487710159374460000011377952538056764335_);stroke:#222222;stroke-width:3;" d="
      M102.5-241.5l-3.1,23.6H88.8v-10.4c-6.4,1.2-11.3,7.4-13.9,15.9v16.2H86v11.3H50.6v-11.3H58v-34.1h-7.4v-11.2h20.3l3,12.7
      c4-9.7,10.2-14.4,19.3-14.4C97-243.2,99.9-242.5,102.5-241.5z"/>

      <linearGradient id="SVGID_00000146462882042878706150000004919933605867369137_" gradientUnits="userSpaceOnUse" x1="138.25" y1="54.6" x2="138.25" y2="113" gradientTransform="matrix(1 0 0 1 0 -298)">
      <stop  offset="0" style="stop-color:#A86416"/>
      <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
      <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
      <stop  offset="0.137" style="stop-color:#E0C217"/>
      <stop  offset="0.1654" style="stop-color:#E6CD17"/>
      <stop  offset="0.2335" style="stop-color:#EABE19"/>
      <stop  offset="0.3635" style="stop-color:#F5981F"/>
      <stop  offset="0.3849" style="stop-color:#F79120"/>
      <stop  offset="0.4059" style="stop-color:#F8A140"/>
      <stop  offset="0.4617" style="stop-color:#FBC991"/>
      <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
      <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
      <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
      <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
      <stop  offset="0.7077" style="stop-color:#FAB467"/>
      <stop  offset="0.7659" style="stop-color:#F89B34"/>
      <stop  offset="0.7944" style="stop-color:#F79120"/>
      <stop  offset="0.8205" style="stop-color:#F5971F"/>
      <stop  offset="0.8544" style="stop-color:#F1A71D"/>
      <stop  offset="0.8923" style="stop-color:#E9C119"/>
      <stop  offset="0.9061" style="stop-color:#E6CD17"/>
      <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000146462882042878706150000004919933605867369137_);stroke:#222222;stroke-width:3;" d="
      M167.4-226.8v41.8H153v-39.9c0-3.9-0.5-5.4-2.8-5.4c-1.8,0-3.6,0.8-5.9,3.7v41.6h-11.9v-39.9c0-3.9-0.5-5.4-2.8-5.4
      c-1.7,0-3.6,0.8-5.9,3.7v41.6h-14.6v-56.5h12.2l1.2,5.4c3.5-4.8,6.8-7.3,11.8-7.3c4.3,0,7.5,2.1,8.7,6.7c3.4-3.9,7.3-6.7,12.5-6.7
      C163.7-243.4,167.4-238.4,167.4-226.8z"/>
      </g>
      <image style="overflow:visible;enable-background:new    ;" width="128" height="43" xlink:href="C189B916.png"  transform="matrix(1.794 0 0 1.794 374.6816 259.3734)">
      </image>
      <image style="overflow:visible;enable-background:new    ;" width="162" height="44" xlink:href="C189B91A.png"  transform="matrix(1.7335 0 0 1.7335 725.3317 262.5168)">
      </image>
      <g>
      <g>

        <linearGradient id="SVGID_00000124156326597796418910000007668471745087216514_" gradientUnits="userSpaceOnUse" x1="143.5965" y1="435" x2="143.5965" y2="361.1034" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000124156326597796418910000007668471745087216514_);stroke:#222222;stroke-width:2;" d="
        M151.3,137c-15.1,0-22.2-8.2-22.2-21.5V89.4h-12V77.6h12V65.1l17.1-2.1v14.5h18.5L163,89.3h-16.8v26.1c0,5.7,2.5,7.9,8.2,7.9
        c4,0,7.4-1.1,10.1-2.6l5.6,10.9C165.6,134.7,159.2,137,151.3,137z"/>

        <linearGradient id="SVGID_00000157279666304538305560000014615344121901937281_" gradientUnits="userSpaceOnUse" x1="208.2465" y1="434.9" x2="208.2465" y2="373.5726" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000157279666304538305560000014615344121901937281_);stroke:#222222;stroke-width:2;" d="
        M212.1,124.5c5.2,0,10.2-1.8,14.7-4.8l6.8,9.3c-5.4,4.7-13.2,7.9-23,7.9c-19.7,0-29.9-12.7-29.9-30.6c0-17,10-30.8,28.1-30.8
        c16.5,0,27,11.1,27,29.6c0,2-0.1,4.4-0.3,6.2h-37.3C199.4,120.8,204.7,124.5,212.1,124.5z M198,101h21.1
        c-0.1-8.3-3-13.9-10.3-13.9C202.8,87.1,198.8,91.4,198,101z"/>

        <linearGradient id="SVGID_00000124858907877114964180000018060355429291682994_" gradientUnits="userSpaceOnUse" x1="275.3965" y1="433.1137" x2="275.3965" y2="373.8042" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000124858907877114964180000018060355429291682994_);stroke:#222222;stroke-width:2;" d="
        M301.8,77.6l-3.1,24.1h-10.8V91.1c-6.5,1.2-11.5,7.6-14.2,16.1v16.5h11.4v11.5H249v-11.5h7.6V89H249V77.6h20.7l3,12.9
        c4.1-9.9,10.4-14.6,19.6-14.6C296.2,75.8,299.1,76.5,301.8,77.6z"/>

        <linearGradient id="SVGID_00000015312558222950420000000008825028931627391897_" gradientUnits="userSpaceOnUse" x1="338.3465" y1="433.1137" x2="338.3465" y2="373.6123" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000015312558222950420000000008825028931627391897_);stroke:#222222;stroke-width:2;" d="
        M367.9,92.5v42.6h-14.6V94.5c0-4-0.5-5.5-2.8-5.5c-1.8,0-3.7,0.9-6,3.8v42.4h-12.1V94.5c0-4-0.5-5.5-2.8-5.5c-1.7,0-3.7,0.9-6,3.8
        v42.4h-14.8V77.7h12.5l1.2,5.5c3.6-4.9,6.9-7.5,12-7.5c4.3,0,7.6,2.2,8.9,6.8c3.5-4,7.5-6.8,12.7-6.8
        C364.1,75.6,367.9,80.7,367.9,92.5z"/>
      </g>
      <g>

        <linearGradient id="SVGID_00000105414399176896454990000012335292790179008156_" gradientUnits="userSpaceOnUse" x1="621.9035" y1="432.3" x2="621.9035" y2="374.8" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000105414399176896454990000012335292790179008156_);stroke:#222222;stroke-width:2;" d="
        M627,134.3l-5-38.7l-5.2,38.7h-18.5l-8.6-57.5h15.7l3.8,46.8l6-39.5h14.5l5.3,39.5l3.9-46.8h15.2l-8.2,57.5
        C645.9,134.3,627,134.3,627,134.3z"/>

        <linearGradient id="SVGID_00000110439593191545298010000017665294247194736005_" gradientUnits="userSpaceOnUse" x1="686.9035" y1="434.129" x2="686.9035" y2="372.8016" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000110439593191545298010000017665294247194736005_);stroke:#222222;stroke-width:2;" d="
        M714.9,105.4c0,19.3-10.3,30.8-28,30.8s-28-11.3-28-30.7c0-18.3,10.3-30.7,28-30.7C704.7,74.8,714.9,86.9,714.9,105.4z
          M676.7,105.5c0,12.8,3.3,18.1,10.3,18.1s10.3-5.3,10.3-18.2c0-12.5-3.3-17.9-10.3-17.9C679.9,87.5,676.7,92.9,676.7,105.5z"/>

        <linearGradient id="SVGID_00000034072729583699076040000010005326775477683634_" gradientUnits="userSpaceOnUse" x1="754.1035" y1="432.3" x2="754.1035" y2="373" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000034072729583699076040000010005326775477683634_);stroke:#222222;stroke-width:2;" d="
        M780.5,76.8l-3.1,24.1h-10.8V90.2c-6.5,1.2-11.5,7.6-14.2,16.1v16.5h11.4v11.5h-36.1v-11.5h7.6V88.1h-7.6V76.7h20.7l3,12.9
        C755.5,79.7,761.8,75,771,75C774.8,75,777.8,75.7,780.5,76.8z"/>

        <linearGradient id="SVGID_00000013172043527081832690000016494603171472777358_" gradientUnits="userSpaceOnUse" x1="814.8535" y1="434.2" x2="814.8535" y2="352" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000013172043527081832690000016494603171472777358_);stroke:#222222;stroke-width:2;" d="
        M822.1,116.2c0,4.7,2.8,6.4,7.4,6.4c3,0,5.9-0.8,8.2-1.7l4,11.5c-3.8,2.1-9.2,3.8-16.6,3.8c-13.9,0-20.2-8.6-20.2-22.1V65.7H788
        V54h34L822.1,116.2L822.1,116.2z"/>

        <linearGradient id="SVGID_00000076584007075187405570000001765513705188189351_" gradientUnits="userSpaceOnUse" x1="880.3535" y1="434.1" x2="880.3535" y2="350.0186" gradientTransform="matrix(1 0 0 1 0 -298)">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>
      <path style="fill:url(#SVGID_00000076584007075187405570000001765513705188189351_);stroke:#222222;stroke-width:2;" d="
        M906.9,53.9v80.4h-15.2l-0.9-6.3c-3.1,4.4-8.3,8.1-15.9,8.1c-14.3,0-21.1-12.2-21.1-30.8c0-17.8,8.8-30.6,23-30.6
        c5.1,0,9.5,1.8,13,5.4V51.9L906.9,53.9z M871.5,105.5c0,14.2,3.7,18.1,8.9,18.1c3.9,0,6.9-2.5,9.4-6.6V92.2
        c-2.4-3-4.9-4.8-8.5-4.8C875.4,87.4,871.5,92.6,871.5,105.5z"/>
      </g>
      <g>
      <g>
        <g>
          <g id="XMLID_00000121255321139604716230000002642499540415388602_">
            <g>
              <path d="M520.7,104.2v6.6h-4.1c-1.2,0-2.2,0.3-3.1,0.8c-0.9,0.5-1.6,1.2-2.2,2.1c-0.6,0.9-1,1.8-1.3,2.9
                c-0.3,1.1-0.5,2.2-0.5,3.3v16.7c0,2.6-0.3,4.8-0.8,6.7c-0.5,1.9-1.4,3.6-2.7,4.9c-1.3,1.3-3,2.4-5.1,3.1l0,0
                c-0.2,0.1-0.5,0.1-0.7,0.2c-0.1,0-0.2,0-0.2,0.1c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.5,0.1-0.7,0.1
                c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0c-0.6,0.1-1.3,0.2-2,0.2l0,0v0.1c0,1.4-0.1,2.7-0.4,3.7c-0.3,1.1-0.8,2-1.5,2.7
                c-0.7,0.8-1.6,1.3-2.8,1.7c-1.2,0.4-2.6,0.6-4.4,0.6h-10.1h-1.1h-4.6c-1.8,0-3.2-0.2-4.4-0.6c-1.2-0.4-2.1-1-2.8-1.7
                c-0.7-0.8-1.2-1.7-1.5-2.7c-0.3-1.1-0.4-2.3-0.4-3.7V152c-0.7-0.1-1.4-0.1-2-0.2c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.5-0.1
                c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.5-0.1-0.7-0.2
                c-2.1-0.7-3.8-1.7-5.1-3.1c-1.3-1.4-2.2-3-2.7-4.9c-0.5-1.9-0.8-4.2-0.8-6.7v-16.7c0-1-0.1-2.1-0.4-3.2
                c-0.2-0.6-0.4-1.2-0.7-1.8c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.4-0.6l0,0l0,0
                c-0.6-0.9-1.3-1.6-2.2-2.1l0,0l0,0c-0.8-0.5-1.8-0.8-2.9-0.8c0,0-0.1,0-0.1,0h-4.2v-6.6h4.1c0.2,0,0.3,0,0.4,0
                c1-0.1,1.9-0.3,2.6-0.8c0.9-0.5,1.6-1.2,2.2-2.1c0.6-0.9,1-1.8,1.4-2.9c0.3-1.1,0.5-2.2,0.5-3.3V78.5c0-2.6,0.3-4.8,0.8-6.7
                c0.5-1.9,1.4-3.6,2.7-4.9c0.6-0.7,1.4-1.3,2.2-1.8c0.8-0.5,1.8-0.9,2.9-1.3c0.2-0.1,0.5-0.1,0.7-0.2c0.1,0,0.2,0,0.2-0.1
                c0.2,0,0.4-0.1,0.5-0.1c0.1,0,0.2,0,0.3-0.1c0.2,0,0.5-0.1,0.7-0.1c0.2,0,0.3-0.1,0.5-0.1c0.1,0,0.2,0,0.3,0
                c0.6-0.1,1.3-0.2,2-0.2l0,0v-0.1c0-1.4,0.1-2.7,0.4-3.7c0.3-1.1,0.8-2,1.5-2.7c0.7-0.7,1.6-1.3,2.8-1.7
                c1.2-0.4,2.6-0.6,4.4-0.6H481h1.1h4.6c1.8,0,3.2,0.2,4.4,0.6c1.2,0.4,2.1,1,2.8,1.7c0.7,0.8,1.2,1.7,1.5,2.7s0.4,2.3,0.4,3.7
                v0.1c0.7,0.1,1.4,0.1,2,0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.5,0.1c0.2,0,0.3,0.1,0.5,0.1c0.2,0,0.3,0.1,0.5,0.1
                c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.5,0.1,0.7,0.2l0,0c2.1,0.7,3.8,1.7,5.1,3.1c1.3,1.4,2.2,3,2.7,4.9
                c0.5,1.9,0.8,4.2,0.8,6.7v16.7c0,1,0.1,2.1,0.4,3.2c0.2,0.6,0.4,1.2,0.7,1.8c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2
                c0.1,0.2,0.2,0.4,0.4,0.6l0,0c0.6,0.9,1.3,1.6,2.2,2.1c0.9,0.6,1.9,0.8,3.1,0.8H520.7L520.7,104.2z M506.5,108.5
                c0.6-0.4,1.1-0.7,1.7-1c-1.8-0.8-3.4-2.4-4.7-4.6c-1.2-2.1-1.9-4.9-2.1-8.6c0-0.4,0-0.9,0-1.3V80.8c-0.7,0-1.7,0-1.7,0
                c-0.7,0-1.2,0.1-1.7,0.4c-0.5,0.3-0.9,0.7-1.2,1.2c-0.3,0.5-0.6,1-0.8,1.6c-0.2,0.6-0.3,1.2-0.3,1.8v9.3
                c0,1.4-0.1,2.7-0.4,3.7c-0.3,1.1-0.8,2-1.5,2.7c-0.7,0.8-1.7,1.3-2.8,1.7c-1.2,0.4-2.6,0.6-4.4,0.6H482h-6.6h-4.6
                c-1.8,0-3.2-0.2-4.4-0.6c-1.2-0.4-2.1-1-2.8-1.7c-0.7-0.8-1.2-1.7-1.5-2.7c-0.3-1.1-0.4-2.3-0.4-3.7v-9.3
                c0-0.6-0.1-1.2-0.3-1.8c-0.2-0.6-0.4-1.1-0.8-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1-0.5-1.7-0.5h-1.7v12.1
                c0,0.6,0,1.1,0,1.7v0c0,0,0,0.1,0,0.1c-0.2,3.7-0.8,6.5-2,8.4c-1,1.5-2,2.7-3.1,3.5c-0.5,0.4-1.1,0.7-1.6,0.9
                c1.8,0.8,3.4,2.4,4.7,4.6c1.3,2.1,2,5,2.1,8.9c0,0.3,0,0.7,0,1.1v12.1c0.7,0,1.7,0,1.7,0c0.7,0,1.2-0.1,1.7-0.4
                c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.6-1,0.8-1.6c0.2-0.6,0.3-1.2,0.3-1.8v-9.3c0-1.4,0.1-2.7,0.4-3.7c0.3-1.1,0.8-2,1.5-2.7
                c0.7-0.7,1.7-1.3,2.8-1.7c1.2-0.4,2.6-0.6,4.4-0.6h4.6h6.6h4.6c1.8,0,3.2,0.2,4.4,0.6c1.2,0.4,2.1,1,2.8,1.7
                c0.7,0.8,1.2,1.7,1.5,2.7c0.3,1.1,0.4,2.3,0.4,3.7v9.3c0,0.6,0.1,1.2,0.3,1.8s0.4,1.1,0.7,1.6c0.3,0.5,0.7,0.9,1.2,1.2
                c0.5,0.3,1,0.5,1.7,0.5h1.7v-12.1c0-0.5,0-0.9,0-1.4c0.1-3.9,0.8-6.9,2-8.8c0,0,0,0,0,0l0,0
                C504.5,110.4,505.5,109.3,506.5,108.5z M501.4,137.9L501.4,137.9c-0.7,0-1.6,0-1.6,0c-0.7,0-1.2,0.1-1.7,0.4
                c-0.5,0.3-0.9,0.7-1.2,1.2c-0.3,0.5-0.6,1-0.7,1.6s-0.3,1.2-0.3,1.8v2.4l0,0c0.4-0.1,0.8-0.2,1.2-0.3h0c0.4-0.1,0.7-0.2,1-0.4
                c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.4-0.2c0,0,0,0,0.1,0c0.1-0.1,0.3-0.2,0.4-0.2c0,0,0,0,0.1-0.1c0.1-0.1,0.2-0.1,0.3-0.2
                c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.1-0.1,0.1-0.2,0.2-0.2c0,0,0,0,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
                c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.2,0.1-0.2
                c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2
                c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1C501.3,139.4,501.3,138.6,501.4,137.9z M501.4,77.1
                L501.4,77.1c-0.1-0.8-0.1-1.6-0.3-2.2c0,0,0,0,0,0c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3
                c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c-0.1-0.3-0.2-0.5-0.3-0.8c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2
                c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2
                c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0-0.1-0.1-0.1-0.1
                c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.2-0.4-0.2c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2
                c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.4-0.2c0,0-0.1,0-0.1,0c-0.1-0.1-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1,0
                c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.3-0.1-0.5-0.1l0,0V72c0,0.6,0.1,1.2,0.2,1.8c0.2,0.6,0.4,1.1,0.7,1.6
                c0.3,0.5,0.7,0.9,1.2,1.2c0.5,0.3,1,0.5,1.7,0.5L501.4,77.1L501.4,77.1z M495.2,136c-1-0.5-1.9-1.3-2.7-2.6
                c-0.8-1.3-1.2-3.1-1.2-5.5V120c0-1.9-0.3-3.3-1-4s-1.8-1.1-3.4-1.1H482h-6.6h-4.9c-1.6,0-2.8,0.4-3.4,1.1s-1,2.1-1,4v7.9
                c0,2.6-0.4,4.4-1.2,5.7c-0.4,0.6-0.8,1.1-1.2,1.5c-0.4,0.4-0.9,0.7-1.4,0.9c1,0.5,1.9,1.3,2.7,2.6c0.8,1.3,1.2,3.1,1.2,5.5
                v1.3h6.7h11.9h6.7v-1.3c0-2.6,0.4-4.4,1.2-5.7C493.3,137.3,494.2,136.4,495.2,136z M495.2,78.9c-1-0.5-1.9-1.3-2.7-2.6
                c-0.8-1.3-1.2-3.1-1.2-5.5v-1.3h-6.7h-11.9h-6.7v1.3c0,2.6-0.4,4.4-1.2,5.7c-0.8,1.2-1.7,2-2.7,2.5c1,0.5,1.9,1.3,2.7,2.6
                c0.8,1.3,1.2,3.1,1.2,5.5V95c0,1.9,0.3,3.3,1,4s1.9,1.1,3.4,1.1h4.8h6.6h4.9c1.6,0,2.8-0.4,3.4-1.1c0.7-0.7,1-2.1,1-4v-8
                c0-2.6,0.4-4.4,1.2-5.7c0.4-0.6,0.8-1.1,1.2-1.5C494.2,79.5,494.7,79.1,495.2,78.9z M484.7,62.8h6.7c0-1.9-0.4-3.2-1-3.9
                c-0.7-0.7-1.8-1.1-3.4-1.1H482h-6.6h-4.9c-1.6,0-2.8,0.4-3.4,1.1s-1,2-1,3.9h6.7h9.9H484.7z M491.4,152.1h-6.7h-9.9h-2h-6.7
                c0,1.9,0.4,3.2,1,3.9c0.7,0.7,1.9,1.1,3.4,1.1h4.8h6.6h4.9c1.6,0,2.8-0.4,3.4-1.1C491,155.3,491.4,154,491.4,152.1z
                  M461.7,72.1v-2.4l0,0c-0.4,0.1-0.8,0.2-1.2,0.3h0c-0.4,0.1-0.7,0.2-1,0.4c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.4,0.2
                c0,0,0,0-0.1,0c-0.1,0.1-0.3,0.2-0.4,0.2c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0.1-0.1,0.1
                c-0.1,0.1-0.2,0.2-0.3,0.3l0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1
                c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.1
                c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2s0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2-0.1,0.3
                c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1c-0.1,0.7-0.2,1.4-0.3,2.2l0,0c0.7,0,1.6,0,1.6,0c0.7,0,1.2-0.1,1.7-0.4
                s0.9-0.7,1.2-1.2c0.3-0.5,0.6-1,0.8-1.6C461.6,73.3,461.7,72.7,461.7,72.1z M461.7,145.2v-2.4c0-0.6-0.1-1.2-0.2-1.8
                s-0.4-1.1-0.7-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1-0.5-1.7-0.5h-1.7c0.1,0.8,0.1,1.6,0.3,2.2l0,0c0,0.1,0,0.2,0.1,0.3
                c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.3,0.2,0.5,0.3,0.8
                c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2
                c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.3,0.3
                c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.2,0.4,0.2c0,0,0,0,0.1,0
                c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.4,0.2c0,0,0.1,0,0.1,0c0.1,0.1,0.3,0.1,0.5,0.2
                c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0C461.3,145.1,461.5,145.2,461.7,145.2L461.7,145.2z"/>
              <path class="st13" d="M508.3,107.5c-0.6,0.3-1.2,0.6-1.7,1c-1.1,0.8-2.1,2-3,3.4l0,0c0,0,0,0,0,0c-1.2,2-1.9,4.9-2,8.8
                c0,0.4,0,0.9,0,1.4v12.1h-1.7c-0.7,0-1.2-0.2-1.7-0.5c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.6-1-0.7-1.6
                c-0.2-0.6-0.3-1.2-0.3-1.8v-9.3c0-1.4-0.1-2.7-0.4-3.7c-0.3-1.1-0.8-2-1.5-2.7s-1.6-1.3-2.8-1.7c-1.2-0.4-2.6-0.6-4.4-0.6
                h-4.6h-6.6h-4.6c-1.8,0-3.2,0.2-4.4,0.6c-1.2,0.4-2.1,1-2.8,1.7c-0.7,0.8-1.2,1.7-1.5,2.7c-0.3,1.1-0.4,2.3-0.4,3.7v9.3
                c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.6-0.4,1.1-0.8,1.6c-0.3,0.5-0.7,0.9-1.2,1.2c-0.5,0.3-1,0.4-1.7,0.4c0,0-1,0-1.7,0v-12.1
                c0-0.4,0-0.7,0-1.1c-0.1-3.8-0.8-6.8-2.1-8.9c-1.4-2.3-3-3.8-4.7-4.6c0.6-0.2,1.1-0.5,1.6-0.9c1.1-0.8,2.2-2,3.1-3.5
                c1.2-1.9,1.9-4.7,2-8.4c0,0,0-0.1,0-0.1v0c0-0.5,0-1.1,0-1.7V80.8h1.7c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.9,0.7,1.2,1.2
                c0.3,0.5,0.6,1,0.8,1.6c0.2,0.6,0.3,1.2,0.3,1.8v9.3c0,1.4,0.1,2.7,0.4,3.7c0.3,1.1,0.8,2,1.5,2.7c0.7,0.8,1.6,1.3,2.8,1.7
                c1.2,0.4,2.6,0.6,4.4,0.6h4.6h6.6h4.6c1.8,0,3.2-0.2,4.4-0.6c1.2-0.4,2.1-1,2.8-1.7c0.7-0.8,1.2-1.7,1.5-2.7
                c0.3-1.1,0.4-2.3,0.4-3.7v-9.3c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.4-1.1,0.8-1.6c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1-0.4,1.7-0.4
                c0,0,1,0,1.7,0v12.1c0,0.4,0,0.9,0,1.3c0.1,3.7,0.8,6.6,2.1,8.6C504.9,105.1,506.5,106.6,508.3,107.5z"/>
              <path class="st14" d="M501.4,137.9L501.4,137.9c0,0.8-0.1,1.5-0.3,2.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1
                c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.3
                c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2
                c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.2l0,0c-0.1,0.1-0.2,0.2-0.3,0.3
                c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.2c0,0,0,0-0.1,0
                c-0.1,0.1-0.2,0.1-0.4,0.2c0,0,0,0-0.1,0c-0.3,0.1-0.6,0.3-1,0.4h0c-0.4,0.1-0.8,0.2-1.2,0.3l0,0v-2.4c0-0.6,0.1-1.2,0.3-1.8
                c0.2-0.6,0.4-1.1,0.7-1.6c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1.1-0.4,1.7-0.4C499.8,137.9,500.7,137.9,501.4,137.9z"/>
              <path class="st14" d="M501.4,77.1C501.4,77.1,501.4,77.1,501.4,77.1h-1.7c-0.7,0-1.2-0.2-1.7-0.5c-0.5-0.3-0.9-0.7-1.2-1.2
                c-0.3-0.5-0.6-1-0.7-1.6s-0.2-1.2-0.2-1.8v-2.4l0,0c0.2,0,0.4,0.1,0.5,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1
                c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.5,0.2c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2
                c0,0,0,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1
                c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1
                c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2s0,0.1,0.1,0.2
                c0.1,0.2,0.2,0.5,0.3,0.8c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1
                c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0C501.3,75.6,501.3,76.3,501.4,77.1z"/>
              <path class="st14" d="M492.5,133.4c0.8,1.3,1.7,2.1,2.7,2.6c-1,0.4-1.9,1.2-2.7,2.5c-0.8,1.2-1.2,3.1-1.2,5.7v1.3h-6.7h-11.9
                h-6.7v-1.3c0-2.4-0.4-4.2-1.2-5.5s-1.7-2.1-2.7-2.6c0.5-0.2,1-0.5,1.4-0.9s0.9-0.9,1.2-1.5c0.8-1.2,1.2-3.1,1.2-5.7V120
                c0-1.9,0.3-3.3,1-4c0.7-0.7,1.8-1.1,3.4-1.1h4.9h6.6h4.8c1.6,0,2.8,0.4,3.4,1.1c0.7,0.7,1,2.1,1,4v7.9
                C491.4,130.3,491.8,132.2,492.5,133.4z"/>
              <path class="st14" d="M492.5,76.4c0.8,1.3,1.7,2.1,2.7,2.6c-0.5,0.2-1,0.5-1.4,0.9c-0.4,0.4-0.9,0.9-1.2,1.5
                c-0.8,1.2-1.2,3.1-1.2,5.7V95c0,1.9-0.3,3.3-1,4c-0.7,0.7-1.8,1.1-3.4,1.1h-4.9h-6.6h-4.9c-1.6,0-2.8-0.4-3.4-1.1s-1-2.1-1-4
                v-8c0-2.4-0.4-4.2-1.2-5.5c-0.8-1.3-1.7-2.1-2.7-2.6c1-0.4,1.9-1.2,2.7-2.5c0.8-1.2,1.2-3.1,1.2-5.7v-1.3h6.7h11.9h6.7v1.3
                C491.4,73.2,491.8,75.1,492.5,76.4z"/>
              <path class="st13" d="M491.4,62.8h-6.7h-2h-9.9h-6.7c0-1.9,0.3-3.2,1-3.9c0.7-0.7,1.8-1.1,3.4-1.1h4.9h6.6h4.8
                c1.6,0,2.8,0.4,3.4,1.1C491,59.7,491.4,61,491.4,62.8z"/>
              <path class="st13" d="M484.7,152.1h6.7c0,1.9-0.3,3.2-1,3.9c-0.7,0.7-1.8,1.1-3.4,1.1h-4.9h-6.6h-4.8c-1.6,0-2.8-0.4-3.4-1.1
                c-0.7-0.7-1-2-1-3.9h6.7h2H484.7z"/>
              <path class="st14" d="M461.7,69.7v2.4c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.6-0.4,1.1-0.8,1.6c-0.3,0.5-0.7,0.9-1.2,1.2
                c-0.5,0.3-1.1,0.4-1.7,0.4c0,0-1,0-1.6,0l0,0c0-0.8,0.1-1.5,0.3-2.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1
                c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.1,0.1-0.2s0-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.3
                c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
                c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0.1-0.1,0.2-0.2,0.3-0.3
                c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.2,0.4-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.4-0.2
                c0,0,0,0,0.1,0c0.3-0.1,0.6-0.3,1-0.4h0C460.9,69.9,461.3,69.8,461.7,69.7L461.7,69.7z"/>
              <path class="st14" d="M461.7,142.9v2.4l0,0c-0.2,0-0.4-0.1-0.5-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0
                c-0.2,0-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.4-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0
                c-0.1-0.1-0.3-0.2-0.4-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3
                c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2
                c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.2-0.5-0.3-0.8
                c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3l0,0
                c-0.1-0.7-0.2-1.4-0.3-2.2h1.7c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.9,0.7,1.2,1.2c0.3,0.5,0.6,1,0.7,1.6
                C461.6,141.7,461.7,142.3,461.7,142.9z"/>
            </g>
          </g>
        </g>
        <g>
          <ellipse class="st13" cx="410.6" cy="104.3" rx="3.2" ry="3.2"/>
          <circle class="st13" cx="416.9" cy="110.7" r="3.2"/>
          <ellipse class="st13" cx="423.2" cy="104.3" rx="3.2" ry="3.2"/>
          <ellipse class="st13" cx="429.6" cy="110.7" rx="3.2" ry="3.2"/>
          <ellipse class="st13" cx="439.3" cy="75.6" rx="3.2" ry="3.2"/>
          <ellipse class="st13" cx="433" cy="69.3" rx="3.2" ry="3.2"/>
          <path class="st13" d="M426.7,66.2c1.8,0,3.2-1.4,3.2-3.2l0,0c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2l0,0
            C423.5,64.8,425,66.2,426.7,66.2z"/>
          <path class="st13" d="M420.4,72.4L420.4,72.4c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
            C417.2,71,418.6,72.4,420.4,72.4z"/>
          <ellipse class="st13" cx="439.3" cy="139.4" rx="3.2" ry="3.2"/>
          <ellipse class="st13" cx="433" cy="145.7" rx="3.2" ry="3.2"/>
          <ellipse class="st13" cx="426.7" cy="151.9" rx="3.2" ry="3.2"/>
          <path class="st13" d="M420.4,142.6L420.4,142.6c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2
            S422.1,142.6,420.4,142.6z"/>
          <path class="st13" d="M462.7,29.3c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0
            C464,32.5,464,30.5,462.7,29.3L462.7,29.3z"/>
          <path class="st13" d="M458.3,38.2L458.3,38.2c-1.2,1.2-1.2,3.3,0,4.5l0,0c1.2,1.2,3.3,1.2,4.5,0c1.2-1.2,1.2-3.3,0-4.5
            C461.5,37,459.5,37,458.3,38.2z"/>
          <path class="st13" d="M467.2,38.2c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0c1.2-1.2,1.2-3.3,0-4.5
            C470.4,37,468.4,37,467.2,38.2z"/>
          <path class="st13" d="M471.7,47.2c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0
            C472.9,50.4,472.9,48.4,471.7,47.2L471.7,47.2z"/>
          <path class="st13" d="M485.8,47.2c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0s1.2-3.3,0-4.5
            C489.1,45.9,487.1,45.9,485.8,47.2z"/>
          <path class="st13" d="M490.3,38.2c-1.2-1.2-3.3-1.2-4.5,0c-1.2,1.2-1.2,3.3,0,4.5l0,0c1.2,1.2,3.3,1.2,4.5,0l0,0
            C491.6,41.5,491.6,39.5,490.3,38.2L490.3,38.2z"/>
          <path class="st13" d="M499.3,38.2c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0
            C500.5,41.5,500.5,39.5,499.3,38.2L499.3,38.2z"/>
          <path class="st13" d="M494.8,29.3c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0c1.2-1.2,1.2-3.3,0-4.5
            C498.1,28,496,28,494.8,29.3z"/>
          <path class="st13" d="M546.3,101.2c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
            C549.4,102.6,548,101.2,546.3,101.2z"/>
          <path class="st13" d="M539.9,107.5c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
            C543.1,108.9,541.7,107.5,539.9,107.5z"/>
          <path class="st13" d="M533.6,101.2c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
            C536.8,102.6,535.4,101.2,533.6,101.2z"/>
          <path class="st13" d="M527.3,107.5c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
            C530.5,108.9,529,107.5,527.3,107.5z"/>
          <path class="st13" d="M517.5,72.4L517.5,72.4c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
            S519.2,72.4,517.5,72.4z"/>
          <path class="st13" d="M523.8,72.4L523.8,72.4c1.8,0,3.2-1.4,3.2-3.2c0-1.7-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
            C520.7,71,522.1,72.4,523.8,72.4z"/>
          <path class="st13" d="M530.2,66.2L530.2,66.2c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
            C527,64.8,528.4,66.2,530.2,66.2z"/>
          <path class="st13" d="M536.5,72.4c1.8,0,3.2-1.4,3.2-3.2c0-1.7-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
            C533.3,71,534.7,72.4,536.5,72.4z"/>
          <path class="st13" d="M517.5,136.2L517.5,136.2c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
            C520.7,137.7,519.2,136.2,517.5,136.2z"/>
          <path class="st13" d="M523.8,142.6L523.8,142.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
            S525.6,142.6,523.8,142.6z"/>
          <path class="st13" d="M530.2,148.8L530.2,148.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2
            S531.9,148.8,530.2,148.8z"/>
          <path class="st13" d="M536.5,142.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2S538.3,142.6,536.5,142.6z
            "/>
        </g>
      </g>
      <defs>
        <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="396.9" y="15.8" width="163.8" height="163.8">
          <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
        </filter>
      </defs>

        <mask maskUnits="userSpaceOnUse" x="396.9" y="15.8" width="163.8" height="163.8" id="SVGID_00000183935693716928585350000003469344326617224886_">
        <g class="st15">
          <g>
            <g>
              <g id="XMLID_00000026127070624215390770000010797882739692623036_">
                <g>
                  <path d="M521,103.9v6.6h-4.1c-1.2,0-2.2,0.3-3.1,0.8c-0.9,0.5-1.6,1.2-2.2,2.1c-0.6,0.9-1,1.8-1.3,2.9s-0.5,2.2-0.5,3.3
                    v16.7c0,2.6-0.3,4.8-0.8,6.7c-0.5,1.9-1.4,3.6-2.7,4.9c-1.3,1.3-3,2.4-5.1,3.1l0,0c-0.2,0.1-0.5,0.1-0.7,0.2
                    c-0.1,0-0.2,0-0.2,0.1c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.5,0.1-0.7,0.1c-0.2,0-0.3,0.1-0.5,0.1
                    c-0.1,0-0.2,0-0.3,0c-0.6,0.1-1.3,0.2-2,0.2l0,0v0.1c0,1.4-0.1,2.7-0.4,3.7c-0.3,1.1-0.8,2-1.5,2.7
                    c-0.7,0.8-1.6,1.3-2.8,1.7c-1.2,0.4-2.6,0.6-4.4,0.6h-10.1h-1.1h-4.6c-1.8,0-3.2-0.2-4.4-0.6c-1.2-0.4-2.1-1-2.8-1.7
                    c-0.7-0.8-1.2-1.7-1.5-2.7c-0.3-1.1-0.4-2.3-0.4-3.7v-0.1c-0.7-0.1-1.4-0.1-2-0.2c-0.1,0-0.1,0-0.2,0
                    c-0.2,0-0.4-0.1-0.5-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.2,0-0.3-0.1
                    c-0.2-0.1-0.5-0.1-0.7-0.2c-2.1-0.7-3.8-1.7-5.1-3.1c-1.3-1.4-2.2-3-2.7-4.9s-0.8-4.2-0.8-6.7v-16.7c0-1-0.1-2.1-0.4-3.2
                    c-0.2-0.6-0.4-1.2-0.7-1.8c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.4-0.6l0,0l0,0
                    c-0.6-0.9-1.3-1.6-2.2-2.1l0,0l0,0c-0.8-0.5-1.8-0.8-2.9-0.8c0,0-0.1,0-0.1,0h-4.2v-6.6h4.1c0.2,0,0.3,0,0.4,0
                    c1-0.1,1.9-0.3,2.6-0.8c0.9-0.5,1.6-1.2,2.2-2.1c0.6-0.9,1-1.8,1.4-2.9c0.3-1.1,0.5-2.2,0.5-3.3V78.2c0-2.6,0.3-4.8,0.8-6.7
                    c0.5-1.9,1.4-3.6,2.7-4.9c0.6-0.7,1.4-1.3,2.2-1.8c0.8-0.5,1.8-0.9,2.9-1.3c0.2-0.1,0.5-0.1,0.7-0.2c0.1,0,0.2,0,0.2-0.1
                    c0.2,0,0.4-0.1,0.5-0.1c0.1,0,0.2,0,0.3-0.1c0.2,0,0.5-0.1,0.7-0.1c0.2,0,0.3-0.1,0.5-0.1c0.1,0,0.2,0,0.3,0
                    c0.6-0.1,1.3-0.2,2-0.2l0,0v-0.1c0-1.4,0.1-2.7,0.4-3.7c0.3-1.1,0.8-2,1.5-2.7s1.6-1.3,2.8-1.7c1.2-0.4,2.6-0.6,4.4-0.6
                    h10.1h1.1h4.6c1.8,0,3.2,0.2,4.4,0.6c1.2,0.4,2.1,1,2.8,1.7c0.7,0.8,1.2,1.7,1.5,2.7c0.3,1.1,0.4,2.3,0.4,3.7v0.1
                    c0.7,0.1,1.4,0.1,2,0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.5,0.1c0.2,0,0.3,0.1,0.5,0.1s0.3,0.1,0.5,0.1
                    c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.5,0.1,0.7,0.2l0,0c2.1,0.7,3.8,1.7,5.1,3.1c1.3,1.4,2.2,3,2.7,4.9
                    c0.5,1.9,0.8,4.2,0.8,6.7v16.7c0,1,0.1,2.1,0.4,3.2c0.2,0.6,0.4,1.2,0.7,1.8c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2
                    c0.1,0.2,0.2,0.4,0.4,0.6l0,0c0.6,0.9,1.3,1.6,2.2,2.1c0.9,0.6,1.9,0.8,3.1,0.8L521,103.9L521,103.9z M506.9,108.2
                    c0.6-0.4,1.1-0.7,1.7-1c-1.8-0.8-3.4-2.4-4.7-4.6c-1.2-2.1-1.9-4.9-2.1-8.6c0-0.4,0-0.9,0-1.3V80.5c-0.7,0-1.7,0-1.7,0
                    c-0.7,0-1.2,0.1-1.7,0.4s-0.9,0.7-1.2,1.2c-0.3,0.5-0.6,1-0.8,1.6c-0.2,0.6-0.3,1.2-0.3,1.8v9.3c0,1.4-0.1,2.7-0.4,3.7
                    c-0.3,1.1-0.8,2-1.5,2.7c-0.7,0.8-1.7,1.3-2.8,1.7c-1.2,0.4-2.6,0.6-4.4,0.6h-4.6h-6.6h-4.6c-1.8,0-3.2-0.2-4.4-0.6
                    c-1.2-0.4-2.1-1-2.8-1.7c-0.7-0.8-1.2-1.7-1.5-2.7c-0.3-1.1-0.4-2.3-0.4-3.7v-9.3c0-0.6-0.1-1.2-0.3-1.8
                    c-0.2-0.6-0.4-1.1-0.8-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1-0.5-1.7-0.5h-1.7v12.1c0,0.6,0,1.1,0,1.7v0c0,0,0,0.1,0,0.1
                    c-0.2,3.7-0.8,6.5-2,8.4c-1,1.5-2,2.7-3.1,3.5c-0.5,0.4-1.1,0.7-1.6,0.9c1.8,0.8,3.4,2.4,4.7,4.6c1.3,2.1,2,5,2.1,8.9
                    c0,0.3,0,0.7,0,1.1v12.1c0.7,0,1.7,0,1.7,0c0.7,0,1.2-0.1,1.7-0.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.6-1,0.8-1.6
                    c0.2-0.6,0.3-1.2,0.3-1.8v-9.3c0-1.4,0.1-2.7,0.4-3.7c0.3-1.1,0.8-2,1.5-2.7c0.7-0.7,1.7-1.3,2.8-1.7
                    c1.2-0.4,2.6-0.6,4.4-0.6h4.6h6.6h4.6c1.8,0,3.2,0.2,4.4,0.6c1.2,0.4,2.1,1,2.8,1.7c0.7,0.8,1.2,1.7,1.5,2.7
                    c0.3,1.1,0.4,2.3,0.4,3.7v9.3c0,0.6,0.1,1.2,0.3,1.8c0.2,0.6,0.4,1.1,0.7,1.6c0.3,0.5,0.7,0.9,1.2,1.2
                    c0.5,0.3,1,0.5,1.7,0.5h1.7v-12.1c0-0.5,0-0.9,0-1.4c0.1-3.9,0.8-6.9,2-8.8c0,0,0,0,0,0l0,0
                    C504.8,110.1,505.8,109,506.9,108.2z M501.8,137.5L501.8,137.5c-0.7,0-1.6,0-1.6,0c-0.7,0-1.2,0.1-1.7,0.4
                    c-0.5,0.3-0.9,0.7-1.2,1.2c-0.3,0.5-0.6,1-0.7,1.6c-0.2,0.6-0.3,1.2-0.3,1.8v2.4l0,0c0.4-0.1,0.8-0.2,1.2-0.3h0
                    c0.4-0.1,0.7-0.2,1-0.4c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.4-0.2c0,0,0,0,0.1,0c0.1-0.1,0.3-0.2,0.4-0.2c0,0,0,0,0.1-0.1
                    c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.1-0.1,0.1-0.2,0.2-0.2c0,0,0,0,0.1-0.1
                    c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
                    c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2
                    c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1
                    C501.6,139.1,501.7,138.3,501.8,137.5z M501.8,76.8L501.8,76.8c-0.1-0.8-0.1-1.6-0.3-2.2c0,0,0,0,0,0c0-0.1,0-0.2-0.1-0.3
                    c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c-0.1-0.3-0.2-0.5-0.3-0.8
                    c0-0.1,0-0.1-0.1-0.2s-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2
                    c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0
                    c-0.1-0.1-0.2-0.2-0.3-0.3c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.2-0.4-0.2
                    c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.4-0.2c0,0-0.1,0-0.1,0
                    c-0.1-0.1-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.3-0.1-0.5-0.1l0,0v2.4
                    c0,0.6,0.1,1.2,0.2,1.8c0.2,0.6,0.4,1.1,0.7,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.5,0.3,1,0.5,1.7,0.5L501.8,76.8L501.8,76.8z
                      M495.5,135.7c-1-0.5-1.9-1.3-2.7-2.6s-1.2-3.1-1.2-5.5v-7.9c0-1.9-0.3-3.3-1-4c-0.7-0.7-1.8-1.1-3.4-1.1h-4.8h-6.6h-4.9
                    c-1.6,0-2.8,0.4-3.4,1.1c-0.7,0.7-1,2.1-1,4v7.9c0,2.6-0.4,4.4-1.2,5.7c-0.4,0.6-0.8,1.1-1.2,1.5c-0.4,0.4-0.9,0.7-1.4,0.9
                    c1,0.5,1.9,1.3,2.7,2.6c0.8,1.3,1.2,3.1,1.2,5.5v1.3h6.7h11.9h6.7v-1.3c0-2.6,0.4-4.4,1.2-5.7
                    C493.6,136.9,494.5,136.1,495.5,135.7z M495.5,78.6c-1-0.5-1.9-1.3-2.7-2.6c-0.8-1.3-1.2-3.1-1.2-5.5v-1.3h-6.7h-11.9h-6.7
                    v1.3c0,2.6-0.4,4.4-1.2,5.7c-0.8,1.2-1.7,2-2.7,2.5c1,0.5,1.9,1.3,2.7,2.6c0.8,1.3,1.2,3.1,1.2,5.5v7.9c0,1.9,0.3,3.3,1,4
                    s1.9,1.1,3.4,1.1h4.8h6.6h4.9c1.6,0,2.8-0.4,3.4-1.1s1-2.1,1-4v-8c0-2.6,0.4-4.4,1.2-5.7c0.4-0.6,0.8-1.1,1.2-1.5
                    C494.6,79.2,495,78.8,495.5,78.6z M485.1,62.5h6.7c0-1.9-0.4-3.2-1-3.9c-0.7-0.7-1.8-1.1-3.4-1.1h-4.8h-6.6h-4.9
                    c-1.6,0-2.8,0.4-3.4,1.1c-0.7,0.7-1,2-1,3.9h6.7h9.9H485.1z M491.8,151.8h-6.7h-9.9h-2h-6.7c0,1.9,0.4,3.2,1,3.9
                    c0.7,0.7,1.9,1.1,3.4,1.1h4.8h6.6h4.9c1.6,0,2.8-0.4,3.4-1.1C491.4,155,491.7,153.7,491.8,151.8z M462.1,71.8v-2.4l0,0
                    c-0.4,0.1-0.8,0.2-1.2,0.3h0c-0.4,0.1-0.7,0.2-1,0.4c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.4,0.2c0,0,0,0-0.1,0
                    c-0.1,0.1-0.3,0.2-0.4,0.2c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l0,0
                    c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2
                    c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.3
                    c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1
                    c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1c-0.1,0.7-0.2,1.4-0.3,2.2l0,0c0.7,0,1.6,0,1.6,0c0.7,0,1.2-0.1,1.7-0.4
                    s0.9-0.7,1.2-1.2c0.3-0.5,0.6-1,0.8-1.6C462,73,462.1,72.4,462.1,71.8z M462,144.9v-2.4c0-0.6-0.1-1.2-0.2-1.8
                    c-0.2-0.6-0.4-1.1-0.7-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1-0.5-1.7-0.5h-1.7c0.1,0.8,0.1,1.6,0.3,2.2l0,0
                    c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1
                    c0.1,0.3,0.2,0.5,0.3,0.8c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1
                    c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0
                    c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.2,0.4,0.2
                    c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.4,0.2c0,0,0.1,0,0.1,0
                    c0.1,0.1,0.3,0.1,0.5,0.2c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0C461.7,144.8,461.9,144.9,462,144.9
                    L462,144.9z"/>
                  <path class="st13" d="M508.6,107.2c-0.6,0.3-1.2,0.6-1.7,1c-1.1,0.8-2.1,2-3,3.4l0,0c0,0,0,0,0,0c-1.2,2-1.9,4.9-2,8.8
                    c0,0.4,0,0.9,0,1.4v12.1h-1.7c-0.7,0-1.2-0.2-1.7-0.5c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.6-1-0.7-1.6
                    c-0.2-0.6-0.3-1.2-0.3-1.8v-9.3c0-1.4-0.1-2.7-0.4-3.7c-0.3-1.1-0.8-2-1.5-2.7c-0.7-0.7-1.6-1.3-2.8-1.7
                    c-1.2-0.4-2.6-0.6-4.4-0.6h-4.6h-6.6h-4.6c-1.8,0-3.2,0.2-4.4,0.6c-1.2,0.4-2.1,1-2.8,1.7c-0.7,0.8-1.2,1.7-1.5,2.7
                    c-0.3,1.1-0.4,2.3-0.4,3.7v9.3c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.6-0.4,1.1-0.8,1.6c-0.3,0.5-0.7,0.9-1.2,1.2
                    c-0.5,0.3-1,0.4-1.7,0.4c0,0-1,0-1.7,0v-12.1c0-0.4,0-0.7,0-1.1c-0.1-3.8-0.8-6.8-2.1-8.9c-1.4-2.3-3-3.8-4.7-4.6
                    c0.6-0.2,1.1-0.5,1.6-0.9c1.1-0.8,2.2-2,3.1-3.5c1.2-1.9,1.9-4.7,2-8.4c0,0,0-0.1,0-0.1v0c0-0.5,0-1.1,0-1.7V80.5h1.7
                    c0.7,0,1.2,0.2,1.7,0.5s0.9,0.7,1.2,1.2c0.3,0.5,0.6,1,0.8,1.6s0.3,1.2,0.3,1.8v9.3c0,1.4,0.1,2.7,0.4,3.7s0.8,2,1.5,2.7
                    c0.7,0.8,1.6,1.3,2.8,1.7c1.2,0.4,2.6,0.6,4.4,0.6h4.6h6.6h4.6c1.8,0,3.2-0.2,4.4-0.6c1.2-0.4,2.1-1,2.8-1.7
                    c0.7-0.8,1.2-1.7,1.5-2.7c0.3-1.1,0.4-2.3,0.4-3.7v-9.3c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.4-1.1,0.8-1.6
                    c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1-0.4,1.7-0.4c0,0,1,0,1.7,0v12.1c0,0.4,0,0.9,0,1.3c0.1,3.7,0.8,6.6,2.1,8.6
                    C505.3,104.8,506.8,106.3,508.6,107.2z"/>
                  <path class="st14" d="M501.8,137.5L501.8,137.5c0,0.8-0.1,1.5-0.3,2.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1
                    c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2
                    c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1
                    c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.2l0,0
                    c-0.1,0.1-0.2,0.2-0.3,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.2
                    c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.4,0.2c0,0,0,0-0.1,0c-0.3,0.1-0.6,0.3-1,0.4h0c-0.4,0.1-0.8,0.2-1.2,0.3l0,0v-2.4
                    c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.4-1.1,0.7-1.6c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1.1-0.4,1.7-0.4
                    C500.1,137.5,501.1,137.5,501.8,137.5z"/>
                  <path class="st14" d="M501.8,76.8C501.8,76.8,501.8,76.8,501.8,76.8h-1.7c-0.7,0-1.2-0.2-1.7-0.5c-0.5-0.3-0.9-0.7-1.2-1.2
                    c-0.3-0.5-0.6-1-0.7-1.6s-0.2-1.2-0.2-1.8v-2.4l0,0c0.2,0,0.4,0.1,0.5,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1
                    c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.5,0.2c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2
                    c0,0,0,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1
                    c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2
                    c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2
                    s0,0.1,0.1,0.2c0.1,0.2,0.2,0.5,0.3,0.8c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3
                    c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0C501.6,75.3,501.7,76,501.8,76.8z"/>
                  <path class="st14" d="M492.9,133.1c0.8,1.3,1.7,2.1,2.7,2.6c-1,0.4-1.9,1.2-2.7,2.5c-0.8,1.2-1.2,3.1-1.2,5.7v1.3h-6.7
                    h-11.9h-6.7v-1.3c0-2.4-0.4-4.2-1.2-5.5c-0.8-1.3-1.7-2.1-2.7-2.6c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.9-0.9,1.2-1.5
                    c0.8-1.2,1.2-3.1,1.2-5.7v-7.9c0-1.9,0.3-3.3,1-4c0.7-0.7,1.8-1.1,3.4-1.1h4.9h6.6h4.8c1.6,0,2.8,0.4,3.4,1.1s1,2.1,1,4v7.9
                    C491.8,130,492.1,131.9,492.9,133.1z"/>
                  <path class="st14" d="M492.9,76.1c0.8,1.3,1.7,2.1,2.7,2.6c-0.5,0.2-1,0.5-1.4,0.9c-0.4,0.4-0.9,0.9-1.2,1.5
                    c-0.8,1.2-1.2,3.1-1.2,5.7v7.9c0,1.9-0.3,3.3-1,4s-1.8,1.1-3.4,1.1h-4.9h-6.6H471c-1.6,0-2.8-0.4-3.4-1.1s-1-2.1-1-4v-8
                    c0-2.4-0.4-4.2-1.2-5.5c-0.8-1.3-1.7-2.1-2.7-2.6c1-0.4,1.9-1.2,2.7-2.5c0.8-1.2,1.2-3.1,1.2-5.7v-1.3h6.7h11.9h6.7v1.3
                    C491.8,72.9,492.1,74.8,492.9,76.1z"/>
                  <path class="st13" d="M491.8,62.5h-6.7h-2h-9.9h-6.7c0-1.9,0.3-3.2,1-3.9s1.8-1.1,3.4-1.1h4.9h6.6h4.8
                    c1.6,0,2.8,0.4,3.4,1.1C491.4,59.4,491.7,60.7,491.8,62.5z"/>
                  <path class="st13" d="M485.1,151.8h6.7c0,1.9-0.3,3.2-1,3.9c-0.7,0.7-1.8,1.1-3.4,1.1h-4.9h-6.6H471c-1.6,0-2.8-0.4-3.4-1.1
                    c-0.7-0.7-1-2-1-3.9h6.7h2H485.1z"/>
                  <path class="st14" d="M462.1,69.4v2.4c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.6-0.4,1.1-0.8,1.6c-0.3,0.5-0.7,0.9-1.2,1.2
                    s-1.1,0.4-1.7,0.4c0,0-1,0-1.6,0l0,0c0-0.8,0.1-1.5,0.3-2.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1
                    c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2s0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.3
                    c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
                    c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0.1-0.1,0.2-0.2,0.3-0.3
                    c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.2,0.4-0.2c0,0,0,0,0.1,0
                    c0.1-0.1,0.2-0.1,0.4-0.2c0,0,0,0,0.1,0c0.3-0.1,0.6-0.3,1-0.4h0C461.3,69.6,461.7,69.5,462.1,69.4L462.1,69.4z"/>
                  <path class="st14" d="M462,142.6v2.4l0,0c-0.2,0-0.4-0.1-0.5-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0
                    c-0.2,0-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.4-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0
                    c-0.1-0.1-0.3-0.2-0.4-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3
                    c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2
                    c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.2-0.5-0.3-0.8
                    c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3l0,0
                    c-0.1-0.7-0.2-1.4-0.3-2.2h1.7c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.9,0.7,1.2,1.2c0.3,0.5,0.6,1,0.7,1.6
                    C462,141.4,462,142,462,142.6z"/>
                </g>
              </g>
            </g>
            <g>
              <ellipse class="st13" cx="411" cy="104" rx="3.2" ry="3.2"/>
              <circle class="st13" cx="417.3" cy="110.3" r="3.2"/>
              <ellipse class="st13" cx="423.6" cy="104" rx="3.2" ry="3.2"/>
              <ellipse class="st13" cx="429.9" cy="110.3" rx="3.2" ry="3.2"/>
              <ellipse class="st13" cx="439.7" cy="75.3" rx="3.2" ry="3.2"/>
              <ellipse class="st13" cx="433.4" cy="69" rx="3.2" ry="3.2"/>
              <path class="st13" d="M427,65.9c1.8,0,3.2-1.4,3.2-3.2l0,0c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2l0,0
                C423.9,64.5,425.3,65.9,427,65.9z"/>
              <path class="st13" d="M420.7,72.1L420.7,72.1c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
                C417.6,70.7,419,72.1,420.7,72.1z"/>
              <ellipse class="st13" cx="439.7" cy="139.1" rx="3.2" ry="3.2"/>
              <ellipse class="st13" cx="433.4" cy="145.4" rx="3.2" ry="3.2"/>
              <ellipse class="st13" cx="427" cy="151.6" rx="3.2" ry="3.2"/>
              <path class="st13" d="M420.7,142.3L420.7,142.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2
                S422.5,142.3,420.7,142.3z"/>
              <path class="st13" d="M463.1,29c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.2,1.2-1.2,3.3,0,4.5c1.2,1.2,3.3,1.2,4.5,0
                C464.3,32.2,464.3,30.2,463.1,29L463.1,29z"/>
              <path class="st13" d="M458.6,37.9L458.6,37.9c-1.2,1.2-1.2,3.3,0,4.5l0,0c1.5,1.5,4,1.2,5.1-0.8c0.5-0.9,0.5-2,0-2.8
                C462.7,36.7,460.1,36.4,458.6,37.9z"/>
              <path class="st13" d="M467.6,37.9c-1.5,1.5-1.2,4,0.8,5.1c0.9,0.5,2,0.5,2.8,0c2-1,2.3-3.6,0.8-5.1
                C470.8,36.7,468.8,36.7,467.6,37.9z"/>
              <path class="st13" d="M472.1,46.9c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.5,1.5-1.2,4,0.8,5.1c0.9,0.5,2,0.5,2.8,0
                C473.2,50.9,473.5,48.3,472.1,46.9L472.1,46.9z"/>
              <path class="st13" d="M486.2,46.9c-1.5,1.5-1.2,4,0.8,5.1c0.9,0.5,2,0.5,2.8,0c2-1,2.3-3.6,0.8-5.1
                C489.5,45.6,487.5,45.6,486.2,46.9z"/>
              <path class="st13" d="M490.7,37.9c-1.2-1.2-3.3-1.2-4.5,0c-1.2,1.2-1.2,3.3,0,4.5l0,0c1.2,1.2,3.3,1.2,4.5,0l0,0
                C491.9,41.2,491.9,39.2,490.7,37.9L490.7,37.9z"/>
              <path class="st13" d="M499.6,37.9c-1.2-1.2-3.3-1.2-4.5,0l0,0c-1.5,1.5-1.2,4.1,0.9,5.1c0.9,0.4,2,0.4,2.8-0.1
                C500.8,41.9,501.1,39.4,499.6,37.9L499.6,37.9z"/>
              <path class="st13" d="M495.2,29c-1.5,1.5-1.2,4,0.8,5.1c0.9,0.5,2,0.5,2.8,0c2-1,2.3-3.6,0.8-5.1
                C498.4,27.7,496.4,27.7,495.2,29z"/>
              <path class="st13" d="M546.6,100.9c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
                C549.8,102.3,548.4,100.9,546.6,100.9z"/>
              <path class="st13" d="M540.3,107.2c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
                C543.5,108.6,542.1,107.2,540.3,107.2z"/>
              <path class="st13" d="M534,100.9c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
                C537.2,102.3,535.7,100.9,534,100.9z"/>
              <path class="st13" d="M527.6,107.2c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2l0,0
                C530.8,108.6,529.4,107.2,527.6,107.2z"/>
              <path class="st13" d="M517.9,72.1L517.9,72.1c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
                S519.6,72.1,517.9,72.1z"/>
              <path class="st13" d="M524.2,72.1L524.2,72.1c1.8,0,3.2-1.4,3.2-3.2c0-1.7-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
                C521,70.7,522.5,72.1,524.2,72.1z"/>
              <path class="st13" d="M530.5,65.9L530.5,65.9c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
                C527.4,64.5,528.8,65.9,530.5,65.9z"/>
              <path class="st13" d="M536.9,72.1c1.8,0,3.2-1.4,3.2-3.2c0-1.7-1.4-3.2-3.2-3.2l0,0c-1.8,0-3.2,1.4-3.2,3.2
                C533.7,70.7,535.1,72.1,536.9,72.1z"/>
              <path class="st13" d="M517.9,135.9L517.9,135.9c-1.8,0-3.2,1.4-3.2,3.2l0,0c0,1.8,1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
                C521,137.3,519.6,135.9,517.9,135.9z"/>
              <path class="st13" d="M524.2,142.3L524.2,142.3c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
                S525.9,142.3,524.2,142.3z"/>
              <path class="st13" d="M530.5,148.5L530.5,148.5c-2,0-3.5,1.8-3.1,3.8c0.3,1.3,1.3,2.3,2.6,2.5c2,0.3,3.6-1.2,3.6-3.1
                C533.7,149.9,532.3,148.5,530.5,148.5z"/>
              <path class="st13" d="M536.9,142.3c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2l0,0c1.8,0,3.2-1.4,3.2-3.2
                S538.6,142.3,536.9,142.3z"/>
            </g>
          </g>
        </g>
      </mask>

        <linearGradient id="SVGID_00000062169007247590505190000018223745562737780648_" gradientUnits="userSpaceOnUse" x1="478.8" y1="178.6113" x2="478.8" y2="16.8044">
        <stop  offset="0" style="stop-color:#A86416"/>
        <stop  offset="2.280803e-02" style="stop-color:#B37616"/>
        <stop  offset="8.741842e-02" style="stop-color:#CEA517"/>
        <stop  offset="0.137" style="stop-color:#E0C217"/>
        <stop  offset="0.1654" style="stop-color:#E6CD17"/>
        <stop  offset="0.2335" style="stop-color:#EABE19"/>
        <stop  offset="0.3635" style="stop-color:#F5981F"/>
        <stop  offset="0.3849" style="stop-color:#F79120"/>
        <stop  offset="0.4059" style="stop-color:#F8A140"/>
        <stop  offset="0.4617" style="stop-color:#FBC991"/>
        <stop  offset="0.5077" style="stop-color:#FDE6CC"/>
        <stop  offset="0.5414" style="stop-color:#FEF8F1"/>
        <stop  offset="0.5592" style="stop-color:#FFFFFF"/>
        <stop  offset="0.6257" style="stop-color:#FCDCB8"/>
        <stop  offset="0.7077" style="stop-color:#FAB467"/>
        <stop  offset="0.7659" style="stop-color:#F89B34"/>
        <stop  offset="0.7944" style="stop-color:#F79120"/>
        <stop  offset="0.8205" style="stop-color:#F5971F"/>
        <stop  offset="0.8544" style="stop-color:#F1A71D"/>
        <stop  offset="0.8923" style="stop-color:#E9C119"/>
        <stop  offset="0.9061" style="stop-color:#E6CD17"/>
        <stop  offset="1" style="stop-color:#A86416"/>
      </linearGradient>

        <rect x="397.9" y="16.8" style="mask:url(#SVGID_00000183935693716928585350000003469344326617224886_);fill:url(#SVGID_00000062169007247590505190000018223745562737780648_);stroke:#222222;stroke-width:2;" width="161.8" height="161.8"/>
      </g>
      </g>
      <g>
      <g>
      <g id="XMLID_00000047032617206910612670000003562890203146240702_">
        <g>
          <path d="M811.3,528.9v5.9h-3.7c-1,0-1.9,0.2-2.7,0.7c-0.8,0.5-1.4,1.1-1.9,1.8c-0.5,0.8-0.9,1.6-1.2,2.6
            c-0.3,0.9-0.4,1.9-0.4,2.9v14.8c0,2.3-0.2,4.2-0.7,6c-0.5,1.7-1.3,3.2-2.4,4.4c-1.1,1.2-2.6,2.1-4.5,2.7l0,0
            c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.3,0.1-0.5,0.1c-0.1,0-0.1,0-0.2,0.1c-0.2,0-0.4,0.1-0.6,0.1
            c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1.1,0.1-1.8,0.2l0,0v0.1c0,1.3-0.1,2.4-0.4,3.3c-0.3,0.9-0.7,1.8-1.3,2.4
            c-0.6,0.7-1.4,1.2-2.5,1.5c-1,0.4-2.3,0.5-3.9,0.5h-9h-1H767c-1.6,0-2.9-0.2-3.9-0.5c-1-0.4-1.9-0.9-2.5-1.5
            c-0.6-0.7-1.1-1.5-1.3-2.4c-0.3-0.9-0.4-2.1-0.4-3.3v-0.1c-0.6-0.1-1.2-0.1-1.8-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3-0.1-0.5-0.1
            c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.4-0.1-0.6-0.2
            c-1.9-0.6-3.4-1.5-4.5-2.7c-1.1-1.2-1.9-2.7-2.4-4.4c-0.5-1.7-0.7-3.7-0.7-6v-14.8c0-0.9-0.1-1.9-0.4-2.8
            c-0.1-0.6-0.4-1.1-0.6-1.6c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.3-0.5l0,0l0,0
            c-0.5-0.8-1.1-1.4-1.9-1.9l0,0l0,0c-0.7-0.5-1.6-0.7-2.6-0.7c0,0-0.1,0-0.1,0h-3.8v-5.9h3.7c0.1,0,0.3,0,0.4,0
            c0.9-0.1,1.6-0.3,2.3-0.7c0.8-0.5,1.4-1.1,1.9-1.8c0.5-0.8,0.9-1.6,1.2-2.6c0.3-0.9,0.4-1.9,0.4-2.9v-14.8c0-2.3,0.2-4.2,0.7-6
            c0.5-1.7,1.3-3.2,2.4-4.4c0.6-0.6,1.2-1.1,2-1.6s1.6-0.8,2.5-1.1c0.2-0.1,0.4-0.1,0.6-0.2c0.1,0,0.1,0,0.2-0.1
            c0.1,0,0.3-0.1,0.5-0.1c0.1,0,0.1,0,0.2-0.1c0.2,0,0.4-0.1,0.6-0.1c0.1,0,0.3-0.1,0.4-0.1c0.1,0,0.1,0,0.2,0
            c0.6-0.1,1.1-0.1,1.8-0.2l0,0v-0.1c0-1.3,0.1-2.4,0.4-3.3c0.3-0.9,0.7-1.8,1.3-2.4c0.6-0.6,1.4-1.2,2.5-1.5
            c1-0.4,2.3-0.5,3.9-0.5h9h1h4.1c1.6,0,2.9,0.2,3.9,0.5c1,0.4,1.9,0.9,2.5,1.5c0.6,0.7,1.1,1.5,1.3,2.4c0.3,0.9,0.4,2.1,0.4,3.3
            v0.1c0.6,0.1,1.2,0.1,1.8,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.3,0.1,0.5,0.1s0.3,0.1,0.4,0.1s0.3,0.1,0.4,0.1c0.1,0,0.3,0.1,0.4,0.1
            c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.1,0.6,0.2l0,0c1.9,0.6,3.4,1.5,4.5,2.7c1.1,1.2,1.9,2.7,2.4,4.4c0.5,1.7,0.7,3.7,0.7,6v14.8
            c0,0.9,0.1,1.9,0.4,2.8c0.1,0.6,0.4,1.1,0.6,1.6c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.2,0.4,0.3,0.5l0,0
            c0.5,0.8,1.2,1.4,1.9,1.9c0.8,0.5,1.7,0.7,2.7,0.7H811.3L811.3,528.9z M798.8,532.7c0.5-0.4,1-0.6,1.5-0.9
            c-1.6-0.7-3-2.1-4.2-4.1c-1.1-1.8-1.7-4.4-1.8-7.7c0-0.4,0-0.8,0-1.1v-10.8c-0.6,0-1.5,0-1.5,0c-0.6,0-1.1,0.1-1.5,0.4
            c-0.4,0.3-0.8,0.6-1.1,1c-0.3,0.4-0.5,0.9-0.7,1.4c-0.2,0.5-0.2,1.1-0.2,1.6v8.2c0,1.3-0.1,2.4-0.4,3.3
            c-0.3,0.9-0.7,1.8-1.3,2.4c-0.6,0.7-1.5,1.2-2.5,1.5c-1,0.4-2.3,0.5-3.9,0.5H777h-5.9H767c-1.6,0-2.9-0.2-3.9-0.5
            c-1-0.4-1.9-0.9-2.5-1.5c-0.6-0.7-1.1-1.5-1.3-2.4s-0.4-2.1-0.4-3.3v-8.2c0-0.5-0.1-1-0.2-1.6s-0.4-1-0.7-1.4
            c-0.3-0.4-0.6-0.8-1.1-1.1c-0.4-0.3-0.9-0.4-1.5-0.4H754v10.8c0,0.5,0,1,0,1.5v0c0,0,0,0.1,0,0.1c-0.1,3.3-0.7,5.8-1.8,7.5
            c-0.9,1.3-1.8,2.4-2.8,3.1c-0.5,0.3-0.9,0.6-1.4,0.8c1.6,0.7,3,2.1,4.2,4.1c1.1,1.9,1.7,4.5,1.8,7.9c0,0.3,0,0.6,0,0.9v10.8
            c0.6,0,1.5,0,1.5,0c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.8-0.6,1.1-1c0.3-0.4,0.5-0.9,0.7-1.4c0.1-0.5,0.2-1.1,0.2-1.6v-8.2
            c0-1.3,0.1-2.4,0.4-3.3c0.3-0.9,0.7-1.8,1.3-2.4c0.6-0.6,1.5-1.2,2.5-1.5c1-0.4,2.3-0.5,3.9-0.5h4.1h5.9h4.1
            c1.6,0,2.9,0.2,3.9,0.5c1,0.4,1.9,0.9,2.5,1.5c0.6,0.7,1.1,1.5,1.3,2.4c0.3,0.9,0.4,2.1,0.4,3.3v8.2c0,0.5,0.1,1,0.2,1.6
            s0.4,1,0.6,1.4c0.3,0.4,0.6,0.8,1.1,1.1c0.4,0.3,0.9,0.4,1.5,0.4h1.5v-10.8c0-0.4,0-0.8,0-1.2c0.1-3.5,0.7-6.1,1.8-7.8
            c0,0,0,0,0,0l0,0C796.9,534.4,797.8,533.4,798.8,532.7z M794.2,558.8L794.2,558.8c-0.6,0-1.4,0-1.4,0c-0.6,0-1.1,0.1-1.5,0.4
            c-0.4,0.3-0.8,0.6-1.1,1c-0.3,0.4-0.5,0.9-0.6,1.4s-0.2,1.1-0.2,1.6v2.1l0,0c0.4-0.1,0.7-0.1,1-0.2h0c0.3-0.1,0.6-0.2,0.9-0.3
            c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2
            c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
            c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2
            c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0.1-0.1c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.1
            c0-0.1,0-0.1,0.1-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1C794.1,560.1,794.2,559.5,794.2,558.8z M794.2,504.9
            L794.2,504.9c-0.1-0.7-0.1-1.4-0.2-2c0,0,0,0,0,0c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1
            c0-0.1-0.1-0.2-0.1-0.2c0,0,0-0.1,0-0.1c-0.1-0.2-0.2-0.5-0.3-0.7c0-0.1,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1
            c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1
            c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0-0.1-0.1-0.1-0.1
            c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.1
            c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.4-0.1
            c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.5-0.1l0,0v2.1c0,0.5,0.1,1,0.2,1.6s0.4,1,0.6,1.4c0.3,0.4,0.6,0.8,1.1,1.1
            c0.4,0.3,0.9,0.4,1.5,0.4L794.2,504.9L794.2,504.9z M788.7,557.2c-0.9-0.4-1.7-1.2-2.4-2.3c-0.7-1.1-1-2.8-1-4.9v-7
            c0-1.7-0.3-2.9-0.9-3.5c-0.6-0.6-1.6-1-3.1-1H777h-5.9h-4.3c-1.4,0-2.4,0.3-3,1c-0.6,0.6-0.9,1.8-0.9,3.5v7c0,2.3-0.4,3.9-1,5
            c-0.4,0.5-0.7,1-1.1,1.4c-0.4,0.4-0.8,0.6-1.2,0.8c0.9,0.4,1.7,1.2,2.4,2.3s1,2.8,1,4.9v1.1h5.9h10.5h5.9v-1.1
            c0-2.3,0.4-3.9,1-5C787,558.3,787.8,557.5,788.7,557.2z M788.7,506.5c-0.9-0.4-1.7-1.2-2.4-2.3c-0.7-1.1-1-2.8-1-4.9v-1.1h-5.9
            h-10.5h-5.9v1.1c0,2.3-0.4,3.9-1,5c-0.7,1.1-1.5,1.8-2.4,2.2c0.9,0.4,1.7,1.2,2.4,2.3c0.7,1.1,1,2.8,1,4.9v7
            c0,1.7,0.3,2.9,0.9,3.5c0.6,0.6,1.6,1,3.1,1h4.3h5.9h4.3c1.4,0,2.4-0.3,3-1s0.9-1.8,0.9-3.5v-7.1c0-2.3,0.3-3.9,1-5
            c0.4-0.5,0.7-1,1.1-1.4C787.8,506.9,788.3,506.6,788.7,506.5z M779.4,492.2h5.9c0-1.6-0.3-2.8-0.9-3.4c-0.6-0.6-1.6-1-3.1-1H777
            h-5.9h-4.3c-1.4,0-2.4,0.3-3,1c-0.6,0.6-0.9,1.8-0.9,3.4h5.9h8.8H779.4z M785.3,571.5h-5.9h-8.8h-1.8H763c0,1.6,0.3,2.8,0.9,3.4
            c0.6,0.6,1.6,1,3.1,1h4.3h5.9h4.3c1.4,0,2.4-0.3,3-1C785,574.3,785.3,573.1,785.3,571.5z M759,500.4v-2.1l0,0
            c-0.4,0.1-0.7,0.1-1,0.2h0c-0.3,0.1-0.6,0.2-0.9,0.3c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0
            c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l0,0
            c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1
            c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1-0.1,0.1
            c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3
            c0,0,0,0.1,0,0.1c-0.1,0.6-0.2,1.2-0.2,1.9l0,0c0.6,0,1.4,0,1.4,0c0.6,0,1.1-0.1,1.5-0.4s0.8-0.6,1.1-1c0.3-0.4,0.5-0.9,0.7-1.4
            C758.9,501.5,759,500.9,759,500.4z M758.9,565.3v-2.1c0-0.5-0.1-1-0.2-1.6c-0.1-0.5-0.4-1-0.6-1.4c-0.3-0.4-0.6-0.8-1.1-1.1
            c-0.4-0.3-0.9-0.4-1.5-0.4H754c0.1,0.7,0.1,1.4,0.3,2l0,0c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3
            c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.2c0,0,0,0.1,0,0.1c0.1,0.2,0.2,0.5,0.3,0.7c0,0.1,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1
            c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1
            c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2
            c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.1
            c0,0,0.1,0,0.1,0c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.4,0.1c0,0,0.1,0,0.1,0
            C758.6,565.3,758.8,565.3,758.9,565.3L758.9,565.3z"/>
          <path class="st13" d="M800.3,531.8c-0.5,0.2-1,0.5-1.5,0.9c-1,0.7-1.9,1.7-2.7,3l0,0c0,0,0,0,0,0c-1.1,1.7-1.7,4.4-1.8,7.8
            c0,0.4,0,0.8,0,1.2v10.8h-1.5c-0.6,0-1.1-0.1-1.5-0.4c-0.4-0.3-0.8-0.6-1.1-1.1c-0.3-0.4-0.5-0.9-0.6-1.4
            c-0.1-0.5-0.2-1.1-0.2-1.6v-8.2c0-1.3-0.1-2.4-0.4-3.3c-0.3-0.9-0.7-1.8-1.3-2.4c-0.6-0.6-1.4-1.2-2.5-1.5
            c-1-0.4-2.3-0.5-3.9-0.5h-4.1h-5.9h-4.1c-1.6,0-2.9,0.2-3.9,0.5c-1,0.4-1.9,0.9-2.5,1.5c-0.6,0.7-1.1,1.5-1.3,2.4
            c-0.3,0.9-0.4,2.1-0.4,3.3v8.2c0,0.6-0.1,1.1-0.2,1.6s-0.4,1-0.7,1.4c-0.3,0.4-0.6,0.8-1.1,1c-0.4,0.3-0.9,0.4-1.5,0.4
            c0,0-0.9,0-1.5,0v-10.8c0-0.3,0-0.6,0-0.9c-0.1-3.4-0.7-6-1.8-7.9c-1.2-2-2.6-3.4-4.2-4.1c0.5-0.2,1-0.5,1.4-0.8
            c1-0.7,1.9-1.8,2.8-3.1c1.1-1.7,1.6-4.2,1.8-7.5c0,0,0-0.1,0-0.1v0c0-0.5,0-0.9,0-1.5v-10.8h1.5c0.6,0,1.1,0.1,1.5,0.4
            c0.4,0.3,0.8,0.6,1.1,1.1c0.3,0.4,0.5,0.9,0.7,1.4c0.2,0.5,0.2,1.1,0.2,1.6v8.2c0,1.3,0.1,2.4,0.4,3.3c0.3,1,0.7,1.8,1.3,2.4
            c0.6,0.7,1.4,1.2,2.5,1.5c1,0.4,2.3,0.5,3.9,0.5h4.1h5.9h4.1c1.6,0,2.9-0.2,3.9-0.5c1-0.4,1.9-0.9,2.5-1.5
            c0.6-0.7,1.1-1.5,1.3-2.4c0.3-0.9,0.4-2.1,0.4-3.3v-8.2c0-0.5,0.1-1.1,0.2-1.6c0.1-0.5,0.4-1,0.7-1.4c0.3-0.4,0.6-0.8,1.1-1
            c0.4-0.3,0.9-0.4,1.5-0.4c0,0,0.9,0,1.5,0v10.8c0,0.4,0,0.8,0,1.1c0.1,3.3,0.7,5.8,1.8,7.7C797.3,529.7,798.7,531.1,800.3,531.8
            z"/>
          <path class="st14" d="M794.2,558.8L794.2,558.8c0,0.7-0.1,1.4-0.2,1.9c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1
            c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.3
            c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2
            c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2l0,0c-0.1,0.1-0.2,0.2-0.3,0.3
            c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0
            c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0-0.1,0c-0.3,0.1-0.6,0.2-0.9,0.3h0c-0.3,0.1-0.7,0.2-1,0.2l0,0v-2.1c0-0.6,0.1-1.1,0.2-1.6
            c0.1-0.5,0.4-1,0.6-1.4c0.3-0.4,0.6-0.8,1.1-1s0.9-0.4,1.5-0.4C792.8,558.8,793.6,558.8,794.2,558.8z"/>
          <path class="st14" d="M794.2,504.8C794.2,504.9,794.2,504.9,794.2,504.8h-1.5c-0.6,0-1.1-0.1-1.5-0.4c-0.4-0.3-0.8-0.6-1.1-1.1
            c-0.3-0.4-0.5-0.9-0.6-1.4s-0.2-1.1-0.2-1.6v-2.1l0,0c0.2,0,0.3,0.1,0.5,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.4,0.1
            c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.1
            c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3
            c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1
            c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.1c0.1,0.2,0.2,0.4,0.3,0.7
            c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3
            c0,0,0,0,0,0C794.1,503.5,794.2,504.1,794.2,504.8z"/>
          <path class="st14" d="M786.3,554.9c0.7,1.1,1.5,1.9,2.4,2.3c-0.9,0.4-1.7,1.1-2.4,2.2c-0.7,1.1-1,2.7-1,5v1.1h-5.9h-10.5h-5.9
            v-1.1c0-2.2-0.4-3.8-1-4.9s-1.5-1.9-2.4-2.3c0.4-0.2,0.9-0.5,1.2-0.8s0.8-0.8,1.1-1.4c0.7-1.1,1-2.7,1-5v-7
            c0-1.7,0.3-2.9,0.9-3.5c0.6-0.6,1.6-1,3-1h4.3h5.9h4.3c1.4,0,2.4,0.3,3.1,1c0.6,0.6,0.9,1.8,0.9,3.5v7
            C785.3,552.1,785.7,553.7,786.3,554.9z"/>
          <path class="st14" d="M786.3,504.2c0.7,1.1,1.5,1.9,2.4,2.3c-0.4,0.2-0.9,0.5-1.2,0.8c-0.4,0.4-0.8,0.8-1.1,1.4
            c-0.7,1.1-1,2.7-1,5v7c0,1.7-0.3,2.9-0.9,3.5s-1.6,1-3,1h-4.3h-5.9h-4.3c-1.4,0-2.4-0.3-3.1-1c-0.6-0.6-0.9-1.8-0.9-3.5v-7.1
            c0-2.2-0.4-3.8-1-4.9s-1.5-1.9-2.4-2.3c0.9-0.4,1.7-1.1,2.4-2.2c0.7-1.1,1-2.7,1-5v-1.1h5.9h10.5h5.9v1.1
            C785.3,501.4,785.7,503.1,786.3,504.2z"/>
          <path class="st13" d="M785.3,492.2h-5.9h-1.8h-8.8H763c0-1.6,0.3-2.8,0.9-3.4c0.6-0.6,1.6-1,3-1h4.3h5.9h4.3
            c1.4,0,2.4,0.3,3.1,1C785,489.4,785.3,490.5,785.3,492.2z"/>
          <path class="st13" d="M779.4,571.5h5.9c0,1.6-0.3,2.8-0.9,3.4c-0.6,0.6-1.6,1-3,1h-4.3h-5.9h-4.3c-1.4,0-2.4-0.3-3.1-1
            c-0.6-0.6-0.9-1.8-0.9-3.4h5.9h1.8H779.4z"/>
          <path class="st14" d="M759,498.3v2.1c0,0.6-0.1,1.1-0.2,1.6c-0.1,0.5-0.4,1-0.7,1.4c-0.3,0.4-0.6,0.8-1.1,1s-0.9,0.4-1.5,0.4
            c0,0-0.9,0-1.4,0l0,0c0-0.7,0.1-1.4,0.2-1.9c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.2
            c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.1c0-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1
            c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1
            c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2l0,0c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.1-0.1
            c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0
            c0.3-0.1,0.6-0.2,0.9-0.3h0C758.3,498.4,758.6,498.3,759,498.3L759,498.3z"/>
          <path class="st14" d="M758.9,563.2v2.1l0,0c-0.1,0-0.3-0.1-0.5-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.4-0.1c0,0-0.1,0-0.1,0
            c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0-0.1,0
            c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3
            c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1
            c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.1c0-0.1,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.4-0.3-0.7
            c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.1-0.3l0,0
            c-0.1-0.6-0.2-1.3-0.3-2h1.5c0.6,0,1.1,0.1,1.5,0.4c0.4,0.3,0.8,0.6,1.1,1.1c0.3,0.4,0.5,0.9,0.6,1.4
            C758.9,562.2,758.9,562.7,758.9,563.2z"/>
        </g>
      </g>
      </g>
      <g>
      <ellipse class="st13" cx="713.6" cy="529" rx="2.8" ry="2.8"/>
      <circle class="st13" cx="719.2" cy="534.6" r="2.8"/>
      <ellipse class="st13" cx="724.8" cy="529" rx="2.8" ry="2.8"/>
      <ellipse class="st13" cx="730.4" cy="534.6" rx="2.8" ry="2.8"/>
      <ellipse class="st13" cx="739.1" cy="503.5" rx="2.8" ry="2.8"/>
      <ellipse class="st13" cx="733.5" cy="497.9" rx="2.8" ry="2.8"/>
      <path class="st13" d="M727.9,495.1c1.6,0,2.8-1.3,2.8-2.8l0,0c0-1.6-1.3-2.8-2.8-2.8c-1.6,0-2.8,1.3-2.8,2.8l0,0
        C725.1,493.9,726.3,495.1,727.9,495.1z"/>
      <path class="st13" d="M722.3,500.7L722.3,500.7c1.6,0,2.8-1.3,2.8-2.8c0-1.6-1.3-2.8-2.8-2.8l0,0c-1.6,0-2.8,1.3-2.8,2.8
        C719.4,499.4,720.7,500.7,722.3,500.7z"/>
      <ellipse class="st13" cx="739.1" cy="560.1" rx="2.8" ry="2.8"/>
      <ellipse class="st13" cx="733.5" cy="565.8" rx="2.8" ry="2.8"/>
      <ellipse class="st13" cx="727.9" cy="571.3" rx="2.8" ry="2.8"/>
      <path class="st13" d="M722.3,563L722.3,563c-1.6,0-2.8,1.3-2.8,2.8c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8
        S723.8,563,722.3,563z"/>
      <path class="st13" d="M759.9,462.4c-1.1-1.1-2.9-1.1-4,0l0,0c-1.1,1.1-1.1,2.9,0,4c1.1,1.1,2.9,1.1,4,0
        C761,465.2,761,463.5,759.9,462.4L759.9,462.4z"/>
      <path class="st13" d="M755.9,470.3L755.9,470.3c-1.1,1.1-1.1,2.9,0,4l0,0c1.1,1.1,2.9,1.1,4,0s1.1-2.9,0-4
        C758.8,469.2,757,469.2,755.9,470.3z"/>
      <path class="st13" d="M763.9,470.3c-1.1,1.1-1.1,2.9,0,4s2.9,1.1,4,0s1.1-2.9,0-4C766.7,469.2,765,469.2,763.9,470.3z"/>
      <path class="st13" d="M767.8,478.3c-1.1-1.1-2.9-1.1-4,0l0,0c-1.1,1.1-1.1,2.9,0,4c1.1,1.1,2.9,1.1,4,0
        C768.9,481.1,768.9,479.3,767.8,478.3L767.8,478.3z"/>
      <path class="st13" d="M780.4,478.3c-1.1,1.1-1.1,2.9,0,4c1.1,1.1,2.9,1.1,4,0c1.1-1.1,1.1-2.9,0-4
        C783.3,477.2,781.5,477.2,780.4,478.3z"/>
      <path class="st13" d="M784.4,470.3c-1.1-1.1-2.9-1.1-4,0c-1.1,1.1-1.1,2.9,0,4l0,0c1.1,1.1,2.9,1.1,4,0l0,0
        C785.5,473.2,785.5,471.4,784.4,470.3L784.4,470.3z"/>
      <path class="st13" d="M792.3,470.3c-1.1-1.1-2.9-1.1-4,0l0,0c-1.1,1.1-1.1,2.9,0,4s2.9,1.1,4,0S793.4,471.4,792.3,470.3
        L792.3,470.3z"/>
      <path class="st13" d="M788.4,462.4c-1.1,1.1-1.1,2.9,0,4c1.1,1.1,2.9,1.1,4,0c1.1-1.1,1.1-2.9,0-4
        C791.3,461.3,789.5,461.3,788.4,462.4z"/>
      <path class="st13" d="M834.1,526.2c-1.6,0-2.8,1.3-2.8,2.8l0,0c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8l0,0
        C836.9,527.4,835.6,526.2,834.1,526.2z"/>
      <path class="st13" d="M828.5,531.8c-1.6,0-2.8,1.3-2.8,2.8l0,0c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8l0,0
        C831.3,533.1,830,531.8,828.5,531.8z"/>
      <path class="st13" d="M822.8,526.2c-1.6,0-2.8,1.3-2.8,2.8l0,0c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8l0,0
        C825.7,527.4,824.4,526.2,822.8,526.2z"/>
      <path class="st13" d="M817.2,531.8c-1.6,0-2.8,1.3-2.8,2.8l0,0c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8l0,0
        C820,533.1,818.8,531.8,817.2,531.8z"/>
      <path class="st13" d="M808.5,500.7L808.5,500.7c-1.6,0-2.8,1.3-2.8,2.8c0,1.6,1.3,2.8,2.8,2.8l0,0c1.6,0,2.8-1.3,2.8-2.8
        C811.3,501.9,810.1,500.7,808.5,500.7z"/>
      <path class="st13" d="M814.1,500.7L814.1,500.7c1.6,0,2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8l0,0c-1.6,0-2.8,1.3-2.8,2.8
        S812.6,500.7,814.1,500.7z"/>
      <path class="st13" d="M819.8,495.1L819.8,495.1c1.6,0,2.8-1.3,2.8-2.8c0-1.6-1.3-2.8-2.8-2.8l0,0c-1.6,0-2.8,1.3-2.8,2.8
        C817,493.9,818.2,495.1,819.8,495.1z"/>
      <path class="st13" d="M825.4,500.7c1.6,0,2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8l0,0c-1.6,0-2.8,1.3-2.8,2.8S823.8,500.7,825.4,500.7z"
        />
      <path class="st13" d="M808.5,557.3L808.5,557.3c-1.6,0-2.8,1.3-2.8,2.8l0,0c0,1.6,1.3,2.8,2.8,2.8l0,0c1.6,0,2.8-1.3,2.8-2.8
        S810.1,557.3,808.5,557.3z"/>
      <path class="st13" d="M814.1,563L814.1,563c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8l0,0c1.6,0,2.8-1.3,2.8-2.8
        S815.7,563,814.1,563z"/>
      <path class="st13" d="M819.8,568.5L819.8,568.5c-1.6,0-2.8,1.3-2.8,2.8c0,1.5,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8
        C822.6,569.7,821.3,568.5,819.8,568.5z"/>
      <path class="st13" d="M825.4,563c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8l0,0c1.6,0,2.8-1.3,2.8-2.8S827,563,825.4,563z"/>
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

