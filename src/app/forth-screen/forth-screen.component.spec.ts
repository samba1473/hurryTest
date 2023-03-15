import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthScreenComponent } from './forth-screen.component';

describe('ForthScreenComponent', () => {
  let component: ForthScreenComponent;
  let fixture: ComponentFixture<ForthScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
