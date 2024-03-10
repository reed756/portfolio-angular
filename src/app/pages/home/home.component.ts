import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NgFor } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MaterialModule, FontAwesomeModule, NgFor, NgParticlesModule]
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  techStack = [
    {
      src: '../../../assets/tech-stack/angular.png',
      alt: 'A picture of the Angular logo.'
    },
    {
      src: '../../../assets/tech-stack/typescript.png',
      alt: 'A picture of the TypeScript logo.'
    },
    {
      src: '../../../assets/tech-stack/rxjs-logo.png',
      alt: 'A picture of the RxJS logo.'
    },
    {
      src: '../../../assets/tech-stack/nodejs.jpg',
      alt: 'A picture of the nodejs logo.'
    }
  ]

}
