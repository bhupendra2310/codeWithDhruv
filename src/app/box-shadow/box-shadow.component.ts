import { Component } from '@angular/core';

@Component({
  selector: 'app-box-shadow',
  templateUrl: './box-shadow.component.html',
  styleUrls: ['./box-shadow.component.scss']
})
export class BoxShadowComponent {
BoxShadowData: any[] = [
  { name: 'Soft Shadow', css: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' },
  { name: 'Light Shadow', css: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' },
  { name: 'Inset Shadow', css: 'inset 0 1px 3px rgba(0,0,0,0.12)' },
  { name: 'Hover Lift', css: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' },
  { name: 'Deep Shadow', css: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' },
  { name: 'Glow Shadow', css: '0 0 20px rgba(0, 123, 255, 0.4)' },
  { name: 'Spread Shadow', css: '0 0 0 4px rgba(0,0,0,0.1)' },
  { name: 'Flat Shadow', css: '0 2px 2px rgba(0,0,0,0.1)' },
  { name: 'Bold Shadow', css: '0 5px 15px rgba(0,0,0,0.3)' },
  { name: 'Sharp Shadow', css: '0 8px 10px -5px rgba(0,0,0,0.2)' },
  { name: 'Classic Shadow', css: '0 4px 6px rgba(0,0,0,0.1)' },
  { name: 'Glow Border', css: '0 0 10px rgba(255, 0, 0, 0.3)' }
];
copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

}
