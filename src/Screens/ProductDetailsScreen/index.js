import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image, Text, Pressable
} from 'react-native';
import { moderateScale, Navigation,themes } from '../../setup'
import Header from '../../Components/Header';
import AlertPopup from '../../Components/AlertPopUp';
import Separator from '../../Components/Separator';

export default function JobDetails(props) {

    const [alertPopup, setAlertPopup] = useState(false);
    const [isMore, setIsMore] = useState(false);

    let headerButton = [
        { title: "Rate Product" },
        { title: "Report Product" },
    ]
    let shareButton = [
        { title: "Copy Link" },
        { title: "Share To" },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar barStyle={'dark-content'} />
            <Header
                onlySearchBar={false}
                isSearhButton={false}
                isMiddleText={true}
                middleText={"Description"}
                backOnPress={() => { Navigation.pop(props.componentId) }}
                isBackButton={true}
                isMoreButton={true}
                callBackMoreButton={() => { setAlertPopup(!alertPopup); setIsMore(true) }}
            />

            <View style={styles.imageContainer}>
                <Image
                    source={props.item.imageUrl}
                    style={{
                        height: moderateScale(120),
                        width: moderateScale(120)
                    }}
                    resizeMode="contain"
                />
            </View>
            <Separator />
            <View style={styles.titleView}>
                
                <Text numberOfLines={2} style={[{ fontSize: moderateScale(14) }, { color:themes.lightBlue.textDarkGrayColor, marginTop: moderateScale(3) }]}>
                    {props.item.title}
                </Text>
                <Text numberOfLines={1} style={[{ fontSize: moderateScale(14) }, { color: themes.lightBlue.textDarkGrayColor, }]}>
                    {props.item.designation}
                </Text>


                <Text numberOfLines={1} style={[{ fontSize: moderateScale(11) }, { color: themes.lightBlue.textLightGrayColor, marginTop: moderateScale(5) }]}>
                    {"AED "+props.item.price + " | " + props.item.location}
                </Text>

                <View style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: moderateScale(13),
                    marginBottom: moderateScale(4)
                }}>

                    <Pressable
                        style={[{
                            marginEnd: moderateScale(8),
                            paddingEnd: moderateScale(8),
                        }]}>
                       
                    </Pressable>
                    <Pressable style={{
                        justifyContent: "center", alignItems: "center",
                        backgroundColor: themes.lightBlue.bgDarkThemeColor,
                        borderRadius: moderateScale(50),
                        paddingHorizontal: moderateScale(35),
                        paddingVertical: moderateScale(5),
                        marginEnd: moderateScale(16),
                        // paddingEnd:moderateScale(8),
                    }}>
                        <Text numberOfLines={1} style={[{ fontSize: moderateScale(10) }, { color: "white", }]}>
                            Review
                        </Text>

                    </Pressable>

                    <Pressable
                        style={[{}]}
                        onPress={() => {
                           
                        }}
                    >
                      
                    </Pressable>



                </View>

            </View>
            <Separator />
            <View style={styles.DetailsView}>
                <Text numberOfLines={1} style={[{ fontSize: moderateScale(14), marginVertical: moderateScale(6) }, { color: themes.lightBlue.textDarkThemeColor }]}>
                    Product Details
                </Text>
                <Text style={[{ fontSize: moderateScale(14) }, { color: "#BBB8B8", marginTop: moderateScale(3), lineHeight: moderateScale(20) }]}>
                    {props.item.details}
                </Text>
            </View>

            {alertPopup > 0 &&
                <AlertPopup
                    position={{ bottom: 70 }}
                    arrayOfActions={

                        isMore ?
                            headerButton
                            :
                            shareButton
                    }
                    message={` Users ?`}
                    actionText={"save"}
                    confirmCallBack={() => { setAlertPopup(false) }}
                    cancelCallBack={() => { setAlertPopup(false) }}
                />
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: moderateScale(1),
        marginBottom: 10,
        marginTop: moderateScale(3),
    },
    DetailsView: {
        marginVertical: moderateScale(5),
        paddingHorizontal: moderateScale(15),
        justifyContent: "center",
    },
    titleView: {
        marginVertical: moderateScale(3),
        alignItems: "center",
    },
    imageContainer: {
        marginVertical: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        fontSize: 18,
    },
});


