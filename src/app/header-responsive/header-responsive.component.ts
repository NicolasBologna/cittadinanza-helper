import { Component, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-responsive',
  imports: [MatTooltipModule, RouterLink, RouterLinkActive],
  templateUrl: './header-responsive.component.html',
  styleUrl: './header-responsive.component.scss',
})
export class HeaderResponsiveComponent {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((menu) => !menu);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
