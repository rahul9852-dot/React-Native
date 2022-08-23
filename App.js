import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView,ScrollView, Button,Text, View,Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card } from 'react-native-paper';
import { WebView } from 'react-native-webview';
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
       <Card style={styles.card1}>
          <Video
            ref={video}
            style={styles.video}
            source={require("./iphone13.mp4")}
            useNativeControls
            // resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
      <Text style={styles.noramlText}>IPHONE SAVING PLAN</Text>
      <Text style={styles.boldText}>Save for the next iphone 
        <Text style={{color:"green"}}> and get 10% cashback</Text>
      </Text>
           
              <View>
                <Image 
                  style={styles.Image1}
                  source={require("./assets/Truck.png")}
                />
                <Text style={styles.delivery}>Priority Delivery</Text>
                </View>
                <Image 
                  style={styles.repeatedImage}
                  source={require("./assets/Charger.png")}
                />
                <Image 
                  style={styles.repeatedImage}
                  source={require("./assets/gift.png")}
                />
      </Card>
      <Card style={styles.card}>
      <Video
        ref={video}
        style={styles.video}
        source={require("./demo.mp4")}
        useNativeControls
        // resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Image 
          style={styles.logo}
          source={require("./assets/makeMyTrip.jpg")}
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
    marginTop:20,
    width: 300,
    alignSelf:"center",
    borderRadius:10,
    background: "#FFFFFF", 
  },
  card1:{
    marginTop: 20,
    width: 300,
    alignSelf:"center",
    borderRadius:10,
    background: "#FFFFFF", 
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
  conatinerSubLogo:{
    display:"flex",
    flexDirection: "row",            /* default value; can be omitted */
    flexWrap: "nowrap",         /* default value; can be omitted */
    justifyContent: "space-between",  /* switched from default (flex-start, see below) */
    // background-color: lightyellow;
  },
  Image1:{
    width: 100,
    height: 65,
    backgroundColor:"#EFEFEF",
    margin: 20,
    borderRadius: 9
  },
  imageStyles:{
    marginLeft:280,
    position:"absolute",
    marginTop: 100
  },
  video:{
    alignSelf:'center',
    width:300,
    height:400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position:"relative"
    // borderWidth:5
  },
  logo:{
     position: 'absolute',
      left: 15,
      bottom: 170,
      borderRadius:10,
      width: 50,
      height: 50,
  },
  subLogo:{
     display:"flex",
    //  width: 100,
    //  height: 100,
     backgroundColor: "gray",


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
  delivery:{
    color: "#6F767E",
    fontSize: 15,
    lineHeight: 2,
    padding: 17
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
