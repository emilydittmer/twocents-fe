import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
} from 'react-native';
import { LogOutPopup } from '../LogOutPopup/LogOutPopup'
import { connect } from 'react-redux';
import { isLoggedIn } from '../../actions'

export class UserScreen extends Component {
  constructor() {
    super()
    this.state = {
      popupVisible: false,
    }
  }

  static navigationOptions = ({ navigation }) => {
      return {
        title: 'My Profile',
        headerStyle: {
          backgroundColor: '#2C2540',
          borderBottomWidth: 0,
      },
      };
    }; 

    handlePopup = (boolean) => {
      this.setState({popupVisible: boolean})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri:this.props.loggedIn.photoUrl}} alt='{this.props.name} Profile Picture'/>
        </View>
        <View style={styles.info}>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Name</Text>
            <Text style={styles.minorText}>{this.props.loggedIn.name}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Email</Text>
            <Text style={styles.minorText}>{this.props.loggedIn.email}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Recommendations</Text>
            <Text style={styles.minorText}>{this.props.allRecommendations.length}</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={.5} 
          onPress={() => this.setState({popupVisible: true})}  
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <LogOutPopup 
          popupVisible={this.state.popupVisible}
          handlePopup={this.handlePopup}
          navigation={this.props.navigation}
          logOut={this.props.isLoggedIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  info: {
    paddingTop: '10%',
    height: '75%',
    width: '100%',
    alignItems: 'center',
  },
  textBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
    margin: 30,
  },
  mainText: {
    color: '#EE933F',
    fontSize: 30,
  },
  minorText: {
    color: '#CCC0DD',
    fontSize: 25,
    paddingLeft: 30,
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
    width: '80%',
    alignItems: 'center',
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageBox: {
    width: '80%',
    height: '20%',
  }
});

export const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations,
  loggedIn: state.loggedIn
})

export const mapDispatchToProps = dispatch => ({
  isLoggedIn: (user) => dispatch(isLoggedIn(user)),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);