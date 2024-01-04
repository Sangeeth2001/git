import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcmpnyComponent } from './addcmpny.component';

describe('AddcmpnyComponent', () => {
  let component: AddcmpnyComponent;
  let fixture: ComponentFixture<AddcmpnyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcmpnyComponent]
    });
    fixture = TestBed.createComponent(AddcmpnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
