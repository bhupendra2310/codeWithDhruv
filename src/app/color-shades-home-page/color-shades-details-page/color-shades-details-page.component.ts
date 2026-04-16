import { Component } from '@angular/core';

@Component({
  selector: 'app-color-shades-details-page',
  templateUrl: './color-shades-details-page.component.html',
  styleUrls: ['./color-shades-details-page.component.scss']
})
export class ColorShadesDetailsPageComponent {




  shadesOfYellow: any[] = [
    {"name": "Dark Khaki", "hex": "#BDB76B"},
    {"name": "Yellow", "hex": "#FFFF00"},
    {"name": "Gold", "hex": "#FFD700"},
    {"name": "Goldenrod", "hex": "#DAA520"},
    {"name": "Dark Goldenrod", "hex": "#B8860B"},
    {"name": "Orange Yellow", "hex": "#F8D568"},
    {"name": "Mustard", "hex": "#FFDB58"},
    {"name": "Saffron", "hex": "#F4C430"},
    {"name": "Amber", "hex": "#FFBF00"},
    {"name": "Honey Yellow", "hex": "#FFC30B"},
    {"name": "Canary Yellow", "hex": "#FFEF00"},
    {"name": "Banana Yellow", "hex": "#FFE135"},
    {"name": "Light Yellow", "hex": "#FFFFE0"},
    {"name": "Lemon Chiffon", "hex": "#FFFACD"},
    {"name": "Light Goldenrod Yellow", "hex": "#FAFAD2"},
    {"name": "Papaya Whip", "hex": "#FFEFD5"},
    {"name": "Moccasin", "hex": "#FFE4B5"},
    {"name": "Peach Puff", "hex": "#FFDAB9"},
    {"name": "Pale Goldenrod", "hex": "#EEE8AA"},
    {"name": "Khaki", "hex": "#F0E68C"},

  ]


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
