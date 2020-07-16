import { Component, OnInit } from '@angular/core';
import { WebMusicPlayerService } from '../web-music-player.service';
import { AppService } from '../../../tator-core/services/app.service';

@Component({
  selector: 'app-web-music-player-settings',
  templateUrl: './web-music-player-settings.component.html',
  styleUrls: ['./web-music-player-settings.component.scss']
})
export class WebMusicPlayerSettingsComponent implements OnInit {

  updating = false;
  editApi = {
    id: 0,
    apiId: 0
  };


  constructor(public app: AppService, public musicPlayer: WebMusicPlayerService, ) {
  }

  ngOnInit(): void {

  }



  saveApi(api: any) {
    if (!this.updating) {
      this.updating = true;
      if (!api['id']) {
        this.app.data.add('music-playlist-api', api, (result) => {
          this.updating = false;
        });
      } else {
        this.app.data.update('music-playlist-api', parseInt(api['id']), api, (result) => {
          this.updating = false;
        });
      }
    }
  }

  removeApi(api: any) {
    if (confirm(this.app.text('confirm_action'))) {
      if (!this.updating && api['id']) {
        this.updating = true;
        this.app.data.delete('music-playlist-api', parseInt(api['id']), (result) => {
          this.updating = false;
        });
      }
    }
  }
}
