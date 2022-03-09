
import React, { useEffect, useState, useRef } from 'react';
import {
    FlatList,
    View, Text,
    SafeAreaView,
    Pressable,
    Image,
} from 'react-native';
import { moderateScale, Navigation, moment, themes } from '../../setup'
import Header from '../../Components/Header';
import Separator from '../../Components/Separator';
import CategoryHeaders from '../../Components/CategoryHeaders';
import CategorySwitcher from '../../Components/CategorySwitcher';
import styles from './styles';

export default function TopBar(props) {
    const [activeTab, setActiveTab] = useState(0);
    const [chartCount, setChartCount] = useState(0);
    const [chartList, setChartList] = useState([]);
    const [chartData, setChartData] = useState(dummyArray);
    const [totalAmount, setTotalAmount] = useState(0);


    const addToChart = (item,index) => {
        chartData[index].selected = true;
        chartData[index].itemSelected = 1;
        chartData[index].totalPrice = chartData[index].price;
        setChartData(chartData)
        let arrayIs = [...chartList]
        arrayIs.push(item)
        setChartList(arrayIs)
        setChartCount(chartCount + 1)
        calculatePrice()
    }

    const calculatePrice = async () => {

        let priceIs = 0;
          for (let index = 0; index < chartData.length; index++) {
               priceIs = 
               chartData[index].selected ? 
               chartData[index].price + priceIs
               :
               priceIs
               ;
             console.log("lasjkldashdkashdkas",priceIs,totalAmount)
          }
          setTotalAmount(priceIs)
    
    }

    const getActiveTab = () => {

        switch (activeTab) {
            case 0:
                return JobsScreen(props);

        }
    }

    const JobsScreen = (props) => (
        <FlatList
            data={chartData}
            numColumns={2}
            style={{ flex: 1, marginTop: moderateScale(5) }}
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
        />
    );


    const ItemView = ({ item, index }) => {

        return (
            <Pressable style={styles.ItemContainer}
                onPress={() => {
                    Navigation.push(props.componentId, {
                        component: {
                            name: 'ProductDetailsScreen',
                            passProps: { item, fromMessageScreen: true },
                            options: {
                                topBar: {
                                    visible: false
                                }
                            }
                        },
                    });
                }}
            >
                <View style={styles.center}>
                    <Image
                        style={styles.image}
                        source={item.imageUrl}
                        resizeMode="contain" />
                        {!item.selected &&
                    <Pressable style={styles.add}
                        onPress={() => {
                            addToChart(item,index)
                        }}
                    >
                        <Image
                            style={{
                                width: moderateScale(28), height: moderateScale(28),
                            }}
                            source={require('../../assets/Market/addchart.png')}
                            resizeMode="contain" />
                    </Pressable>
                    }
                </View>

                <View style={styles.priceRow}>
                    <View style={styles.priceContainer}>
                        <Text numberOfLines={2} style={[{ fontSize: moderateScale(12) }, { color: themes.lightBlue.textLightGrayColor }]}>
                            AED
                            <Text numberOfLines={2} style={[{ fontSize: moderateScale(16), fontWeight: "600" }, { color: "black" }]}>
                                {' '}{item.price}.00
                            </Text>
                        </Text>
                        {item.offer &&
                            <Text numberOfLines={1} style={[{ fontSize: moderateScale(12), textDecorationLine: 'line-through', textDecorationStyle: 'solid' }, { color: themes.lightBlue.textLightGrayColor }]}>
                                AED {item.offer}{".00"}
                            </Text>
                        }
                    </View>
                    {item.off &&
                        <View style={styles.offerContainer}>
                            <Text numberOfLines={1} style={[{ fontSize: moderateScale(9) }, { color: "white", }]}>
                                {item.off}
                            </Text>
                        </View>
                    }

                </View>


                <View style={styles.detailsContainer}>
                    <View style={styles.details}>
                        <Text numberOfLines={2} style={[{ fontSize: moderateScale(12) }, { color: themes.lightBlue.textLightGrayColor }]}>
                            {item.title}
                        </Text>
                        <Text numberOfLines={1} style={[{ fontSize: moderateScale(12) }, { color: themes.lightBlue.textLightGrayColor }]}>
                            {item.designation}
                        </Text>
                    </View>


                </View>


                <View style={styles.detailsContainer}>
                    <View style={{ justifyContent: "center", flex: 0.15 }}>
                        <Image
                            style={{
                                width: moderateScale(16), height: moderateScale(16),
                            }}
                            source={require('../../assets/Market/rocket.png')}
                            resizeMode="contain" />
                    </View>

                    <View style={{ justifyContent: "center", flex: 0.85 }}>
                        <Text numberOfLines={1} style={[{ fontSize: moderateScale(12) }, { color: "black", }]}>
                            Arrives
                            <Text numberOfLines={1} style={[{ fontSize: moderateScale(12) }, { color: themes.lightBlue.textDarkThemeColor }]}>
                                {'   '}{item.arrive}
                            </Text>
                        </Text>
                    </View>



                </View>

                {item.subscribe &&
                    <View style={styles.subscribe}>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 0.5, backgroundColor: themes.lightBlue.bgButton2, padding: 8 }}>
                            <Text numberOfLines={1} style={[{ fontSize: moderateScale(12), fontWeight: "700" }, { color: "white", }]}>
                                {item.subscribe}
                            </Text>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", flex: 0.5, backgroundColor: themes.lightBlue.bgDarkThemeColor, padding: 8 }}>
                            <Text numberOfLines={1} style={[{ fontSize: moderateScale(11), fontWeight: "600" }, { color: "black", }]}>
                                Subscribe
                            </Text>
                        </View>
                    </View>
                }


            </Pressable>


        );
    };

    return (

        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white"
            }}
        >
            <Header
                HomeScreen={true}
                borderBottom={false}
                onlySearchBar={false}
                isSearhButton={false}
                isMiddleText={true}
                middleText={"Hi Mr DUDI!"}
                backOnPress={() => { }}
                isBackButton={true}
                isChartButton={true}
                chartCount={chartCount}
                isMoreButton={true}
                callBackMoreButton={() => {
                    if(chartList?.length > 0){
                    Navigation.push(props.componentId, {
                        component: {
                            name: 'CheckOutScreen',
                            passProps: { chartList, fromMessageScreen: true,totalAmount:totalAmount },
                            options: {
                                topBar: {
                                    visible: false
                                }
                            }
                        },
                    });
                }
                }}
            />

            <CategoryHeaders
                createOnPress={() => {
                    setActiveTab(0)

                }}
                jobOnPress={() => {
                    setActiveTab(1)
                }}
                manageOnPress={() => {
                    setActiveTab(2)
                }}

            />

            <Separator
                styles={{
                    height: moderateScale(3),
                    backgroundColor: themes.lightBlue.bgDarkThemeColor
                }}
            />

            <CategorySwitcher
                data={categoryData}
                selectedSwitch={false}
                callBackSecMeetingTabSwitch={(item, index) => {
                    console.log("item,indx", item, index)
                }}
            />
            {getActiveTab()}


        </SafeAreaView>

    );
}

