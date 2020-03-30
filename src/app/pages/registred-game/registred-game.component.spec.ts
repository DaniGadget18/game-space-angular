import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistredGameComponent } from './registred-game.component';

describe('RegistredGameComponent', () => {
  let component: RegistredGameComponent;
  let fixture: ComponentFixture<RegistredGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistredGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistredGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
