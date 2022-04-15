import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";
import styles from "./Mobil/style";

const MainButton = function (props) {
    return (
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
    );
}

export default MainButton;