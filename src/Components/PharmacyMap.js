import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

const tokyoRegion = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const PharmacyMap = ({route}) => {
  const { lat,long } = route.params;

  return ( 
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta:1,
        longitudeDelta:1 }}
      >

      <Marker 
      coordinate={{
        latitude: lat,
        longitude: long,
        latitudeDelta:0.01,
        longitudeDelta:0.01 }}
      pinColor="green"
      image={require("../../assets/pha-marker.png")} 
      />
      </MapView>
  </View>
   );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  map:{
    height: "100%",
    width: "100%"
  }

})
export default PharmacyMap;