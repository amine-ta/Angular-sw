import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSwComponent } from './detail-sw.component';

describe('DetailSwComponent', () => {
  let component: DetailSwComponent;
  let fixture: ComponentFixture<DetailSwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
