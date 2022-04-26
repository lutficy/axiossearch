import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './src/components/Search';
import SearchComponent from './src/components/Search';
import { BGHome } from './assets/bakcgroundImages';


const App = () => {

  const [weather, setWeather] = useState()
  const [main, setMain] = useState([])
  const [wind, setWind] = useState([])
  const [data, setData] = useState([])
  const [sys, setSys] = useState([])

  const fetchWeatherData = async (cityName) => {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0f1cfa2cbc2ee164fd04b95a7d7568c8&units=metric&q=${cityName}`)
      setWeather(result.data.weather)
      setMain(result.data.main)
      setWind(result.data.wind)
      setData(result.data)
      setSys(result.data.sys)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWeatherData('jakarta')
  },[])


  return ( 
    <>
      <ImageBackground source={BGHome} style={{ flex: 1 }}>
        <View>
          <SearchComponent fetchWeatherData={fetchWeatherData} />
        </View>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          {weather && weather.map((item, index) => {
            return <>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>{data.name}, {sys.country}</Text>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: '600' }}>{main.temp}</Text>
                <Image style={{ width: 50, height: 50 }} source={{ uri: `http://openweathermap.org/img/w/${item.icon}.png` }} />
              </View>
            </>
          })}
          <View>
            {weather && weather.map((item, index) => {
              return <>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{item.main}</Text>
                </View>
              </>
            })}
          </View>
          <View style={{ marginHorizontal: 10, marginBottom: 20, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.15)' }}>
            <Text>{main.humidity}</Text>
            <Text>{wind.speed}</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
