import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

const Mobil = (props) => {
    const { judul, subJudul, gambar } = props.mobil;

    return (
        <View style={styles.mobilContainer}>
        <ImageBackground source={gambar}
        style={styles.bg}
        />
          <View style={styles.judul}>
            <Text style={styles.mainJudul}>{judul}</Text>
            <Text style={styles.subJudul}>{subJudul}</Text>
          </View>

        </View>
    );
};

export default Mobil;