/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const MiniPlayer = ({data}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Image style={styles.img} source={data[0].image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{data[0].title}</Text>
                <Text style={styles.artist}>{data[0].artist}</Text>
            </View>
            <View style={styles.icon}>
                <Icon size={42} name="play" type="ionicon" color="#FFF" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#206A5D',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        marginBottom:12,
        width:'100%',
        position:'absolute',
        bottom:-15,
    },
    img: {
        width:70,
        height:70,
        borderRadius:50,
    },
    text: {
        justifyContent:'center',
        width:'60%',
    },
    title: {
        fontFamily:'Montserrat-Bold',
        fontSize:18,
        color:'#fff',
    },
    artist: {
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        color:'#E9E9E9',
    },
    icon: {
        justifyContent:'center',
    },
});
