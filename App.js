/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {EmailTextInput} from './EmailTextInput';
import {StyleSheet, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <EmailTextInput/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
});
