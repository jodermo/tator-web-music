import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMusicPlayerComponent } from './web-music-player.component';

describe('WebMusicPlayerComponent', () => {
  let component: WebMusicPlayerComponent;
  let fixture: ComponentFixture<WebMusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMusicPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
