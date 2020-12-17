import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Inicio', style: { color: '#fff', fontSize:20 } }}
                containerStyle={{backgroundColor:'#E15757'}}
            />
            <center>
                <Text><h1>Bienvenidos</h1></Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('../Imagenes/logodos.jpg')}
                />
            </center>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    tinyLogo: {
        width: 300,
        height: 300,
      },
});