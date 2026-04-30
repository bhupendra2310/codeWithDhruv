import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-css-button-generator-page',
  templateUrl: './css-button-generator-page.component.html',
  styleUrls: ['./css-button-generator-page.component.scss']
})
export class CssButtonGeneratorPageComponent {

  constructor(private toast: ToastrService) {}

  // 🔹 Default values
  text: string = 'Submit';
  bgColor: string = '#363636';
  textColor: string = '#ffffff';
  paddingY: number = 10;
  paddingX: number = 51;
  borderRadius: number = 50;
  border:number = 1;
  borderColor:any=`#ffffff`

  // 🔹 Button Styles (Live Preview)
  get buttonStyles() {
    return {
      'background-color': this.bgColor,
      'color': this.textColor,
      'padding': `${this.paddingY}px ${this.paddingX}px`,
      'border-radius': `${this.borderRadius}px`,
      'cursor': 'pointer',
      'border': `${this.border}px solid ${this.borderColor}`
    };
  }

  // 🔹 CSS Code Output
  get cssCode(): string {
    return `
button {
  background-color: ${this.bgColor};
  color: ${this.textColor};
  padding: ${this.paddingY}px ${this.paddingX}px;
  border-radius: ${this.borderRadius}px;
  border: ${this.border}px solid ${this.borderColor};
  cursor: pointer;
}
    `;
  }

  // 🔹 Copy Function
  copyCode() {
    navigator.clipboard.writeText(this.cssCode).then(() => {
      this.toast.success('CSS Copied Successfully!');
    }).catch(() => {
      this.toast.error('Failed to copy!');
    });
  }

}
