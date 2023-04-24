import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistterationPageComponent } from './registteration-page.component';

describe('RegistterationPageComponent', () => {
  let component: RegistterationPageComponent;
  let fixture: ComponentFixture<RegistterationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistterationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistterationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
