import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-box-radius-generator-page',
  templateUrl: './box-radius-generator-page.component.html',
  styleUrls: ['./box-radius-generator-page.component.scss']
})
export class BoxRadiusGeneratorPageComponent {

  constructor(private toast: ToastrService) {}

  // 🔹 Default values
  tl: number = 10; // top-left
  tr: number = 10; // top-right
  br: number = 10; // bottom-right
  bl: number = 10; // bottom-left

  // 🔹 Border Radius Value
  get borderRadiusValue(): string {
    return `${this.tl}px ${this.tr}px ${this.br}px ${this.bl}px`;
  }

  // 🔹 Copy CSS
  copyCode() {
    const css = `border-radius: ${this.borderRadiusValue};`;

    navigator.clipboard.writeText(css).then(() => {
      this.toast.success('CSS Copied Successfully!');
    }).catch(() => {
      this.toast.error('Failed to copy!');
    });
  }

}
