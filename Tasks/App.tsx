import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      content: true
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }


  render() {

    return (
      <View style={styles.container}>

       {

        this.state.content ? <Text style= {styles.headerText}> Retaj Melhem </Text> : null
      }

      <Button title="Show" onPress={this.componentHideAndShow} />

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