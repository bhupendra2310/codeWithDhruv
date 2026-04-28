import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-home-page',
  templateUrl: './projects-home-page.component.html',
  styleUrls: ['./projects-home-page.component.scss']
})
export class ProjectsHomePageComponent {


  projects = [
    {
      title: 'HTML CSS Calculator',
      description: 'Build a calculator using pure HTML and CSS.',
      image: 'assets/projects/img.png',
      demo: '#',
      route: '/calculator'
    },
    {
      title: 'Weather App',
      description: 'Live weather app using API integration.',
      image: 'assets/test.png',
      demo: '#',
      route: 'weather-app'
    },
    {
      title: 'Digital Clock',
      description: 'Real-time clock using JavaScript.',
      image: 'assets/projects/clock.png',
      demo: '#',
      route: '/digital-clock',
    }
  ];
}
