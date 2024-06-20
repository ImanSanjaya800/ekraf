import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterBioPage } from './register-bio.page';

describe('RegisterBioPage', () => {
  let component: RegisterBioPage;
  let fixture: ComponentFixture<RegisterBioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
