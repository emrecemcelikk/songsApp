/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Icon } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import MainStore from '../../Store/MainStore';
import { observer } from 'mobx-react-lite';


const { width } = Dimensions.get('window');

export const Player = observer(({ navigation }) => {
    const [time, setTime] = useState();
    const getTime = () => {
        MainStore.song.getCurrentTime((seconds) => setTime(seconds));
        return time;
    };
    const setSliderTime = (value) => {
        MainStore.song.setCurrentTime(value);
        return time;
    };
    const playSong = () => {
        MainStore.song.play();
        MainStore.chanceIsPlaying();
        console.log(MainStore.song);
    };
    const pauseSong = () => {
        MainStore.song.pause();
        MainStore.chanceIsPlaying();
        console.log(MainStore.song);
    };
    const nextSong = () => {
        MainStore.song.pause();
        MainStore.nextSong();
    };
    const prevSong = () => {
        MainStore.song.pause();
        MainStore.prevSong();
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#BFDCAE'} />
            <View style={styles.header}>
                <Text style={styles.artist}>{MainStore.activeSong.artist}</Text>
                <Text style={styles.title}>{MainStore.activeSong.title}</Text>
            </View>
            <View style={styles.main}>
                <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.img} source={MainStore.activeSong.image} />
                </View>
            </View>
            <View style={styles.footer}>
                <View>
                    <Slider key={'key'} style={{ width: width, height: 40 }}
                        value={getTime()} minimumValue={0}
                        maximumValue={MainStore.song.getDuration()}
                        minimumTrackTintColor="#206A5D"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="#206A5D"
                        onSlidingComplete={async (value) => {
                            setSliderTime(value);
                        }

                        }
                    />
                </View>
                <View style={styles.iconWrapper}>
                    <TouchableOpacity onPress={() => prevSong()}>
                        <Icon size={50} style={styles.icon} name="play-skip-back" type="ionicon" color="#000" />
                    </TouchableOpacity>
                    {MainStore.isPlaying ?
                        <TouchableOpacity onPress={() => pauseSong()}>
                            <Icon size={50} style={styles.icon} name="pause" type="ionicon" color="#000" />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => playSong()}>
                            <Icon size={50} style={styles.icon} name="play" type="ionicon" color="#000" />
                        </TouchableOpacity>}
                    <TouchableOpacity onPress={() => nextSong()}>
                        <Icon size={50} style={styles.icon} name="play-skip-forward" type="ionicon" color="#000" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
                    <Icon name="chevron-down" type="ionicon" color="#2C3D4F" size={80} />
                </TouchableOpacity>
            </View>
        </View>
    );
});
