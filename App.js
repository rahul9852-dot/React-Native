import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView,ScrollView, Button,Text, View,Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Text style={styles.welcomeMsg}>Welcome back,</Text>
      <Text style={styles.name}>Rahul Kumar</Text>
      <Image 
          style={styles.imageStyles}
          source={require("./assets/Avatar.png")}
        />
      </View>
      <Card style={styles.card}>
      <Video
        ref={video}
        style={styles.video}
        source={require("./demo.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <Text style={styles.noramlText}>MAKE MY TRIP SAVING PLAN</Text>
      <Text style={styles.boldText}>Save for the next vacation 
        <Text style={{color:"green"}}> and get 10% cashback</Text>
      </Text>
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      </Card>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner:{
      flex:1,
  },
  card:{
    marginTop:10,
    width: 300,
    alignSelf:"center"
  },
  welcomeMsg: {
    marginTop: 80,
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
    padding:0,
    marginLeft:250,
  },
  // videoContainer: {
  //   alignSelf: 'center',
  //   width: 300,
  //   borderWidth: 5,
  //   borderColor: 'grey',
  //   borderRadius:10
  // },
  video:{
    alignSelf:'center',
    width:350,
    height:532,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noramlText:{
    padding:20,
    color: "#6F767E",
    fontSize: 18,
    lineHeight: 12,
    // fontWeight:400
  },
  boldText:{
    display:'flex',
    paddingLeft: 20,
    color:"black",
    // lineHeight: 12,
    fontSize:24,
    fontWeight:"bold",
  }
});
