/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
// import nav component
import { useNavigation } from '@react-navigation/core';
//import icon
import { Icon } from 'react-native-elements';
//import mobx components
import { observer } from 'mobx-react';
import MainStore from '../Store/MainStore';

export const MiniPlayer = observer(() => {
    const navigation = useNavigation();
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
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Player')}>
            <View>
                <Image style={styles.img} source={MainStore.activeSong.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{MainStore.activeSong.title}</Text>
                <Text style={styles.artist}>{MainStore.activeSong.artist}</Text>
            </View>
            <View style={styles.icon}>
                <TouchableOpacity onPress={() => prevSong()}>
                    <Icon size={42} name="play-skip-back" type="ionicon" color="#FFF" />
                </TouchableOpacity>
                {/* check if song is playing or not and show right icon */}
                {MainStore.isPlaying ?
                    <TouchableOpacity onPress={() => pauseSong()}>
                        <Icon size={42} name="pause" type="ionicon" color="#FFF" />
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => playSong()}>
                        <Icon size={42} name="play" type="ionicon" color="#FFF" />
                    </TouchableOpacity>}
                <TouchableOpacity onPress={() => nextSong()}>
                    <Icon size={42} name="play-skip-forward" type="ionicon" color="#FFF" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#206A5D',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        marginBottom: 12,
        width: '100%',
        position: 'absolute',
        bottom: -15,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    text: {
        justifyContent: 'center',
        width: '40%',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#fff',
    },
    artist: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#E9E9E9',
    },
    icon: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});
