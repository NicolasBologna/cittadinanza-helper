import { Routes } from '@angular/router';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { DocumentsGraphComponent } from './documents-graph/documents-graph.component';

export const routes: Routes = [
  { path: '', component: EligibilityCalculatorComponent },
  { path: 'documents-graph', component: DocumentsGraphComponent },
];
