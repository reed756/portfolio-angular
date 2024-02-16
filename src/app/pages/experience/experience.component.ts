import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  panelOpenState = false;

  jobs = [
    {
      title: 'Web Developer (Angular|TypeScript|SQL|Node.js|NgRx)',
      company: 'RADical Systems (UK) Limited',
      startEndDate: 'Oct 2023 – Present',
      description: [
        'Built a new basket whilst working on the new customer portal.',
        'Challenges included raising knowledge of SQL so that I could work on procedures used within the application. I did this by utilising PluralSight to take courses on SQL.',
        'This allowed me to be an asset to the team more quickly as well as participate in code reviews and testing.'
      ]
    },
    {
      title: 'Junior Front End Developer (Angular|TypeScript|Ionic|RxJS|Firebase)',
      company: 'UniTaskr',
      startEndDate: 'Mar 2022 – Jun 2023 (1 yr 4 mos)',
      description: [
        'Learned the Angular and Ionic framework to build front end pages and components during release of new app for ios, Android and web in the first 6 months.',
        'Learned Firebase Functions and chart.js to build a dashboard to show login/register statistics to the founders of the business.',
        'Built the front end components for business and student subscription models to help increase revenue for the task board within the app by over 100%.'
      ]
    },
    {
      title: 'Fulltime Student (JavaScript|React|Node.js|Express)',
      company: 'Northcoders',
      startEndDate: 'Nov 2021 – Mar 2022 (5 mos)',
      description: [
        'Built both a UI and an API for a news article site using JavaScript, React, Node.js and Express. ',
        'Learnt React Native and TypeScript to collaborate on a mobile app for a group project.',
        'Best practices taught throughout, including version control with git, TDD and pair programming.'
      ]
    },
    {
      title: 'Customer Service / Collections Associate',
      company: 'Salary Finance',
      startEndDate: 'May 2019 – May 2021 (2 yrs 1 mo)',
      description: [

      ]
    },
    {
      title: 'Customer Account Agent',
      company: 'Fredrickson',
      startEndDate: 'Jun 2017 – Oct 2018 (1 yr 5 mos)',
      description: [

      ]
    },
    {
      title: 'General Assistant',
      company: "Sainsbury's",
      startEndDate: 'Mar 2016 – Jun 2017 (1 yr 4 mos)',
      description: [

      ]
    },
    {
      title: 'Bar Associate',
      company: "Compass Group",
      startEndDate: 'Oct 2014 – Oct 2015 (1 yr 1 mo)',
      description: [

      ]
    },
    {
      title: 'Store Operative',
      company: "Marks and Spencer",
      startEndDate: 'Jun 2011 – Sep 2013 (2 yrs 4 mos)',
      description: [

      ]
    },
    {
      title: 'General Assistant',
      company: "Sainsbury's",
      startEndDate: 'Aug 2010 – Jun 2011 (11 mos)',
      description: [

      ]
    },
  ]
}
