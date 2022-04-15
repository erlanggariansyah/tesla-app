import React from "react";
import { View, Text, Pressable} from "react-native";
import styles from "./style";

const CustomButton = function (props) {
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primer' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primer' ? '#FFFFFF' : '#171A20';

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Pressable
            style={styles.CustomButton}
            onPress={() => {
                onPress()
            }}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default CustomButton;