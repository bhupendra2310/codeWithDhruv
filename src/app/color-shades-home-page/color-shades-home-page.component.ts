import { Component } from '@angular/core';

@Component({
  selector: 'app-color-shades-home-page',
  templateUrl: './color-shades-home-page.component.html',
  styleUrls: ['./color-shades-home-page.component.scss']
})
export class ColorShadesHomePageComponent {



  listOfShades=[
{
  "name": "Shades of Red",
 "image": "assets/red-image.jpg"
 ,"routes":"/red-color-shades"
},
{"name": "Shades of Yellow",
     "image": "assets/shades-of-yellow.png",
      "routes":"/yellow-color-shades"
},

{"name": "Shades of Pink",
     "image": "assets/shades-of-pink.png",
      "routes":"/pink-color-shades"
},
{"name": "Shades of Green ",
     "image": "assets/shades-of-green.png",
      "routes":"/green-color-shades"
},

  ]
}
