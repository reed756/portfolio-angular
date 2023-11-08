import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class NavComponent {
  @Output() toggleSidenav = new EventEmitter();
  @Input() isMobile!: boolean;
}
