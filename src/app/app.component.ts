import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FloatingFooterComponent } from './floating-footer/floating-footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderResponsiveComponent } from './header-responsive/header-responsive.component';
import { ContactFloatComponent } from './contact-float/contact-float.component';

@Component({
  selector: 'app-root',
  imports: [
    FloatingFooterComponent,
    RouterOutlet,
    HeaderResponsiveComponent,
    HeaderResponsiveComponent,
    ContactFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Ciudadanía Italiana');
  }
  title = 'cittadinanza-helper';
}
