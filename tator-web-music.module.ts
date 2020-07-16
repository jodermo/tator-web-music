import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TatorCoreModule } from '../tator-core/tator-core.module';
import { TatorMailModule } from '../tator-mail/tator-mail.module';
import { WebMusicPlayerComponent } from './components/web-music-player.component';
import { WebMusicPlayerPreviewComponent } from './components/web-music-player-preview/web-music-player-preview.component';
import { WebMusicPlayerSettingsComponent } from './components/web-music-player-settings/web-music-player-settings.component';
import { WebMusicPlayerService } from './components/web-music-player.service';

@NgModule({
  declarations: [
    WebMusicPlayerComponent,
    WebMusicPlayerPreviewComponent,
    WebMusicPlayerSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TatorCoreModule,
    TatorMailModule
  ],
  providers: [
    WebMusicPlayerService
  ],
  exports: [
    WebMusicPlayerComponent,
    WebMusicPlayerPreviewComponent,
    WebMusicPlayerSettingsComponent
  ]
})
export class TatorWebMusicModule {
}
