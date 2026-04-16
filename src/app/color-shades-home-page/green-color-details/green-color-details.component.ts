import { Component } from '@angular/core';

@Component({
  selector: 'app-green-color-details',
  templateUrl: './green-color-details.component.html',
  styleUrls: ['./green-color-details.component.scss']
})
export class GreenColorDetailsComponent {



shadesOfGreen: any[] = [
  {"name": "Dark Green", "hex": "#006400"},
  {"name": "Green", "hex": "#008000"},
  {"name": "Forest Green", "hex": "#228B22"},
  {"name": "Lime Green", "hex": "#32CD32"},
  {"name": "Lime", "hex": "#00FF00"},
  {"name": "Light Green", "hex": "#90EE90"},
  {"name": "Pale Green", "hex": "#98FB98"},
  {"name": "Spring Green", "hex": "#00FF7F"},
  {"name": "Medium Spring Green", "hex": "#00FA9A"},
  {"name": "Sea Green", "hex": "#2E8B57"},
  {"name": "Medium Sea Green", "hex": "#3CB371"},
  {"name": "Dark Sea Green", "hex": "#8FBC8F"},
  {"name": "Olive", "hex": "#808000"},
  {"name": "Olive Drab", "hex": "#6B8E23"},
  {"name": "Yellow Green", "hex": "#9ACD32"},
  {"name": "Chartreuse", "hex": "#7FFF00"},
  {"name": "Green Yellow", "hex": "#ADFF2F"},
  {"name": "Mint Cream", "hex": "#F5FFFA"},
  {"name": "Honeydew", "hex": "#F0FFF0"},
  {"name": "Dark Olive Green", "hex": "#556B2F"}
];


  copiedColorShade:any
  copyHex(hex: string) {
    navigator.clipboard.writeText(hex).then(() => {
      this.copiedColorShade = hex;

      setTimeout(() => {
        this.copiedColorShade = null;
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

}
