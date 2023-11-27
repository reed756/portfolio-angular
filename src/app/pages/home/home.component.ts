import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MaterialModule, FontAwesomeModule, NgFor]
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
    }
  ]

}
