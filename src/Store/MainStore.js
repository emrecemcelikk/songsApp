/* eslint-disable prettier/prettier */
import { observable, action, makeObservable, configure } from 'mobx';
import Sound from 'react-native-sound';
import { musicList } from '../content/content';
    configure({
        enforceActions : 'never',
    });

class MainStore {
    @observable activeSongIndex = 0;
    @observable activeSong = musicList[this.activeSongIndex];
    @observable song = new Sound(this.activeSong.song,(error) =>{
        console.log('duration in seconds: ' + this.song.getDuration() );

    });
    @observable isPlaying = false;
    constructor() {
        makeObservable(this);
    }
    @action setActiveSong(data,i) {
        if (this.isPlaying && this.activeSong.id - 1 === i) {

        } else if ( !this.isPlaying && this.activeSongId - 1 !== i ) {
            this.activeSong = data;
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        } else if (this.isPlaying && this.activeSong.id - 1 !== i){
            this.activeSong = data;
            this.song.pause();
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        } else {
            this.activeSong = data;
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        }
    }
    @action chanceIsPlaying(){
        this.isPlaying = !this.isPlaying;
    }
    @action nextSong(){
        if (this.activeSong.id < musicList.length){
            this.activeSongIndex = this.activeSong.id;
            console.log(this.activeSongIndex);
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        } else {
            this.activeSongIndex = 0;
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        }
    }
    @action prevSong(){
        if (this.activeSong.id > 1){
            this.activeSongIndex = this.activeSong.id - 2;
            console.log(this.activeSongIndex);
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        } else {
            this.activeSongIndex = musicList.length - 1;
            this.activeSong = musicList[this.activeSongIndex];
            this.song = new Sound(this.activeSong.song,(error) =>{
                console.log('duration in seconds: ' + this.song.getDuration() );
                this.song.play();
                this.isPlaying = true;
            });
        }
    }
}
export default new MainStore();
