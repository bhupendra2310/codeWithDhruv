import { Component } from '@angular/core';

@Component({
  selector: 'app-red-color-details',
  templateUrl: './red-color-details.component.html',
  styleUrls: ['./red-color-details.component.scss']
})
export class RedColorDetailsComponent {



  shadesOfRed: any[] = [
  {"name": "Dark Red", "hex": "#8B0000"},
  {"name": "Red", "hex": "#FF0000"},
  {"name": "Firebrick", "hex": "#B22222"},
  {"name": "Crimson", "hex": "#DC143C"},
  {"name": "Indian Red", "hex": "#CD5C5C"},
  {"name": "Light Coral", "hex": "#F08080"},
  {"name": "Salmon", "hex": "#FA8072"},
  {"name": "Dark Salmon", "hex": "#E9967A"},
  {"name": "Light Salmon", "hex": "#FFA07A"},
  {"name": "Tomato", "hex": "#FF6347"},
  {"name": "Orange Red", "hex": "#FF4500"},
  {"name": "Coral", "hex": "#FF7F50"},
  {"name": "Hot Pink", "hex": "#FF69B4"},
  {"name": "Deep Pink", "hex": "#FF1493"},
  {"name": "Pink", "hex": "#FFC0CB"},
  {"name": "Light Pink", "hex": "#FFB6C1"},
  {"name": "Pale Violet Red", "hex": "#DB7093"},
  {"name": "Medium Violet Red", "hex": "#C71585"},
  {"name": "Rosy Brown", "hex": "#BC8F8F"},
  {"name": "Misty Rose", "hex": "#FFE4E1"}
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
