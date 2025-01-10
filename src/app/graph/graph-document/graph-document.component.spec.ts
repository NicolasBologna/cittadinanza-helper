import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDocumentComponent } from './graph-document.component';

describe('GraphDocumentComponent', () => {
  let component: GraphDocumentComponent;
  let fixture: ComponentFixture<GraphDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
