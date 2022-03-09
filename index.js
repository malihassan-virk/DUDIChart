

import { Navigation } from "./src/setup";

import App from "./App";
import  HomeScreen  from './src/Screens/HomeScreen';
import  ProductDetailsScreen  from './src/Screens/ProductDetailsScreen';
import  CheckOutScreen  from './src/Screens/CheckOutScreen';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('ProductDetailsScreen', () => ProductDetailsScreen);
Navigation.registerComponent('CheckOutScreen', () => CheckOutScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);


Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
     // blur: true
    },
  })

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
    stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen',
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
});
