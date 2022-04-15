import React from "react";
import { View, Image, Linking, onPress, TouchableOpacity } from "react-native";
import styles from "./style";

const Header = function () {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {Linking.openURL("https://tesla.com")}}>
                <Image style={styles.image} 
                source={require('../../assets/images/logo.png')} 
                />
            </TouchableOpacity>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};

export default Header;