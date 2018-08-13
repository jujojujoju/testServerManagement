import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasComponent } from './tas.component';

describe('TasComponent', () => {
  let component: TasComponent;
  let fixture: ComponentFixture<TasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
