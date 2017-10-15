import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerechtDetailComponent } from './gerecht-detail.component';

describe('GerechtDetailComponent', () => {
  let component: GerechtDetailComponent;
  let fixture: ComponentFixture<GerechtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerechtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerechtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
