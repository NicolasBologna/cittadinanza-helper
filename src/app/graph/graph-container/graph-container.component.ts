import { Component, signal } from '@angular/core';
import { GraphItemComponent } from '../graph-item/graph-item.component';

@Component({
  selector: 'app-graph-container',
  imports: [GraphItemComponent],
  templateUrl: './graph-container.component.html',
  styleUrl: './graph-container.component.scss',
})
export class GraphContainerComponent {
  documentsAvo = signal([
    'Acta de nacimiento',
    'Certificado de matrimonio',
    'Certificado de defunción',
    'Certificado de no naturalización',
  ]);
  documentsAbuelo = signal([
    'Acta de nacimiento',
    'Certificado de matrimonio',
    'Certificado de defunción',
  ]);
  documentsPadre = signal(['Acta de nacimiento']);
  documentsSolicitante = signal(['Acta de nacimiento', 'DNI']);
  documentsMiguel = signal(['Acta de nacimiento']);
  documentsAaron = signal(['Acta de nacimiento']);
}
