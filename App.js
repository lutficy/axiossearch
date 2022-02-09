import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './src/components/SearchBar';


const App = () => {

  const [weather, setWeather] = useState()
  const [main, setMain] = useState([])
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      const result = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'jakarta',
          appid: '9de173c630a48a58999180c48427d169',
          units: 'metric'
        }
      })
      console.log(result)
      setWeather(result.data.weather)
      setMain(result.data.main)
      setData(result.data)
    } catch (error) {
      // alert.alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      {/* {console.log(data)} */}
      <View>
        <SearchBar />
      </View>
      {weather && weather.map((item, index) => {
        return <>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
         
          <Text>{main.temp}</Text>
            <Text>{item.description}</Text>
            <Text>{item.id}</Text>
            <Image style={{ width: 50, height: 50 }} source={{ uri: `http://openweathermap.org/img/w/${item.icon}.png` }} />
          </View>
        </>
      })}
      <View style={{alignItems: 'center'}}>
        <Text>{main.humidity}</Text>
        <Text>{data.name}</Text>
        <Text>{data.weather.id}</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
