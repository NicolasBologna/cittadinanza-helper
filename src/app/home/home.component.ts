import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Ciudadanía Italiana';
  description = `Acá vas a encontrar toda la información útil para tramitar tu ciudadanía italiana`;
}
