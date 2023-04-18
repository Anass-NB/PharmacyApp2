import { Text } from "react-native";

const Test = ({route}) => {
  const { lat,long } = route.params;

  return ( 
    <Text> lat:  {lat} , long {long}</Text>
   );
}
 
export default Test;