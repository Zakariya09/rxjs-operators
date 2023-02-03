import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeObservableComponent } from './unsubscribe-observable.component';

describe('UnsubscribeObservableComponent', () => {
  let component: UnsubscribeObservableComponent;
  let fixture: ComponentFixture<UnsubscribeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
