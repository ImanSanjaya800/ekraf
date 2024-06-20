import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterEkrafPage } from './register-ekraf.page';

describe('RegisterEkrafPage', () => {
  let component: RegisterEkrafPage;
  let fixture: ComponentFixture<RegisterEkrafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEkrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
