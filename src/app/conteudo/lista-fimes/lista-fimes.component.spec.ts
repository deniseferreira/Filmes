import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFimesComponent } from './lista-fimes.component';

describe('ListaFimesComponent', () => {
  let component: ListaFimesComponent;
  let fixture: ComponentFixture<ListaFimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
