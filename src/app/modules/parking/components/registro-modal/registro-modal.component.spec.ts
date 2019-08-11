import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroModalComponent } from './registro-modal.component';

describe('RegistroModalComponent', () => {
  let component: RegistroModalComponent;
  let fixture: ComponentFixture<RegistroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
