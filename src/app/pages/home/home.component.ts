import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class HomeComponent {

}
