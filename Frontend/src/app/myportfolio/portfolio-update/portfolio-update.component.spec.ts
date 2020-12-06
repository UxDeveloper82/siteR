import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUpdateComponent } from './portfolio-update.component';

describe('PortfolioUpdateComponent', () => {
  let component: PortfolioUpdateComponent;
  let fixture: ComponentFixture<PortfolioUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
