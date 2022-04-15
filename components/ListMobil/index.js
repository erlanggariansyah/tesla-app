import React from "react";
import { RefreshControl, SafeAreaView, View, FlatList, Dimensions, ToastAndroid } from "react-native";
import styles from "./style";
import mobil from "./mobil";
import Mobil from "../Mobil";

const ListMobil = function (props) {
    const { refreshing, setRefreshing } = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        ToastAndroid.show("No more data.", ToastAndroid.SHORT);
        setRefreshing(false);
    }, [refreshing]);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList 
                data={mobil}
                renderItem={({item}) => <Mobil mobil={item} />}
                snapToAlignment={'start'}
                showsVerticalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                />
            </SafeAreaView>
        </View>
    );
}

export default ListMobil;