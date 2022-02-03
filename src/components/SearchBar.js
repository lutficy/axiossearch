import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IconSearch } from '../../assets/icon';



const SearchBar = ({ getData }) => {

    const [cityName, setCityName] = useState('')

    return (
        <View style={styles.searchwrapper}>
            <TextInput
                placeholderTextColor='white'
                placeholder='Type city name'
                value={cityName}
                onChangeText={(text) => setCityName(text)} />
            <TouchableOpacity onPress={() => getData(cityName)}>
                <Text style={{ color: 'white' }}>Cari</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;



const styles = StyleSheet.create({
    searchwrapper: {
        // marginTop: 5,
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
});
