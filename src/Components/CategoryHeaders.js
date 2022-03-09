import React, { useState, } from 'react';
import {
    View,
    Pressable,
    Text,
} from 'react-native';
import {themes } from '../setup';
import styles from './styles';

const CategoryHeaders = (props) => {
    const [selected, setSelected] = useState(0)

    const renderItem = (item, index) => {
        return (
            <Pressable style={[styles.HeaderButton,
                {
                    backgroundColor:
                        index === selected ?
                            themes.lightBlue.bgDarkThemeColor
                            :
                            themes.lightBlue.bgLightGrayColor
                }
            ]}
                onPress={() => { setSelected(index) }}>
                <Text style={[styles.HeaderText,
                    {
                        color:
                            index === selected ?
                                themes.lightBlue.textDarkThemeColor
                                :
                                themes.lightBlue.bgDarkGrayColor
                    }
                ]}>
                    {item.name.toUpperCase()}
                </Text>

            </Pressable>
        )

    }
    return (
        <View style={styles.HeaderContainer}>

            {[{ name: "Dudi" }, { name: "Services" }, { name: "Grocery" },].map((item, index) => {
                return (
                    renderItem(item, index)
                )
            })}

        </View>
    );
};

export default CategoryHeaders;