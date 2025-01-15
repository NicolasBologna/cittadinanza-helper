import { Routes } from '@angular/router';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { DocumentsGraphComponent } from './documents-graph/documents-graph.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eligibility', component: EligibilityCalculatorComponent },
  { path: 'documents-graph', component: DocumentsGraphComponent },
];
