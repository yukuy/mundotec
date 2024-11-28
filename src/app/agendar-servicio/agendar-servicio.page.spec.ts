import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarServicioPage } from './agendar-servicio.page';

describe('AgendarServicioPage', () => {
  let component: AgendarServicioPage;
  let fixture: ComponentFixture<AgendarServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
