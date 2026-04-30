import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-home-page',
  templateUrl: './tools-home-page.component.html',
  styleUrls: ['./tools-home-page.component.scss']
})
export class ToolsHomePageComponent {


  tools = [

    {
      name:'CSS',
      title:'Box Shadow Generator',
      subtitle:'Use modern CSS box shadow effects with live preview and copy ready-to-use code.',
      route:'/box-shadow',
      image:'assets/tools/box-shadow-preview.png'
    },

    {
      name:'CSS',
      title:'Border Radius Generator',
      subtitle:'Generate custom border radius styles and copy clean CSS instantly.',
      route:'/box-radius-generator',
      image:'assets/tools/border-radius-preview.png'
    },

    {
      name:'CSS',
      title:'CSS Button Generator',
      subtitle:'Build stylish buttons with custom colors, spacing and border radius.',
      route:'/css-button-generator',
      image:'assets/tools/button-generator-preview.png'
    },
    {
      name:'JSON',
      title:'JSON Formatter Tool',
      subtitle:'Format, validate and beautify JSON data instantly with this free tool.',
      route:'/tools/json-formator',
      image:'assets/tools/json-preview.png'
    },
    {
      name:'Color Shades',
      title:'Color Shades',
      subtitle:'Get unique and different different type of color shades.',
      route:'/color-shades',
      image:'assets/tools/json-preview.png'
    },
    {
      name:'Color Picker',
      title:'Color Picker',
      subtitle:'Generate & get unique color HEX code and RGB code to use in your UI.',
      route:'/color-picker',
      image:'assets/tools/json-preview.png'
    },

  ];
}
