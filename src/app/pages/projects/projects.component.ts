import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectCardComponent, NgFor]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Weather App',
      Description: 'Weather App built using TypeScript, Angular, Tailwind.css, Preline UI, RxJS, Jasmine and Karma.',
      image: '../../../assets/card/card-angular.svg',
      linkText: 'Link to GitHub repository',
      link: 'https://github.com/reed756/weather-dashboard'
    },
    {
      title: 'Primate',
      Description: 'This is a Demo Mobile app that helps nature enthusiasts find primates. Built using Ionic, Angular, TypeScript, Firebase and Capacitor. Also utilises mapbox.gl api for the home map screen',
      image: '../../../assets/card/card-angular.svg',
      linkText: 'Link to GitHub repository',
      link: 'https://github.com/reed756/primate'
    },
    {
      title: 'UniTaskr',
      Description: 'App for ios, android and web that connects businesses with a workforce of students. Front end built using TypeScript, HTML, Scss, Angular, Firebase, and Capacitor.',
      image: '../../../assets/card/card-angular.svg',
      linkText: 'Link to UniTaskr web application',
      link: 'https://web.unitaskr.com/landing'
    },
    {
      title: 'Herd',
      Description: 'Mobile App for music lovers to find local gigs and also chat. Built using Serverless Framework, AWS, Lambda, DynamoDB, SES, Amplify, Cognito, Cloudformation, React Native, Typescript, Node.js.',
      image: '../../../assets/card/card-angular.svg',
      linkText: 'Link to GitHub repository',
      link: 'https://github.com/reed756/ReactNativeTypeScript'
    },
    {
      title: 'NC News',
      Description: 'News article site built using JavaScript, Node.js, React.js, Express.js and PostgreSQL. Also followed TDD principles and used Jest for testing both frontend and backend. Front End UI hosted on Netlify and Backend API hosted on Render.',
      image: '../../../assets/card/card-angular.svg',
      linkText: 'Link to GitHub repository',
      link: 'https://github.com/reed756/nc-news'
    }
  ];
}
