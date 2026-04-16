import { Component } from '@angular/core';

@Component({
  selector: 'app-pink-color-details',
  templateUrl: './pink-color-details.component.html',
  styleUrls: ['./pink-color-details.component.scss']
})
export class PinkColorDetailsComponent {

shadesOfPink: any[] = [
  {"name": "Pink", "hex": "#FFC0CB"},
  {"name": "Light Pink", "hex": "#FFB6C1"},
  {"name": "Hot Pink", "hex": "#FF69B4"},
  {"name": "Deep Pink", "hex": "#FF1493"},
  {"name": "Pale Violet Red", "hex": "#DB7093"},
  {"name": "Medium Violet Red", "hex": "#C71585"},
  {"name": "Lavender Blush", "hex": "#FFF0F5"},
  {"name": "Misty Rose", "hex": "#FFE4E1"},
  {"name": "Light Rose", "hex": "#FFD1DC"},
  {"name": "Rose Pink", "hex": "#FF66CC"},
  {"name": "Bubblegum Pink", "hex": "#FF77FF"},
  {"name": "Carnation Pink", "hex": "#FFA6C9"},
  {"name": "Blush Pink", "hex": "#DE5D83"},
  {"name": "Fuchsia", "hex": "#FF00FF"},
  {"name": "Magenta", "hex": "#FF00FF"},
  {"name": "Orchid", "hex": "#DA70D6"},
  {"name": "Plum", "hex": "#DDA0DD"},
  {"name": "Thistle", "hex": "#D8BFD8"},
  {"name": "Rose", "hex": "#FF007F"},
  {"name": "Baby Pink", "hex": "#F4C2C2"}
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
