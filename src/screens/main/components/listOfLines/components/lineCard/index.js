import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LineCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.lineRouteNumber}><Text style={{color:'#FFFFFF', fontSize:props.fontSize*0.8 }}>2</Text></View>
            <View style={styles.lineRoute}><Text style={{ fontSize: props.fontSize*0.8 }}>Orvault Grand Val - Gare de Pont Rousseau</Text></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 10,
    },
    lineRouteNumber:{
        flex:1,
        backgroundColor: '#E53138',
        height:30,
        alignItems: "center",
        justifyContent: "center",
    },
    lineRoute:{
        flex:10,
        paddingLeft: 10,
        justifyContent: "center",
    }
});
