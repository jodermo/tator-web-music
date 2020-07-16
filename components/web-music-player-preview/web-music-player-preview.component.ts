import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../tator-core/services/app.service';

@Component({
  selector: 'app-web-music-player-preview',
  templateUrl: './web-music-player-preview.component.html',
  styleUrls: ['./web-music-player-preview.component.scss']
})
export class WebMusicPlayerPreviewComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit(): void {
  }

}
