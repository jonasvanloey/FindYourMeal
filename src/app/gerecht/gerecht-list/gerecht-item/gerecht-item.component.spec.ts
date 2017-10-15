import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerechtItemComponent } from './gerecht-item.component';

describe('GerechtItemComponent', () => {
  let component: GerechtItemComponent;
  let fixture: ComponentFixture<GerechtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerechtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerechtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
