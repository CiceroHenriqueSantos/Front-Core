import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavflowComponent } from './navflow.component';

describe('NavflowComponent', () => {
  let component: NavflowComponent;
  let fixture: ComponentFixture<NavflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
