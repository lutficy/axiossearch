import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchData: '',
      dataWeather: [],
      dataCity: {}
    }
  }

  getData = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=9de173c630a48a58999180c48427d169&q=' + this.state.searchData)
      .then((respons) => respons.json())
      .then((json) => this.setState({ dataWeather: json.weather, }, () => console.log(json)))
      .catch((error) => console.log(error))
  }

  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'black', height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, color: 'white' }}>Weather App</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <TextInput
              style={{ borderWidth: 1, flex: 1, paddingHorizontal: 10, borderRadius: 10 }}
              placeholder='Type city name'
              onChangeText={(value) => this.setState({ searchData: value })}
            />
            <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => this.getData()}>
              <Text>CARI!</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.dataWeather}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', paddingBottom: 10, padding: 10 }}>
                {/* <Image source={{ uri: item.urlToImage }} style={{ height: 150, width: 100 }} /> */}
                <View style={{ paddingLeft: 10 }}>
                  <Text>{item.main}</Text>
                  <Text>{item.id}</Text>
                </View>
              </View>
            )}
            />
            <Text>{main.temp}</Text>
        </View>
      </View>
    )
  }
}
