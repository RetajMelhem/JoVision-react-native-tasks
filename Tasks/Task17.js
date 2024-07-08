import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


export default class App extends Component {

constructor() {
    super();
    this.state = {
      content: true,
      buttonText: 'Show'
    }
  }


componentHideAndShow = () => {
    this.setState(previousState => ({
      content: !previousState.content,
      buttonText: previousState.content ? 'Hide' : 'Show'
    }));
  }
  render() {

    return (
      <View style={styles.container}>

       {

        this.state.content ? <Text style= {styles.headerText}> Retaj Melhem </Text> : null
      }

      <Button title={this.state.buttonText} onPress={this.componentHideAndShow} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",

  },

});
