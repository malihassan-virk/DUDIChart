import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
} from 'react-native';
import {  moderateScale } from 'react-native-size-matters'
const { width,height } = Dimensions.get('window');
const BottomTabs = (props) => {

    return (


        <View style={[{
        backgroundColor:"#D9D9D8",
        marginVertical:moderateScale(5),
         width:width,
        height:0.5,
        },
        props.styles
        ]}>
           
            </View>

    );
};

const styles = StyleSheet.create({
    
});



export default BottomTabs;
