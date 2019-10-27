import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRedComponent } from './new-red.component';

describe('NewRedComponent', () => {
  let component: NewRedComponent;
  let fixture: ComponentFixture<NewRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
