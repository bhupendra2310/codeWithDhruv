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
      // this.formattedOutput = `Invalid JSON: ${e.message}`;
      this.toast.error(e.message);
    }
  }

  minifyJson() {
    try {
      const parsed = JSON.parse(this.rawInput);
      this.formattedOutput = JSON.stringify(parsed); // Minified output
    } catch (error:any) {
      // this.formattedOutput = 'Invalid JSON: ' + error.message;
      this.toast.error(error.message);
    }
  }


  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      this.toast.success('JSON copied successfully !')
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }


  data = {
    "students": [
      { "firstName": "ram", "lastName": "Das" },
      { "firstName": "John", "lastName": "Smith" },
      { "firstName": "Peter", "lastName": "nick" }
    ]
  };


  activeIndex: number | null = null;

  faqs = [
    {
      question: 'What is JSON ?',
      answer: 'JavaScript Object Notation (JSON) is an open data interchange format that is both human and machine-readable. JSON is often used when data is sent from a server to a web page'
    },
    {
      question: 'Why should I use a JSON formatter?',
      answer: 'A JSON formatter helps organize messy data into a clean, readable format, making it easier to understand and debug.'
    },
    {
      question: 'Is this JSON formatter tool free to use?',
      answer: 'Yes, the tool is completely free and lets you format, view, and validate JSON data instantly without any signup.'
    },
    {
      question: 'Can a JSON formatter detect errors?',
      answer: 'It can quickly spot syntax errors in your JSON, so you can fix issues without wasting time.'
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
