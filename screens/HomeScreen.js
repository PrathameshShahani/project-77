import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image source={require('../assets/main-icon.png')} style={{width:300,height:300}}/>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
              <Text style={styles.routeText}>Space Crafts</Text>
              <Image source={require('../assets/space_crafts.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('StarMap')}>
              <Text style={styles.routeText}>Star Map</Text>
              <Image source={require('../assets/star_map.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('DailyPic')}>
              <Text style={styles.routeText}>Daily Pictures</Text>
              <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center',
    paddingTop:30,
    paddingBottom:30
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183,183,183,0.5)',
    fontSize: 150,
    right: 20,
    bottom: -25,
    zIndex: -1
  },
  iconImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    resizeMode: 'contain',
    right: 20,
    top: 20
  }
})