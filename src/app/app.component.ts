import { Component } from '@angular/core';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { Title } from '@angular/platform-browser';
import { FloatingFooterComponent } from './floating-footer/floating-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [
    EligibilityCalculatorComponent,
    FloatingFooterComponent,
    AppHeaderComponent,
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
