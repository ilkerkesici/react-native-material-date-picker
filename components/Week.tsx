import React from 'react';
import { View, StyleSheet } from 'react-native';
import Day from './Day';
import { areDatesEqual } from '../helper';

const Week = (props: IWeek) => {
    const { week, currentDate, dayColor, dayOnPress, startDate, endDate } = props;
    return(
        <View style={styles.container}>
            {week.map((date, index) => <Day key={index} 
                    onPress={dayOnPress} 
                    pressedColor={dayColor} 
                    date={date} 
                    isPressed={areDatesEqual(currentDate, date)} 
                    disable={date < startDate || date > endDate}
                />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    }
});

interface IWeek {
    dayOnPress: (date: Date) => void,
    dayColor?: string,
    currentDate: Date,
    week: Date[],
    startDate: Date,
    endDate: Date
}

export default Week;