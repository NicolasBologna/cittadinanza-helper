import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-graph-document',
  templateUrl: './graph-document.component.html',
  styleUrls: ['./graph-document.component.scss'],
})
export class GraphDocumentComponent {
  @Input() documents: WritableSignal<string[]> = signal([]);
  @Input() visible: WritableSignal<boolean> = signal(false);
}
