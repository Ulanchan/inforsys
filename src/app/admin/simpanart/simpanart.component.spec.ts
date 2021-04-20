import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpanartComponent } from './simpanart.component';

describe('SimpanartComponent', () => {
  let component: SimpanartComponent;
  let fixture: ComponentFixture<SimpanartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpanartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpanartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
