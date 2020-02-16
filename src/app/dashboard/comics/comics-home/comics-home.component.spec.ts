import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsHomeComponent } from './comics-home.component';

describe('ComicsHomeComponent', () => {
  let component: ComicsHomeComponent;
  let fixture: ComponentFixture<ComicsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