const categoryData = [
    { id: 0, typeId: 1, titleEn: "New Arivals", },
    { id: 1, typeId: 2, titleEn: "Special Offers", },
    { id: 2, typeId: 3, titleEn: "Sale", },
    { id: 3, typeId: 4, titleEn: "Outlets", },
    { id: 4, typeId: 5, titleEn: "Bomper Offer", },
    { id: 5, typeId: 6, titleEn: "Loot Sale", },

];
const dummyArray = [
    {
        id: 0,
        title: 'Carrot',
        designation: "Philpines quality",
        time: new Date(),
        off: "66% OFF",
        price: 7,
        offer: 12,
        arrive: "THURSDAY",
        imageUrl: require('../../assets/Market/carrot.png'),
        location: "Dubai",
        details: "Virtually all of the more important vegetables were cultivated among the ancient civilizations of either the Old or the New World and have long been noted for their nutritional importance. Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. Vegetables are good sources of minerals, especially calcium and iron, and vitamins, principally A and C. Nearly all vegetables are rich in dietary fibre and antioxidants.",
        subscribe: "6% OFF",
        selected:false,
        itemSelected:0,
        totalPrice:0
    },
    {
        id: 1,
        title: 'Onions',
        designation: "Indian brand",
        time: new Date(),
        off: "10% OFF",
        arrive: "MONDAY",
        price: 13,
        offer: false,
        imageUrl: require('../../assets/Market/onion.png'),
        location: "Dubai",
        details: "Virtually all of the more important vegetables were cultivated among the ancient civilizations of either the Old or the New World and have long been noted for their nutritional importance. Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. Vegetables are good sources of minerals, especially calcium and iron, and vitamins, principally A and C. Nearly all vegetables are rich in dietary fibre and antioxidants.",

        subscribe: false,
        selected:false,
        itemSelected:0,
        totalPrice:0
    },
    {
        id: 2,
        arrive: "TODAY",
        title: 'Potato',
        designation: "Japan qulaity good",
        time: new Date(),
        price: 30,
        offer: 40,
        off: false,
        imageUrl: require('../../assets/Market/potato.png'),
        location: "Dubai",
        details: "Virtually all of the more important vegetables were cultivated among the ancient civilizations of either the Old or the New World and have long been noted for their nutritional importance. Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. Vegetables are good sources of minerals, especially calcium and iron, and vitamins, principally A and C. Nearly all vegetables are rich in dietary fibre and antioxidants.",
        subscribe: "60% OFF",
        selected:false,
        itemSelected:0,
        totalPrice:0
    },
    {
        id: 3,
        title: 'Tomato',
        arrive: "YESTERDAY",
        designation: "Turkish delights",
        time: new Date(),
        off: "99% OFF",
        offer: 8,
        price: 4,
        imageUrl: require('../../assets/Market/tomato.png'),
        location: "Dubai",
        details: "Virtually all of the more important vegetables were cultivated among the ancient civilizations of either the Old or the New World and have long been noted for their nutritional importance. Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. Vegetables are good sources of minerals, especially calcium and iron, and vitamins, principally A and C. Nearly all vegetables are rich in dietary fibre and antioxidants.",
        subscribe: "1% OFF",
        selected:false,
        itemSelected:0,
        totalPrice:0
    },

];


