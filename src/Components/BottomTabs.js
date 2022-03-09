import React from 'react';
import {
Image,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
} from 'react-native';
import {  moderateScale } from 'react-native-size-matters'
const { width,height } = Dimensions.get('window');
const BottomTabs = (props) => {

    return (


        <View style={[{flexDirection:"row",justifyContent:"center",alignItems:"center",
        backgroundColor:"white",
        height:60,
        borderTopWidth:4,
        borderColor:"red",
        // position:"absolute",
        // bottom:0
        },
        props.styles
        ]}>
            {data1.map((item, index) =>
            <Pressable 
            onPress={()=>{props.tabPressed(index)}}
            style={{flex:1/data1.length,
                
            justifyContent:"center",alignItems:"center",}}>
                
                    {index === 2 &&
                    <View style={{position:"absolute",backgroundColor:"white",
                    height:"100%",width:"100%",
                    
                    zIndex:-1
                    }}>
                        
                    </View>
            }
             <Image
                    style={[
                        index === 2 ?
                        {marginTop:-moderateScale(14)}
                        :
                        {},
                        { width:
                            
                            index === 2 ? moderateScale(48) : moderateScale(40),
                            height:
                            
                            index === 2 ? moderateScale(55) : moderateScale(40),
                       
                }]}
                    source={item.imageUrl}
                    resizeMode="contain" />
{index === 2 &&
                    <View style={{position:"absolute",backgroundColor:"white",
                    top:-25,height:"100%",width:"100%",
                    borderRadius:100,
                    borderWidth:4,
                    borderColor:"red",
                    
                    zIndex:-1000
                    }}>
                    </View>
            }
            </Pressable>
                           
                        )} 
            </View>

    );
};

const styles = StyleSheet.create({
    
});

const data1 = [
    {
        id: '0', 
        value: 'Nalia Yasmeen',
        imageUrl: require('../../assets/listing/u3.png'),
    },
    {
        id: '1', 
        value: 'Nalia Yasmeen',
        imageUrl: require('../../assets/listing/u1.png'),
    },
    {
        id: '2', 
        value: 'Nalia Yasmeen',
        imageUrl: require('../../assets/listing/click.png'),
    },
    {
        id: '3', 
        value: 'Nalia Yasmeen',
        imageUrl: require('../../assets/listing/u1.png'),
    },
    {
        id: '4', 
        value: 'Nalia Yasmeen',
        imageUrl: require('../../assets/listing/u3.png'),
    },
]

export default BottomTabs;
