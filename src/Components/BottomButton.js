import React from 'react';
import {
    TextInput,
    Text,
    I18nManager,
    StyleSheet,
    View,
    Pressable,
    Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const BottomButton = (props) => {

    return (


        <View style={[styles.container,
        props.styles
        ]}
        >

            {props?.numOfButtons === 3 ?
                <>
                    <Pressable style={styles.pressable}
                        onPress={() => { props.startButtonCallBack() }}
                    >
                        <Text style={styles.text}>
                            Cancel
                        </Text>
                    </Pressable>
                    <Pressable style={[{
                        marginHorizontal: moderateScale(2),
                    }, styles.pressable]}
                        onPress={() => { props.midButtonCallBack() }}
                    >
                        <Text style={styles.text}>
                            Block
                        </Text>
                    </Pressable>
                    <Pressable style={styles.pressable}
                        onPress={() => { props.endButtonCallBack() }}
                    >
                        <Text style={styles.text}>
                            Delete
                        </Text>
                    </Pressable>
                </>

                :

                <Pressable style={[styles.pressable,props.buttonStyle]}
                    onPress={() => { props.midButtonCallBack() }}
                >
                    <Text style={[styles.text,props.textStyle]}>
                        {props.MidButtonTitle? props.MidButtonTitle  : "Create"}
                    </Text>
                </Pressable>
            }



        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        bottom: moderateScale(0),
        paddingVertical: moderateScale(5),
        // height:moderateScale(40),
        justifyContent: "space-between",
        flexDirection: "row",
        // flex: 1,
        alignItems: "center",
    },
    pressable: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#9F0F1B",
        borderRadius: moderateScale(25),
        height: moderateScale(35),
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: moderateScale(13),
        fontWeight: "600"
    },
});

export default BottomButton;
