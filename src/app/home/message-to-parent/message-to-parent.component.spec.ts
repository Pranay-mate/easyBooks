import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToParentComponent } from './message-to-parent.component';

describe('MessageToParentComponent', () => {
  let component: MessageToParentComponent;
  let fixture: ComponentFixture<MessageToParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageToParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
