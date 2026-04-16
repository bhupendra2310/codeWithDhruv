import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  ngOnInit() {
    const picker: any = document.getElementById('picker');
    const hexOutput: any = document.getElementById('hexOutput');
    const rgbOutput: any = document.getElementById('rgbOutput');
    const preview: any = document.getElementById('colorPreview');
    const copyHexBtn: any = document.getElementById('copyHex');
    const copyRgbBtn: any = document.getElementById('copyRgb');
    const copyMsg: any = document.getElementById('copyMsg');

    let currentHex = '#000000';
    let currentRgb = 'rgb(0, 0, 0)';

    picker.addEventListener('input', (event: any) => {
      const hex = event.target.value;

      const r = parseInt(hex.substr(1, 2), 16);
      const g = parseInt(hex.substr(3, 2), 16);
      const b = parseInt(hex.substr(5, 2), 16);
      const rgb = `rgb(${r}, ${g}, ${b})`;

      currentHex = hex;
      currentRgb = rgb;

      hexOutput.textContent = hex;
      rgbOutput.textContent = rgb;
      preview.style.backgroundColor = hex;
    });

    function copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
      copyMsg.textContent = `Copied: ${text} `;
      setTimeout(() => copyMsg.textContent = '', 1500);
    }

    copyHexBtn.addEventListener('click', () => {
      copyToClipboard(currentHex);
    });

    copyRgbBtn.addEventListener('click', () => {
      copyToClipboard(currentRgb);
    });
  }

}
