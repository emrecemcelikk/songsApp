/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#BFDCAE',
    },
    img: {
        width:300,
        height:300,
    },
    main: {
        flex:2,
    },
    header: {
        alignItems:'center',
        flex:1,
    },
    footer: {
        flex:2,
        alignItems:'center',
    },
    artist: {
        fontSize:48,
        fontFamily:'Montserrat-Bold',
        color:'black',
    },
    title: {
        fontFamily:'Montserrat-Medium',
        fontSize:28,
        color:'#242424',
    },
    iconWrapper: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:50,
    },
    back: {
        position:'absolute',
        bottom:10,
        alignItems:'center',
    },
    icon: {
        marginHorizontal:20,
    }
});
