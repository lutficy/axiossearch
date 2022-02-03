import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BGClouds } from './assets/background';
import SearchBar from './src/components/SearchBar';


const App = () => {

  const [weather, setWeather] = useState([])
  const [main, setMain] = useState([])
  const [sys, setSys] = useState([])
  const [data, SetData] = useState({})


  const getData = async () => {
    try {
      const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
          q: 'jakarta',
          appid: '9de173c630a48a58999180c48427d169',
          units: 'metric'
        }
      })
      console.log(result)
      setWeather(result.data.weather)
      setMain(result.data.main)
      setSys(result.data.sys)
      SetData(result.data)
    } catch (error) {
      alert.alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BGClouds}>
        <View>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', padding: 15 }}>Weather App</Text>
        </View>
        <View>
          <SearchBar getData={getData} />
        </View>
        {weather && weather.map((item, index) => {
          return <>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 20, color: 'white' }}>{main.temp}°C</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>{item.id}</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>{main.feels_like}</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 3, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>{data.name}, {sys.country}</Text>
                <Image style={{ width: 50, height: 50 }} source={{ uri: `http://openweathermap.org/img/w/${item.icon}.png` }} />
              </View>
            </View>
          </>
        })}
      </ImageBackground>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
