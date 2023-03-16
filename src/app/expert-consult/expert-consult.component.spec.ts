import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertConsultComponent } from './expert-consult.component';

describe('ExpertConsultComponent', () => {
  let component: ExpertConsultComponent;
  let fixture: ComponentFixture<ExpertConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
