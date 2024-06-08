import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#d8eaf2",
    paddingTop: 50
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    // flex: 1,
    marginRight: 8,
    marginBottom: 10,
    borderRadius: 10
  },
  addButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 30,
    bottom: 40,
    backgroundColor: '#676AEE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 15
  },
  taskItem: {
    maxWidth: '90%'
  },
  titleTask: {
    fontWeight: '700',
    fontSize: 18
  },
  description: {
    // paddingLeft: 5
    marginVertical: 5
  },
  time: {
    fontWeight: '500',
    color: "blue",
    marginRight: 10
  },
  iconRemove: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputDescription: {
    minHeight: 64,
  },
  modalAddBody: {
    width: 400,
    minHeight: 350,
  },
  titleModal: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
  },
  tag: {
    // borderWidth: 1,
    marginRight: 5,
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    color: 'white', marginTop: 10
  },
  inputTag: {
    borderRadius: 10
  },
  noTask: {
    width: 200,
    height: 200
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 40
  },
  noTaskTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40
  },
  noTaskDes: {
    fontSize: 20,
    marginVertical: 15,
  }
});

export default styles;