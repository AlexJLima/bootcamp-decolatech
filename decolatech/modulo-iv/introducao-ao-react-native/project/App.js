import React from 'react';
import { registerRootComponent } from 'expo';
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Image,
    Pressable,
    Linking,
} from 'react-native';


const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const imageGitHubProfile = 'https://raw.githubusercontent.com/1l0/identicon/master/example/identicons/normal_white.png';
const urlGitHub = 'https://github.com/AlexJLima';

const App = () => {
    const handlePressGoToGithub = async ()=> {
        const  res = await Linking.canOpenURL(urlGitHub)
        .then(Linking.openURL(urlGitHub))
    }
    return (
            <SafeAreaView style={style.container}>
                <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
                    <View style={style.content}> 
                        <Image 
                            accessibilityLabel='Foto de perfil padrão do GitHub'
                            source={{uri: imageGitHubProfile}} 
                            style={style.avatar}/>
                        <Text 
                            accessibilityLabel='Nome: Alexandre Lima'
                            style={[style.defaultText, style.name]}>
                            Alexandre Lima
                        </Text>
                        <Text 
                            accessibilityLabel='Nickname: Alex J Lima'
                            style={[style.defaultText, style.nickname]}>
                            AlexJLima
                        </Text>
                        <Pressable onPress={handlePressGoToGithub}>
                                    <View style={style.button}>
                                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                                    </View>
                        </Pressable>
                        </View>
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
        button: {
            marginTop: 20,
            backgroundColor: colorDarkFontGitHub,
            borderRadius: 10,
            padding: 20,
        },
        textButton: {
            fontWeight: 'bold',
        },
    }
);