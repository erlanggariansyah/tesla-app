import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import CustomButton from "../CustomButton";

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
        
        <View style={styles.buttonContainer}>
            <CustomButton type="primer" 
            content={"Order"} 
            onPress={() => {
                console.warn("You have pressed order button.");
            }}
            />

            <CustomButton type="sec" 
            content={"Your Cart"} 
            onPress={() => {
                console.warn("You have pressed cart button.");
            }}
            />
        </View>

        </View>
    );
};

export default Mobil;