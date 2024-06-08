import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 30
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 10
  },
  input: {
    marginVertical: 8,
    borderRadius: 22
  },
  button: {
    marginVertical: 16,
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: '30%'
  }
});

export default styles;