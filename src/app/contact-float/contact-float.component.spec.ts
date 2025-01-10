import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFloatComponent } from './contact-float.component';

describe('ContactFloatComponent', () => {
  let component: ContactFloatComponent;
  let fixture: ComponentFixture<ContactFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFloatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
