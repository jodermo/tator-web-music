import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMusicPlayerPreviewComponent } from './web-music-player-preview.component';

describe('WebMusicPlayerPreviewComponent', () => {
  let component: WebMusicPlayerPreviewComponent;
  let fixture: ComponentFixture<WebMusicPlayerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMusicPlayerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMusicPlayerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
