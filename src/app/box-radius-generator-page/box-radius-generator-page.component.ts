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



  // FAQ Questions
  activeIndex: number | null = null;
  borderRadius=[
    {
      "question": "What is shorthand in border-radius?",
      "answer": "Shorthand means writing all four corner values in a single line instead of separate properties. Example: border-radius: 10px 20px 30px 40px; This represents top-left, top-right, bottom-right, and bottom-left."
    },
    {
      "question": "Can I use percentage (%) instead of pixels (px)?",
      "answer": "Yes, you can use both px and %. Pixels give fixed corner rounding, while percentage makes it responsive. Example: border-radius: 50%; creates a circle if width and height are equal."
    },
    {
      "question": "How do I make a perfect circle using border-radius?",
      "answer": "To create a perfect circle, set equal width and height and use border-radius: 50%. Example: width: 200px; height: 200px; border-radius: 50%;"
    }
  ]

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
