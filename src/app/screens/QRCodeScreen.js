import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';


import NavBar from '../components/NavBar';
import QrCode from '../components/QrCode';



export default function QRCodeScreen({address, navigation}) {
    const back = <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
    return (
        <View>
            <NavBar title="Recive" backButton={back} />
        </View>
    )
}
