import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    RouterOutlet,
    RouterLink,
    NavComponent,
    RouterLinkActive
  ],
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Projects', route: '/projects' }
  ]

  @ViewChild(MatSidenav) snav!: MatSidenav;

  isDarkTheme: boolean = true;
  direction: Direction | "auto" = "ltr";

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    const darkModeMatcher = media.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkTheme = darkModeMatcher.matches ? true : false;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  close() {
    if (this.mobileQuery.matches) {
      this.snav.close();
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection() {
    this.direction = this.direction === "ltr" ? "rtl" : "ltr";
  }
}
