import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class ProjectCardComponent {

  @Input() project: any;
}
