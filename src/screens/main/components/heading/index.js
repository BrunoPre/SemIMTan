import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                <Text style={styles.h_green_darker}>Sem</Text>
                <Text style={styles.h_green_lighter}>'</Text>
                <Text style={styles.h_blue_imt}>imt</Text>
                <Text style={styles.h_green_lighter}>'</Text>
                <Text style={styles.h_green_darker}>an</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
    },
    h_green_darker:{
        color: '#519735'
    },
    h_green_lighter:{
        color: '#ABCB91'
    },
    h_blue_imt: {
        color: '#00B8DE'
    },
});
