import {
  Component,
  Input,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { GraphDocumentComponent } from '../graph-document/graph-document.component';

@Component({
  selector: 'app-graph-item',
  imports: [GraphDocumentComponent],
  templateUrl: './graph-item.component.html',
  styleUrl: './graph-item.component.scss',
})
export class GraphItemComponent {
  @Input() name!: string;
  @Input() title!: string;
  @Input() documents!: WritableSignal<string[]>;

  documentsVisible = signal(false);

  toggleBubbles() {
    this.documentsVisible.update((visible) => !visible);
  }
}
