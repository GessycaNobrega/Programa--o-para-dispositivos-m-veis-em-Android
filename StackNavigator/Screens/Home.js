//O script App.js é o ponto de entrada do aplicativo em que o StackNavigator foi definido. A pasta screens guarda as telas About e Home. O código da tela Home pode ser visto a seguir:

import * as React from 'react';
 import { View, Text, Button } from 'react-native';

 function HomeScreen({navigation}) {
     return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
         <Button title='Ir para About' onPress={() => navigation.navigate('About')} />
     </View>
     );
 }

 export default HomeScreen;