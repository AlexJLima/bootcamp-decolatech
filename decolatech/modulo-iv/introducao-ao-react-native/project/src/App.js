import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { registerRootComponent } from 'expo';

const App = () => {
    return (
        <View style={style.container}> 
            <Text style={style.text}> Alexandre Lima</Text> 
        </View>
    );
};

export default registerRootComponent(App);

const style = StyleSheet.create(
    {
        container:{
            backgroundColor: 'pink',
            flex: 1,
        },

        text:{
            fontSize: 50,
            fontWeight: 'bold',
            color: 'black',
        },
    }
);