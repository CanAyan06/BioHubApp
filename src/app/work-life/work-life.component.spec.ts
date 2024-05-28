import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLifeComponent } from './work-life.component';

describe('WorkLifeComponent', () => {
  let component: WorkLifeComponent;
  let fixture: ComponentFixture<WorkLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
