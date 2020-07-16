import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMusicPlayerSettingsComponent } from './web-music-player-settings.component';

describe('WebMusicPlayerSettingsComponent', () => {
  let component: WebMusicPlayerSettingsComponent;
  let fixture: ComponentFixture<WebMusicPlayerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMusicPlayerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMusicPlayerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
