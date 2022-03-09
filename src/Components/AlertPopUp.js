import React from 'react';
import {
    TextInput,
    FlatList,
    Text,
    I18nManager,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
    Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { themes } from '../setup';
const { width, height } = Dimensions.get('window');

const AlertPopup = (props) => {

    const ItemView = ({ item, index }) => {

        return (

                <Pressable style={[styles.pressable,{
                    borderTopWidth:index == 0 ? 0 : 0.5,borderColor:"white"
                }]}
                 onPress={() => { props.confirmCallBack(index) }}
                 >
                   
                   <Text style={styles.text}>
                    {item.title}
                </Text>  
                        
                </Pressable>
        );
    };

    return (


        <View style={[styles.container,props.position]}
        >
            {props.arrayOfActions ?
        <>
        <FlatList
                    data={props.arrayOfActions}
                   // extraData={extra}
                    style={{ 
                        flex: 1,
                       // marginBottom:selectedLength > 0 ? moderateScale(51) : moderateScale(5),
                    
                    }}
                    // ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
        </>
        :
        <>

        <Pressable style={styles.pressable}
                            onPress={() => { props.confirmCallBack() }}
                        >
                            <Text style={styles.messageText}>
                                {props.message}
                            </Text>
                        </Pressable>
                        <Pressable style={styles.pressable}
                            onPress={() => { props.confirmCallBack() }}
                        >
                            <Text style={styles.text}>
                                {props.actionText}
                            </Text>
                        </Pressable>
                        <Pressable style={styles.pressable}
                            onPress={() => { props.cancelCallBack() }}
                        >
                            <Text style={styles.text}>
                                Cancel
                            </Text>
                        </Pressable>
                </>
}

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        paddingTop: moderateScale(22),
        borderRadius: moderateScale(25),
        paddingBottom: moderateScale(10),
        // height:moderateScale(90),
        justifyContent: "center",
        backgroundColor:themes.lightBlue.textDarkThemeColor,
        opacity:0.87,
        //alignContent:"center",
        alignSelf:"center",
         width:width-30,
       // alignItems: "center",
    },
    pressable: {
        justifyContent: "center",
        marginBottom:moderateScale(10),
        flex: 1,
        alignItems: "center",
    },
    messageText: {
        color: "white",
        fontSize: moderateScale(22),
        fontWeight: "600"
    },
    text: {
        color: "white",
        paddingTop:moderateScale(9),
        fontSize: moderateScale(18),
        fontWeight: "400"
    },
});

export default AlertPopup;
