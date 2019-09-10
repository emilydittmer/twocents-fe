import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Expo from 'expo';
import * as Google from 'expo-google-app-auth';
import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';
import { IOS_CLIENT_ID } from 'react-native-dotenv';
import googleLogin from '../../images/btn_google_signin_light_normal_web.png'

export class LogInScreen extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      name: '',
      image: ''
    }
  }

  signUp = async () => {
    
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId:
          GOOGLE_CLIENT_ID,
        iosClientId: 
          IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      })

      if (type === "success") {
        this.setState({
          signedIn: true,
          name: user.name,
          photoUrl: user.photoUrl
        })
        console.log(user)
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log(e)
      console.log("error-last", e)
    }
  }

  render() {
    
    return(
      <View style={styles.container}>
        <View style={styles.appLogo}>
          <Image
            source={require("../../images/twocents-logo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>TwoCents</Text>
        </View>
        <View style={styles.description}>

        </View>
        <View style={styles.loginButtons}>
          <TouchableOpacity 
            // style={styles.button} 
            activeOpacity={.5} 
            onPress={this.signUp}  
          >
            <Image source={googleLogin}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={.5} 
            onPress={() => this.props.navigation.navigate( {routeName: 'Home'} )}  
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '5%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  appLogo: {
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginBottom: '10%',
  },
  image: {
    height: '90%',
    width: '60%',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  },
  description: {
    height: '40%',
    width: '90%',
    marginBottom: '10%',
    borderColor: '#EE933F',
    borderWidth: 1
  },
  loginButtons: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '20%',
    width: '90%',
  },
  buttonText: {
    color: '#CCC0DD',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'rgba(204, 192, 221, 0.14)',
    borderWidth: 1,
    borderColor: '#EE933F',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  
})