import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import Button from "../CustomButton";

const Mobil = (props) => {
    return (
        <View style={styles.mobilContainer}>
        <ImageBackground source={require("../../assets/images/ModelS.jpeg")}
        style={styles.bg}
        />
          <View style={styles.judul}>
            <Text style={styles.mainJudul}>Model S</Text>
            <Text style={styles.subJudul}>Starting at $69,420</Text>
          </View>
        </View>

        <CustomButton/>
    );
};

export default Mobil;