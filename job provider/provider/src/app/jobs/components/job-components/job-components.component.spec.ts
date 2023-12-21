import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponentsComponent } from './job-components.component';

describe('JobComponentsComponent', () => {
  let component: JobComponentsComponent;
  let fixture: ComponentFixture<JobComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobComponentsComponent]
    });
    fixture = TestBed.createComponent(JobComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
