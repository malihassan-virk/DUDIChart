
import React, { useEffect, useState, useRef } from 'react';
import {
    FlatList,
    View, Text,
    SafeAreaView, TouchableOpacity,
    ScrollView,
    Pressable,
    TextInput,
    Image,
} from 'react-native';
import { moderateScale, Navigation, moment, themes } from '../../setup'
import Header from '../../Components/Header';
import styles from './styles';

export default function TopBar(props) {
    const [promocode, setPromocode] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [chartList, setChartList] = useState([]);

    useEffect(() => {
        setChartList(props.chartList)
        setTotalAmount(props.totalAmount)
    }, [])

    const addChart = (item, index) => {
        chartList[index].itemSelected = chartList[index].itemSelected + 1;
        chartList[index].totalPrice = chartList[index].itemSelected * chartList[index].price
        setChartList(chartList)
        setTimeout(() => {
            calculatePrice()
        }, 400);
    }

    const removeChart = (item, index) => {
        if (chartList[index].itemSelected === 0) {

        }
        else {
            chartList[index].itemSelected = chartList[index].itemSelected - 1;
            chartList[index].totalPrice = chartList[index].itemSelected * chartList[index].price
            setChartList(chartList)
            setTimeout(() => {
                calculatePrice()
            }, 400);

        }



    }

    const calculatePrice = async () => {

        let priceIs = 0;
        for (let index = 0; index < chartList.length; index++) {
            priceIs = chartList[index].totalPrice + priceIs;

        }
        setTotalAmount(priceIs)

    }


    const renderCheckOutItems = (item, index) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{ flex: 0.6 }}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.amountText}>AED {item.totalPrice}.00</Text>
                    <View style={styles.addRemove}>
                        <Pressable style={styles.addplusContainer}
                            onPress={() => { removeChart(item, index) }}
                        >
                            <Image
                                style={styles.addImage}
                                source={require('../../assets/Market/minus.png')}
                                resizeMode="contain" />
                        </Pressable>

                        <View style={styles.addviewContainer}>
                            <Text style={styles.addShowText}>{item.itemSelected}</Text>
                        </View>

                        <Pressable style={styles.addplusContainer}
                            onPress={() => { addChart(item, index) }}
                        >
                            <Image
                                style={styles.addImage}
                                source={require('../../assets/Market/add.png')}
                                resizeMode="contain" />
                        </Pressable>

                    </View>
                </View>
                <View style={{ flex: 0.4 }}>
                    <Image
                        style={styles.receiptItemImage}
                        source={item.imageUrl}
                        resizeMode="contain" />

                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                onlySearchBar={false}
                isSearhButton={false}
                isMiddleText={true}
                middleText={"Check Out"}
                backOnPress={() => { Navigation.pop(props.componentId) }}
                isBackButton={true}
                isMoreButton={false}
                callBackMoreButton={() => { setAlertPopup(!alertPopup); setIsMore(true) }}
            />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 90,
                }}>


                <View style={styles.receiptContainer}>

                    <Image
                        style={styles.receiptBgImage}
                        source={require('../../assets/Market/logo.jpeg')}
                        resizeMode="contain" />

                    <View style={{ flex: 0.1, padding: 5, alignItems: 'flex-end' }}>
                        <View style={styles.flex1}>
                            <Text style={styles.flex1Text}>Booking Date : Thursday July 21 2020</Text>
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.flex1Text}>Booking Time : 12:30 AM</Text>
                        </View>
                    </View>


                    <View style={{ flex: 0.1, padding: 5, }}>
                        <View style={styles.flex1}>
                            <Text style={styles.flex1Text2}>Hi Mr DUDI!</Text>
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.flex1Text2}>Hor Al Anz Dubai</Text>
                        </View>
                    </View>



                    <View style={{

                        opacity: 0.8,
                        backgroundColor: themes.lightBlue.bgLightGrayColor
                    }}>
                        {chartList.map((item, index) => {
                            return (
                                renderCheckOutItems(item, index)
                            )
                        })}


                    </View>

                </View>



                <View style={styles.promoConatiner}>

                    <View style={styles.promoTextInputButton}>
                        <View style={styles.promoTextInputContainer}>
                            <TextInput
                                style={styles.promoTextInput}
                                onChangeText={(text) => setPromocode(text)}
                                value={promocode}
                                placeholder={"Enter coupon"}
                                placeholderTextColor="gray"
                            />
                        </View>

                        <View style={styles.promoButtonContainer}>
                            <TouchableOpacity style={styles.promoTextConbtainer} onPress={() => applypromo()}>
                                <Text style={styles.promoText}>PROMO APPLY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>


                <View style={{
                    flex: 0.1, justifyContent: 'center',
                    margin: 15, marginTop: 0,
                    marginBottom: 3,
                    backgroundColor: themes.lightBlue.bgButton,
                }}>

                    <View style={{ flex: 0.1, padding: 5, minHeight: 50, justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Total Amount</Text>
                        </View>

                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>AED {totalAmount}.00</Text>
                        </View>
                    </View>


                </View>

                <View style={styles.vatTextContainer}>
                    <Text style={styles.vatText}>Vat is included in that amount
                    </Text>
                </View>


            </ScrollView>

            <View style={styles.checkOutButton}>
                <TouchableOpacity style={styles.buyButton} onPress={() => bycard()}>

                    <Text style={styles.checkoutText}>BUY ONE ITEMS FOR AED {totalAmount}.00</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>

    )
}



