import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-responsive',
  imports: [],
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
