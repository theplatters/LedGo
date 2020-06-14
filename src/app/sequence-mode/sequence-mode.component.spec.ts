import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceModeComponent } from './sequence-mode.component';

describe('SequenceModeComponent', () => {
  let component: SequenceModeComponent;
  let fixture: ComponentFixture<SequenceModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
