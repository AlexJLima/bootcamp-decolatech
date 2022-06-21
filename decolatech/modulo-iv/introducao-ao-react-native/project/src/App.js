import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';
import { registerRootComponent } from 'expo';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const imageGitHubProfile = 'https://raw.githubusercontent.com/1l0/identicon/master/example/identicons/normal_white.png';

const App = () => {
    return (
            <SafeAreaView style={style.container}>
                <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
                    <View style={style.content}> 
                        <Image source={{uri: imageGitHubProfile}} style={style.avatar}/>
                    </View>
                    <Text style={[style.defaultText, style.name]}>Alexandre Lima</Text>
                    <Text style={[style.defaultText, style.nickname]}>AlexJLima</Text>
            </SafeAreaView>
    );
};

export default registerRootComponent(App);

const style = StyleSheet.create(
    {
        container:{
            backgroundColor: colorGitHub,
            flex: 1,
            alignItems: 'center',
        },
        content:{
            alignItems: 'center',
            padding: 20,
        },
        avatar:{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 2,
        },
        defaultText: {
            color: colorFontGitHub,
        },

        name: { 
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 24,
        },
        nickname: {
            fontSize: 18,
            color: colorDarkFontGitHub,
        },
    }
);