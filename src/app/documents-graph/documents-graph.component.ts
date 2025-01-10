import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Member } from '../models/member';

@Component({
  selector: 'app-documents-graph',
  imports: [CommonModule],
  templateUrl: './documents-graph.component.html',
  styleUrl: './documents-graph.component.scss',
})
export class DocumentsGraphComponent {
  selectedMember = signal<Member | null>(null);

  familyTree = [
    {
      name: 'AVO (Ascendente Italiano)',
      relation: 'Tatarabuelo o Bisabuelo',
      documents: [
        'Acta de Nacimiento',
        'Certificado de Matrimonio',
        'Certificado de Defunción',
        'Certificado de No Naturalización',
      ],
    },
    {
      name: 'Padre/Madre',
      relation: 'Padre o Madre',
      documents: [
        'Acta de Nacimiento',
        'Certificado de Matrimonio',
        'Certificado de Defunción',
      ],
    },
    {
      name: 'Abuelo/Abuela',
      relation: 'Abuelo o Abuela',
      documents: [
        'Acta de Nacimiento',
        'Certificado de Matrimonio',
        'Certificado de Defunción',
      ],
    },
    {
      name: 'Tú',
      relation: 'Solicitante',
      documents: ['Acta de Nacimiento', 'Documento de Identidad'],
    },
  ];

  selectMember(member: any) {
    this.selectedMember.set(member);
  }
}
