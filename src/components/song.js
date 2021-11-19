/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import icon
import { Icon } from 'react-native-elements';
//import nav components
import { useNavigation } from '@react-navigation/core';
//import data content
import { musicList } from '../content/content';
//import mobx components
import MainStore from '../Store/MainStore';
import { observer } from 'mobx-react';


export const Song = observer(({ data, index }) => {
    const navigation = useNavigation();
    //start song and go to player
    const play = async (i) => {
        await MainStore.setActiveSong(musicList[i], i);
        navigation.navigate('Player');
    };
    return (
        <TouchableOpacity style={styles.card} onPress={() => play(index)}>
            <View>
                <Image style={styles.img} source={data.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.artist}>{data.artist}</Text>
            </View>
            <View style={styles.icon}>
                <TouchableOpacity>
                    <Icon size={42} name="play" type="ionicon" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#BFDCAE',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 12,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    text: {
        justifyContent: 'center',
        width: '60%',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#000000',
    },
    artist: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#5E5E5E',
    },
    icon: {
        justifyContent: 'center',
    },
});
