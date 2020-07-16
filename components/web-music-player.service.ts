import { Injectable } from '@angular/core';
import { AppService } from '../../tator-core/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class WebMusicPlayerService {

  currentTrack = null;
  currentPlaylist = null;
  playLists = [];
  apiTypes = ['soundcloud', 'youtube', 'vimeo', 'jamendo'];

  constructor(private app: AppService) {
    this.app.data.loadTable('api', () => {
      this.app.data.loadTable('music-playlist-api', () => {
        this.app.data.loadTable('music-playlist-entry',  () => {
          this.app.data.loadTable('music-playlist', (result) => {
            this.playLists = result;
          });
        });
      });
    });
  }

  play(track = this.currentTrack) {


  }

  setCurrentTime(time: number = 0) {

  }

  pause() {

  }

  stop() {
    this.pause();
    this.setCurrentTime(0);
  }

  replay() {
    this.setCurrentTime(0);
    this.play();
  }

  prev() {
    this.play(this.prevTrack());
  }

  next() {
    this.play(this.nextTrack());
  }

  prevTrack() {
    if ((!this.currentTrack && this.currentPlaylist.length) ||
      (this.currentTrack && this.currentPlaylist[0] === this.currentTrack)) {
      return this.currentPlaylist[this.currentPlaylist.length - 1];
    }
    for (let i = 0; i < this.currentPlaylist.length; i++) {
      if (this.currentPlaylist[i] === this.currentTrack) {
        return this.currentPlaylist[i - 1];
      }
    }
  }

  nextTrack() {
    if ((!this.currentTrack && this.currentPlaylist.length) ||
      (this.currentTrack && this.currentPlaylist.length && this.currentPlaylist[this.currentPlaylist.length - 1] === this.currentTrack)) {
      return this.currentPlaylist[0];
    }
    for (let i = 0; i < this.currentPlaylist.length; i++) {
      if (this.currentPlaylist[i] === this.currentTrack) {
        return this.currentPlaylist[i + 1];
      }
    }
  }

  addTrackToPlaylist(track, playlist){

  }

  appApis() {
    return this.app.data.table('api').filter(api => {
      for (const type of this.apiTypes) {
        if (api.type === type) {
          return true;
        }
      }
      return false;
    });
  }

  appApiById(id: any) {
    return this.appApis().filter(api => {
      return api.id === parseInt(id);
    })[0] || null;
  }

  playerApis() {
    return this.app.data.table('music-playlist-api')|| [];
  }


}
