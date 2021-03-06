import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state ={
      input: '',
    }
  }
  render() {
    const handleChange = enteredText => {
      this.setState({input: enteredText})
    }  
    const handleSubmit = () => {
      this.setState({input: ''})
      this.props.getSearchResults(this.state.input)
    }


    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Enter saved location'
          style={styles.input}
          value={this.state.input}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
          returnKeyType={ 'search' }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    height: 35,
    width: '84%',
    borderRadius: 20,
  },
  input: {
    width: '90%',
    color: '#FFF',
  }
});


export default SearchBar;