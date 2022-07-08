import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from "./components/heading";
import ListOfLines from "./components/listOfLines";
import HorizontalBar from "./components/horizontalBar";

const paddingSides = 10;


export default function Main() {
    return (
        <View style={styles.container}>
            <Heading></Heading>
            <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
            <ListOfLines></ListOfLines>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        paddingTop: 50, // TODO: replace it with the right prop for status bar
        paddingLeft: paddingSides,
        paddingRight: paddingSides,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});
