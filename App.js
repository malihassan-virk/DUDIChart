
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Pressable,
  Image
} from 'react-native';
import {Navigation,moderateScale} from './src/setup';

export default function App(props) {
  const backgroundStyle = {
    backgroundColor: "white",
    flex: 1,
    justifyContent:"center",
  };

  useEffect(()=>{
setTimeout(() => {
         navigateToHomeScreen()
}, 2000);
  },[])

  const navigateToHomeScreen = () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'HomeScreen',
                passProps: {Navigation},
         options:{
          topBar: {
              drawBehind: true,
              visible: false,
              background: {
                color: 'white'
              }
            },
           // modalPresentationStyle: 'overCurrentContext',
            statusBar: {
              visible: false
            }
          }
              }
            }
          ]
        }
      }
    });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
       <Pressable  style={{flex:1,
       justifyContent:"center",
          height:"100%",
          alignItems:"center",}}
          onPress={()=>{navigateToHomeScreen()}}
          >
          <Image
                        style={{ width: moderateScale(250), height: moderateScale(250), }}
                        source={require('./src/assets/Market/logo.jpeg')}
                        resizeMode="contain" />
                       </Pressable>
    </SafeAreaView>
  );
}




