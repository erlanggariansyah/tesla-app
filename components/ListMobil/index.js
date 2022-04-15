import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import styles from "./style";
import mobil from "./mobil";
import Mobil from "../Mobil";

const ListMobil = function (props) {
    return (
        <View style={styles.container}>
            <FlatList 
            data={mobil}
            renderItem={({item}) => <Mobil mobil={item} />}
            snapToAlignment={'start'}
            showsVerticalScrollIndicator={false}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default ListMobil;