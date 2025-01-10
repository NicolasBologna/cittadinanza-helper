import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-float',
  templateUrl: './contact-float.component.html',
  styleUrls: ['./contact-float.component.scss'],
})
export class ContactFloatComponent {
  showContactForm = signal(false);

  toggleContactForm() {
    this.showContactForm.update((show) => !show);
  }
}
