
import React, { useState, } from 'react';
import {
    View, Text,
    Image,
    Pressable,
} from 'react-native';
import { moderateScale, themes } from '../setup'



export default function Header(props) {

    return (

        <View style={[
            {
                height: moderateScale(40),
                flexDirection: "row", justifyContent: "flex-start",
                alignItems: "center",
            },
            props.borderBottom ?
                {
                    paddingBottom: moderateScale(5),
                    height: moderateScale(42),
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#dad8d8"
                }
                :
                {},
            props.style
        ]}>
            {props.isBackButton &&
                <Pressable style={{
                    flex: 0.12, justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                }}
                    onPress={() => { props.backOnPress() }}
                >
                    <Image
                        style={{
                            width: moderateScale(30),
                            height: moderateScale(30),
                        }}
                        source={
                            props.HomeScreen ?
                                require('../assets/Market/logo.png')
                                :
                                props.isBackCross ?
                                    require('../assets/Market/plus.png')
                                    :
                                    require('../assets/Market/back.png')
                        }
                        resizeMode="contain" />
                </Pressable>
            }

            {props.isMiddleText &&
                <Pressable style={{
                    flex: 0.76,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    disabled={props.middleTextEnabled ? false : true}
                    onPress={() => {
                        props?.callBackMiddleText()
                    }}
                >
                    {props.isMiddleTextAndImage &&
                        <Image style={{
                            width: moderateScale(30), height: moderateScale(30),
                            borderRadius: moderateScale(15),
                            marginRight: moderateScale(6)
                        }}
                            source={props.imageUrl}
                        />
                    }
                    <View>
                        <Text
                            style={{ fontSize: moderateScale(20), color: themes.lightBlue.textDarkThemeColor, fontWeight: "500" }}>

                            {props.middleText}
                        </Text>
                        {props?.middleTextSub &&
                            <Text
                                style={{ fontSize: moderateScale(13), color: "gray" }}>

                                {props?.middleTextSub}
                            </Text>
                        }
                    </View>
                </Pressable>
            }

            {props.isMoreButton &&
                <Pressable style={{
                    flex: 0.12, justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                }}
                    onPress={() => { props.callBackMoreButton() }}
                >
                    <Image
                        style={{ width: moderateScale(30), height: moderateScale(30), }}
                        source={props.isChartButton ?
                            require('../assets/Market/chart.png')
                            :
                            require('../assets/Market/more.png')}
                        resizeMode="contain" />
                    {props.isChartButton &&
                        <View style={{
                            position: "absolute",
                            top: 3,
                            right: 8,
                            backgroundColor: themes.lightBlue.bgButton2,
                            height: 15,
                            width: 15,
                            borderRadius: 7.5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text
                                style={{
                                    fontWeight: "700",
                                    fontSize: moderateScale(10),
                                    color: "white",
                                    textAlign: "center"
                                }}>
                                {props.chartCount}
                            </Text>
                        </View>
                    }
                </Pressable>
            }




        </View>

    );
}



