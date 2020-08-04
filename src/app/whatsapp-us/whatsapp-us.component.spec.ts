import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappUsComponent } from './whatsapp-us.component';

describe('WhatsappUsComponent', () => {
  let component: WhatsappUsComponent;
  let fixture: ComponentFixture<WhatsappUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
