import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Item from "../Components/Item";
import { useEffect, useState } from "react";
import Test from "../Components/Test";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pharmacy Alnahda ',
    address: '22 Alnahda ',
    phone: '3435 65 ',
  },

];
const PharmarcyList = (props) => {
  const {navigation} = props
  const [pharmacies, setPharmacies] = useState(null);

  const url = 'http://192.168.8.124:8000/api/pharmacies';
  useEffect(() => {
    fetch(url)
      .then((response) => {

        return response.json();
      })
      .then(data => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        setPharmacies(data.pharmacies);
        
      })
      .catch(error => console.error(error))
      .finally();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={pharmacies}
        renderItem={ ({ item }) => 

        <TouchableOpacity onPress={() =>navigation.navigate("Map",{lat: item.latitude,long: item.longtiude})}>
        <Item name={item.name} address={item.address} phone1={item.phone1} />
        </TouchableOpacity>

      
      
      }
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#03C988",
    flex: 1
  }

})
export default PharmarcyList;