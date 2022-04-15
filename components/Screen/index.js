import React from "react";
import { View, Text, Pressable, Image } from 'react-native';
import styles from "./style";

const Screen = function (props) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')}
            style={styles.gambar} 
            />
            <Text style={styles.subJudul}>
                Simple app by Erlangga Riansyah
            </Text>
        </View>
    );
}

export default Screen;