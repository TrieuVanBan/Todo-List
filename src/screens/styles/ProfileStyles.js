import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#d8eaf2',
    paddingTop: 50
  },
  avatar: {
    height: 150,
    width: 150
  },
  bodyStyle: {
    height: 270
  },
  wrapItem: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10
  },
  itemName: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
  },
  email: {
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 20
  }
});

export default styles;
