import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalBar from "../horizontalBar";
import LineCard from "./components/lineCard";

const paddingValue = 20;

export default function ListOfLines() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Lignes</Text>
            <HorizontalBar paddingType={"paddingBottom"} ></HorizontalBar>
            <LineCard fontSize={styles.heading.fontSize}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: paddingValue,
        alignSelf: 'stretch' // fill the screen's width as this is a child component
    },
    heading: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
