import React, { useState, useEffect } from 'react';
import { View, Text,ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ?(<ActivityIndicator size="large" color="#0000ff" />
      ): (
          <Text style= {styles.text} >Retaj Melhem</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
        fontSize: 50,
        textAlign: "center",
      },
});

export default App;
