import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {

  features = [
    {
      title: "Curated Resources & Questions",
      description: "Explore a carefully curated collection of high-quality frontend interview questions and learning resources. Each topic is selected from trusted sources to help you prepare efficiently and stay focused on what actually matters in interviews.",
      id:1
    },
    {
      title: "Covers All Type of Content",
      description: "Get complete coverage of all major frontend interview stages — including JavaScript fundamentals, coding challenges, practical projects, and system design concepts — all in one place.",
      id:2
    },
    {
      title: "Frontend-Focused Topics",
      description: "Focus only on essential frontend development topics such as HTML, CSS, JavaScript, UI components, and real-world projects. No unnecessary content — just what you need to crack frontend interviews faster.",
      id:3
    },
    {
      title: "No Login Required",
      description: "Start learning instantly without creating an account. All tools, projects, and interview preparation materials are freely accessible, saving your time and making the learning process smooth and hassle-free.",
      id:4
    },

  ];
}
