import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DAY_SIZE } from '../consts';

const DaysTab = (props: IDaysTab) => {
    const { days } = props;
    const listOfKeys = Object.keys(days);
    return(
        <View style={styles.container}>
            {
                listOfKeys.map((day, index) => {
                    const dayString = days[day];
                    return(
                        <View style={styles.dayContainer} key={index}>
                            <Text style={styles.text}>{dayString[0].toUpperCase()}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginBottom: 5
    },
    dayContainer:{
        width: DAY_SIZE + 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 14,
        color: '#757575'
    }
})

export default DaysTab;



interface IDaysTab{
    days: any
}
