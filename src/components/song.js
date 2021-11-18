/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export const Song = ({data}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Image style={styles.img} source={data.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.artist}>{data.artist}</Text>
            </View>
            <View style={styles.icon}>
                <Icon size={42} name="play" type="ionicon" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#BFDCAE',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        borderRadius:10,
        marginBottom:12,
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
        color:'#000000',
    },
    artist: {
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        color:'#5E5E5E',
    },
    icon: {
        justifyContent:'center',
    },
});