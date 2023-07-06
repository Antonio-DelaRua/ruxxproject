import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewikiComponent } from './homewiki.component';

describe('HomewikiComponent', () => {
  let component: HomewikiComponent;
  let fixture: ComponentFixture<HomewikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomewikiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomewikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
