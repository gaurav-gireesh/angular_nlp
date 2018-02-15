import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundexComponent } from './soundex.component';

describe('SoundexComponent', () => {
  let component: SoundexComponent;
  let fixture: ComponentFixture<SoundexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
