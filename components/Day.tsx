import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { areDatesEqual } from '../helper';
import { DAY_SIZE } from '../consts';

const Day = (props: IDay) => {
    const { date, isPressed, onPress, pressedColor, disable } = props;
    const isToday = areDatesEqual(new Date, date);
    let wrappedBackground = disable ? '#D3D3D3' : '#fff';
    if(isPressed) wrappedBackground = pressedColor || '#00B0FF';
    else if(isToday) wrappedBackground = '#D3D3D3';
    return(
        <TouchableOpacity onPress={() => onPress(date)} style={[styles.container]}>
            {!disable && 
            <View style={[styles.wrapper, {backgroundColor: wrappedBackground}]}>
                <Text style={isPressed ? styles.pressedText : styles.todayText}>{date.getDate()}</Text>
            </View>}
        </TouchableOpacity>
    );
}

interface IDay {
    date: Date,
    isPressed: boolean,
    onPress: (date: Date) => void,
    pressedColor?: string,
    disable: boolean
}

export default Day;

const styles=  StyleSheet.create({
    container:{
        width: DAY_SIZE + 6,
        height: DAY_SIZE + 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disable:{
        backgroundColor: '#D3D3D3'
    },
    wrapper:{
        width: DAY_SIZE ,
        height: DAY_SIZE ,
        borderRadius: DAY_SIZE  / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todayText:{
        color: '#000',
        fontSize: 14
    },
    pressedText: {
        color: '#fff',
        fontSize: 16
    },
});