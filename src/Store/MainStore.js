/* eslint-disable prettier/prettier */
import { observable, action, makeObservable, configure } from 'mobx';
import Sound from 'react-native-sound';
import { musicList } from '../content/content';
configure({
    enforceActions: 'never',
});

class MainStore {
    @observable activeSongIndex = 0;//this is the song index we will use it for skip song
    @observable activeSong = musicList[this.activeSongIndex];// this take the song's infos from musislist
    @observable song = new Sound(this.activeSong.song, (error) => {
        console.log('duration in seconds: ' + this.song.getDuration());

    }); //define song with an initial value
    @observable isPlaying = false;// check if song is playing
    constructor() {
        makeObservable(this);
    }
    @action setActiveSong(data, i) {
        if (this.isPlaying && this.activeSong.id - 1 === i) {
            //this state do nothing because we press the playing music
        } else if (!this.isPlaying && this.activeSongId - 1 !== i) {
            this.activeSong = data;
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            }); //
        } else if (this.isPlaying && this.activeSong.id - 1 !== i) {
            this.activeSong = data;
            this.song.pause();
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            });// this state stop music and play the new one
        } else {
            this.activeSong = data;
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            });
        }
    }
    @action chanceIsPlaying() {
        this.isPlaying = !this.isPlaying; // this changes the playing stituation
    }
    @action nextSong() {
        if (this.activeSong.id < musicList.length) {
            this.activeSongIndex = this.activeSong.id;
            console.log(this.activeSongIndex);
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            });
        } else {
            this.activeSongIndex = 0;
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            }); // if it is last music it goes the first
        }
    }
    @action prevSong() {
        if (this.activeSong.id > 1) {
            this.activeSongIndex = this.activeSong.id - 2;
            console.log(this.activeSongIndex);
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            });
        } else {
            this.activeSongIndex = musicList.length - 1;
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song, (error) => {
                console.log('duration in seconds: ' + this.song.getDuration());
                this.song.play();
                this.isPlaying = true;
            }); // if it is first music it goes to last
        }
    }
}
export default new MainStore();
