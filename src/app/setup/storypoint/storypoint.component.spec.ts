import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorypointComponent } from './storypoint.component';

describe('StorypointComponent', () => {
  let component: StorypointComponent;
  let fixture: ComponentFixture<StorypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
