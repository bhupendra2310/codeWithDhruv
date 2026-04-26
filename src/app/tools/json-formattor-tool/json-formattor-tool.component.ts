import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-json-formattor-tool',
  templateUrl: './json-formattor-tool.component.html',
  styleUrls: ['./json-formattor-tool.component.scss']
})
export class JsonFormattorToolComponent {

constructor( private toast:ToastrService) {
}

  rawInput: string = '';
  formattedOutput: string = '';

  formatJson() {
    try {
      const parsed = JSON.parse(this.rawInput);
      this.formattedOutput = JSON.stringify(parsed, null, 4); // 4 spaces for indentation
    } catch (e:any) {
      this.formattedOutput = `Invalid JSON: ${e.message}`;
    }
  }

  minifyJson() {
    try {
      const parsed = JSON.parse(this.rawInput);
      this.formattedOutput = JSON.stringify(parsed); // Minified output
    } catch (error:any) {
      this.formattedOutput = 'Invalid JSON: ' + error.message;
    }
  }


  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      this.toast.success('JSON copied successfully !')
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}
