import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsBeginComponent } from './lets-begin.component';

describe('LetsBeginComponent', () => {
  let component: LetsBeginComponent;
  let fixture: ComponentFixture<LetsBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsBeginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
