import { StyleSheet,Dimensions, } from "react-native";

const Styles=StyleSheet.create({
      image:{
      width: Dimensions.get('window').width,
      height:Dimensions.get('window').width
      },
      name:{
           textAlign: 'center',
           alignSelf: 'center',
           fontWeight:'bold',
           color:'#4f4f4f',
      }
});

export default Styles