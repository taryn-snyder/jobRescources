import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimCardComponent } from './tim-card.component';

describe('TimCardComponent', () => {
  let component: TimCardComponent;
  let fixture: ComponentFixture<TimCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
