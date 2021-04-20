import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesancComponent } from './pesanc.component';

describe('PesancComponent', () => {
  let component: PesancComponent;
  let fixture: ComponentFixture<PesancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
