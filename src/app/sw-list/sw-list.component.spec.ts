import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwListComponent } from './sw-list.component';

describe('SwListComponent', () => {
  let component: SwListComponent;
  let fixture: ComponentFixture<SwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
