import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
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
    <title>calculator</title>
</head>
<body>

  <div class="text-center calculator-main">
  <form class="calculator" name="calc">
    <input class="value" type="text" name="txt" readonly="">
    <span class="num clear" onclick="document.calc.txt.value = ''">C</span>
    <span class="num" onclick="document.calc.txt.value += '/'">/</span>
    <span class="num" onclick="document.calc.txt.value += '*'">*</span>
    <span class="num" onclick="document.calc.txt.value += '7'">7</span>
    <span class="num" onclick="document.calc.txt.value += '8'">8</span>
    <span class="num" onclick="document.calc.txt.value += '9'">9</span>
    <span class="num" onclick="document.calc.txt.value += '-'">-</span>
    <span class="num" onclick="document.calc.txt.value += '4'">4</span>
    <span class="num" onclick="document.calc.txt.value += '5'">5</span>
    <span class="num" onclick="document.calc.txt.value += '6'">6</span>
    <span class="num plus" onclick="document.calc.txt.value += '+'">+</span>
    <span class="num" onclick="document.calc.txt.value += '3'">3</span>
    <span class="num" onclick="document.calc.txt.value += '2'">2</span>
    <span class="num" onclick="document.calc.txt.value += '1'">1</span>
    <span class="num" onclick="document.calc.txt.value += '0'">0</span>
    <span class="num" onclick="document.calc.txt.value += '00'">00</span>
    <span class="num equal" onclick="document.calc.txt.value = eval(calc.txt.value)">=</span>
  </form>
</div>
</body>
</html>`


cssCode:any=`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins',sans-serif;
}
.calculator-main{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #091921;
}
.calculator{
  position: relative;
  display: grid;
}
.calculator .value{
  grid-column: span 4;
  height: 100px;
  text-align: right;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
}
.calculator span{
  display: grid;
  width: 80px;
  height: 80px;
  color: #fff;
  background: #0c2835;
  place-items: center;
  border: 1px solid rgba(0,0,0,.1);
}
.calculator span:active{
  background: rgb(26, 133, 175);
  color: #111;
}
.calculator span.clear{
  grid-column: span 2;
  width: 160px;
  background: rgb(252, 45, 45);
}
.calculator span.plus{
  grid-row: span 2;
  height: 120px;
}
.calculator span.equal{
  background: green;
}
`

copyCode(code: string) {
  navigator.clipboard.writeText(code).then(() => {
this.toast.success('Code copied sucessfully !')

  }).catch(err => {
      console.error('Failed to copy:', err);
    });

}









previewCode = `
<!DOCTYPE html>
<html>
<head>
<style>
${this.cssCode}
</style>
</head>
<body>

${this.htmlCode}

<script>
</script>

</body>
</html>
`

generatePreview() {
  const code = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>${this.cssCode}</style>
  </head>
  <body>

    ${this.htmlCode}



  </body>
  </html>
  `;

  this.safePreview = this.sanitizer.bypassSecurityTrustHtml(code);
}
ngOnInit() {
  // this.generatePreview();
}
}
