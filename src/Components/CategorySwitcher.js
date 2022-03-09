import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    I18nManager,
    Pressable,
    Text,
    FlatList,
} from 'react-native';
import { themes } from '../setup';
import styles from './styles';

const _spacing = 10;

export default function SwitcherFlatList(props) {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const [viewPosition, setViewPosition] = useState(0.5);
    const [buttonPress, setButtonPress] = useState(false);

    useEffect(() => {
        if (index && ref?.current) {
            ref.current?.scrollToIndex({
                index: I18nManager.isRTL && Platform.OS === "ios" ? props.data.length - 1 - index : index,
                animated: true,
                viewPosition: 0.5, // in view center or lrft right
                viewOffset:
                    viewPosition === 0.5 || viewPosition === 1 ? 0 :
                        _spacing // spacing in left right
            })
        }
        if (props.selectedSwitch && ref?.current) {
            setIndex(props.selectedSwitch.id)
            ref.current?.scrollToIndex({
                index: I18nManager.isRTL && Platform.OS === "ios" ? props.data.length - 1 - index : index,
                animated: true,
                viewPosition: 0.5, // in view center or lrft right
                viewOffset:
                    viewPosition === 0.5 || viewPosition === 1 ? 0 :
                        _spacing // spacing in left right
            })

        }

    }, [
        index, props.selectedSwitch
    ])


    return (
        <View style={styles.Switchercontainer}>
            <FlatList
                ref={ref}
                style={{
                    flexGrow: 0,

                }}
                data={props.data}
                initialScrollIndex={index}
                onScrollToIndexFailed={info => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        ref.current?.scrollToIndex({ index: info.index, animated: true });
                    });
                }}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingLeft: _spacing }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item, index: fIndex }) => {
                    return (
                        <Pressable onPress={() => {
                            setIndex(fIndex)
                            props.callBackSecMeetingTabSwitch(item, fIndex)
                        }}>
                            <View
                                style={[styles.SwitcherButton,
                                {
                                    marginRight: _spacing,
                                    borderColor: fIndex === index ? themes.lightBlue.bgDarkThemeColor : themes.lightBlue.bgLightGrayColor,

                                }]}>
                                <Text

                                    style={[styles.SwitcherText,
                                    {
                                        color: fIndex === index ? themes.lightBlue.textDarkThemeColor : themes.lightBlue.bgDarkGrayColor,

                                    }
                                    ]}>
                                    {item.titleEn}
                                </Text>

                            </View>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}