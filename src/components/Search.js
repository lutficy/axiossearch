import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconSearch } from '../../assets/bakcgroundImages/Icon'


const SearchComponent = ({ fetchWeatherData }) => {

    const [cityName, setCityName] = useState('')

    return (
        <View style={styles.searchwrapper}>
            <TextInput
                style={styles.textinput}
                placeholderTextColor='white'
                placeholder='Type City Name'
                value={cityName}
                onChangeText={(text) => setCityName(text)} />
            <TouchableOpacity onPress={() => fetchWeatherData(cityName)}>
                {/* <IconSearch /> */}
                <Text>Cari!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchwrapper: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderColor: 'rgba(0,0,0,0.15)',
        // elevation: 5
    },
    textinput: {
        color: 'white'
    }
})
