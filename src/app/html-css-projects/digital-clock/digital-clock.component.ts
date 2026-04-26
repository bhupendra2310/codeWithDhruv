import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent {



  constructor(private sanitizer: DomSanitizer,
    private toast:ToastrService
  ) {}
  safePreview: any;


  htmlCode:any=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="style.css">
      <title>Digital Clock</title>
  </head>
  <body>

    <div class="center">
        <div id="banner"><span>Your local time</span></div>
        <div id="clock"></div>
      </div>
  </body>
  <script src="clock.js"></script>
  </html>`


  cssCode:any=`
   body{
        text-align: center;
        background-color:rgb(59, 55, 55);
        color: aliceblue;
        margin: 0;

    }
    .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }

  `
jsCode:any=`const clock=document.querySelector("#clock")

setInterval(function(){
    let date=new Date()
    clock.innerHTML=(date.toLocaleTimeString())

},1)
`
  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
  this.toast.success('Code copied successfully !')
    }).catch(err => {
        console.error('Failed to copy:', err);
   });
  }
}
