import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer1Component } from './observer1.component';

describe('Observer1Component', () => {
  let component: Observer1Component;
  let fixture: ComponentFixture<Observer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
