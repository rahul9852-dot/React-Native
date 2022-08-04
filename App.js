import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View>
    <Image 
          style={styles.imageStyles}
          source={require("./assets/Avatar.png")}
        />
      <Text style={styles.welcomeMsg}>Welcome back,</Text>
      <Text style={styles.name}>Rahul Kumar</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  welcomeMsg: {
    marginTop: 70,
    marginLeft: 50,
    color:"grey",
    fontSize: 15,
    lineHeight: 17
  },
  name:{
    paddingTop: 10,
    marginLeft: 50,
    fontSize: 30,

  },
  imageStyles:{
    alignItems:"flex-end",
    marginTop: 70
  }
});
