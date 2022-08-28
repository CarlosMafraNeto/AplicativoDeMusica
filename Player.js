import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import React, { useState } from 'react';
import React from 'react';

 function Player(){
return(
    <View style={styles.Player}>
    <TouchableOpacity style={{marginRight:20, marginLeft:20}}>
    <AntDesign name='banward' size={35} color="white"/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginRight:20, marginLeft:20}}>
    <AntDesign name='playcircle' size={35} color="white"/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginRight:20, marginLeft:20}}>
    <AntDesign name='forward' size={35} color="white"/>
    </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    Player:{
        width:"100%",
        height:"100%",
        position:"absolute",
        bottom:0,
        left:0,
        zIndex:999,
        backgroundColor:"#111",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    }
})
}

export default Player;