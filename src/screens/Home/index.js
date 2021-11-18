/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { Song } from '../../components/song';
import { musicList } from '../../content/content';
import { MiniPlayer } from '../../components/miniPlayer';

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Songs</Text>
            </View>
            <View style={styles.main}>
                <FlatList data={musicList} renderItem={({item})=>{
                    return (
                        <Song data={item} />
                    );
                }} />
                <MiniPlayer data={musicList}/>
            </View>
        </View>
    );
};
