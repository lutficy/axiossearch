import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {

  const [weather, setWeather] = useState()
  const [main, setMain] = useState([])
  const [sys, setSys] = useState([])
  const getData = async () => {
    try {
      const result = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'jakarta',
          appid: '9de173c630a48a58999180c48427d169',
          units: 'metric'
        }
      })
      setWeather(result.data.weather)
      setMain(result.data.main)
      setSys(result.data.sys)
    } catch (error) {
      // alert.alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      {/* {console.log()} */}
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', padding: 15}}>Weather App</Text>
      </View>
      {weather && weather.map((item, index) => {
        return <>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>{main.temp}°C</Text>
            <Text>{item.id}</Text>
            <Text>{main.pressure}</Text>
            <Text>{sys.country}</Text>
            <Image style={{ width: 50, height: 50 }} source={{ uri: `http://openweathermap.org/img/w/${item.icon}.png` }} />
          </View>
        </>
      })}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
