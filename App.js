import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/Components/Tabs';


export default function App() {


  return (
    // <View>
    //   <PharmarcyList  />
    // </View>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
});
