import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizzesComponent } from './addquizzes.component';

describe('AddquizzesComponent', () => {
  let component: AddquizzesComponent;
  let fixture: ComponentFixture<AddquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
