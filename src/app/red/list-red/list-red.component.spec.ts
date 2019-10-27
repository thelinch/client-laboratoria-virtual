import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRedComponent } from './list-red.component';

describe('ListRedComponent', () => {
  let component: ListRedComponent;
  let fixture: ComponentFixture<ListRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
