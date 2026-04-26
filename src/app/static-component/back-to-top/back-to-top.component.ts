import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isVisible = scrollPosition > 200;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
