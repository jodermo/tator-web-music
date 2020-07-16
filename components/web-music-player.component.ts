import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { WebMusicPlayerService } from './web-music-player.service';
import { MusicPlaylist } from '../api/music-playlist.entity';
import { AppService } from '../../tator-core/services/app.service';

@Component({
  selector: 'app-web-music-player',
  templateUrl: './web-music-player.component.html',
  styleUrls: ['./web-music-player.component.scss'],
})
export class WebMusicPlayerComponent implements OnInit {

  apiSecrets = {
    youtube: {
      apiKey: 'AIzaSyBGU3CoJhMeS7g499E6de1wE8BVfAUyvls',
    },
    soundcloud: {
      clientId: 'ffd6a6e92edd5f8619cb4540688b7925',
    },
    vimeo: {
      token: 'ffd6a6e92edd5f8619cb4540688b7925',
    },
    jamendo: {
      cliendId: '78c9eee4',
    },
  };

  currentPlaylist: MusicPlaylist;

  editPlaylist = false;

  searchSong = false;

  searchInput: string;

  searchResult: any[];


  updating = false;

  searchError = null;

  apiTypes = ['youtube', 'soundcloud', 'vimeo', 'jamendo'];
  apiTypesActive = ['vimeo'];

  constructor(public app: AppService, public musicPlayer: WebMusicPlayerService, private http: Http) {
  }

  apiTypeActive(type: string) {
    for (const aType of this.apiTypesActive) {
      if (aType === type) {
        return true;
      }
    }
    return false;
  }

  setApiTypeActive(type: string) {
    for (const aType of this.apiTypesActive) {
      if (aType === type) {
        return;
      }
    }
    this.apiTypesActive.push(type);
  }

  setApiTypeInactive(type: string) {
    for (let i = 0; i < this.apiTypesActive.length; i++) {
      if (this.apiTypesActive[i] === type) {
        return this.apiTypesActive.splice(i, 1);
      }
    }
  }

  toggleApiType(type: string) {
    if (!this.apiTypeActive(type)) {
      this.setApiTypeActive(type);
    } else {
      this.setApiTypeInactive(type);
    }
  }

  apis() {
    return this.app.data.table('music-playlist-api');
  }

  ngOnInit() {
    this.app.data.loadTable('music-playlist');
  }

  newPlaylist() {
    this.currentPlaylist = new MusicPlaylist();
    this.editPlaylist = true;
    this.searchSong = false;
  }

  savePlaylist() {
    if (this.currentPlaylist) {
      this.updating = true;
      if (!this.currentPlaylist.id) {
        this.app.data.add('music-playlist', this.currentPlaylist, (result) => {
          if (result['id']) {
            this.currentPlaylist = result;
          } else if (result[0] && result[0]['id']) {
            this.currentPlaylist = result[0];
          }
          this.updating = false;
          this.editPlaylist = false;
        });
      } else {
        this.app.data.update('music-playlist', this.currentPlaylist.id, this.currentPlaylist, (result) => {
          if (result['id']) {
            this.currentPlaylist = result;
          } else if (result[0] && result[0]['id']) {
            this.currentPlaylist = result[0];
          }
          this.updating = false;
          this.editPlaylist = false;
        });
      }
    }
  }

  searchForSongs() {
    this.searchResult = [];
    this.searchError = null;
    if (this.searchInput && this.searchInput.length) {
      const query = this.app.helper.slugify(this.searchInput);
      for (const type of this.apiTypesActive) {
        this.getApiData(query, type);
      }
    }
  }

  getApiData(query: string, type: string) {
    if (type === 'youtube') {
      this.getURL('https://www.googleapis.com/youtube/v3/search?key=' + this.apiSecrets.youtube.apiKey + '&part=snippet&maxResults=50&order=date&q=' + query).subscribe(result => {
        this.handleResult(result, type);
      }, error => {
        this.handleError(error, type);
      });
    } else if (type === 'soundcloud') {
      this.getURL('https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=' + this.apiSecrets.soundcloud.clientId + '&q=' + query).subscribe(result => {
        this.handleResult(result, type);
      }, error => {
        this.handleError(error, type);
      });
    } else if (type === 'vimeo') {
      this.getURL('https://api.vimeo.com/videos?query=' + query + '&sort=date&access_token=' + this.apiSecrets.vimeo.token).subscribe(result => {
        this.handleResult(result, type);
      }, error => {
        this.handleError(error, type);
      });
    } else if (type === 'jamendo') {
      this.getURL('https://api.jamendo.com/v3.0/tracks?client_id=' + this.apiSecrets.jamendo.cliendId + '&format=jsonpretty&limit=1&search=' + query).subscribe(result => {
        this.handleResult(result, type);
      }, error => {
        this.handleError(error, type);
      });
    }
  }

  handleResult(result, type) {
    this.searchError = null;
    result = result.json() || result || null;
    if (type === 'vimeo' && result.data) {
      this.addResult(result.data, type);
    }
  }

  addResult(data: any[], type) {
    data.forEach((entry) => {
      this.searchResult.push({
        type,
        data: entry
      });
    });

  }

  handleError(error, type) {
    console.log('searchForSongs error', type, error);
    this.searchError = 'api_error_' + type;
  }


  playlistItems(playlist = this.currentPlaylist) {
    if (playlist && playlist.id) {
      return this.app.data.byValue('music-playlist-entry', 'playlistId', playlist.id);
    }

    return null;
  }


  private getURL(url: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    const options = new RequestOptions({headers: headers});
    return this.http.get(url)
      .map((res: any) => {
        return res;
      })
      .catch(this._handleError);
  }

  private _handleError(error) {
    return throwError(error);
  }

}
