import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Layout, List, ListItem, Text, Icon, Input, Button, Card, Modal, Avatar, styled } from '@ui-kitten/components';
import { ModalComfirm } from '../components/ConfirmModal/Modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import styles from './styles/ProfileStyles';


export default function Profile() {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const list = [
    { id: 1, name: 'Change Information', icon: 'information-circle-outline' },
    { id: 2, name: 'App Information', icon: 'desktop-outline' },
    { id: 3, name: 'Change Language', icon: 'language-outline' },
    { id: 4, name: 'Logout', icon: 'exit-outline' },
  ];

  const onLogout = () => {
    dispatch(logout());
  };

  const onPressItem = (item) => {
    if (item.name === 'Logout') {
      setIsOpenConfirmModal(true);
    }
  };

  const renderTodoItem = ({ item }) => (
    <ListItem
      style={{ marginVertical: 10, borderRadius: 10 }}
      onPress={() => onPressItem(item)}>
      <Layout style={styles.wrapItem}>
        <Ionicons name={item.icon} size={30} color={item?.name === 'Logout' ? 'red' : "blue"} />
        <Text style={styles.itemName}>{item?.name}</Text>

        <TouchableOpacity style={styles.iconRemove}>
          <Ionicons name="chevron-forward" size={30} color={item?.name === 'Logout' ? 'red' : "blue"} />
        </TouchableOpacity>

      </Layout>
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <Avatar source={require('../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.email}>{user.email}</Text>
      <List
        data={list}
        renderItem={renderTodoItem}
        style={{ backgroundColor: '#d8eaf2', width: '90%' }}
      />
      {/* <Button onPress={() => setIsOpenConfirmModal(true)}>Logout</Button> */}
      <ModalComfirm
        visible={isOpenConfirmModal}
        headerQuestion='Are you sure?'
        detailQuestion='Do you really want to logout'
        onCancel={() => setIsOpenConfirmModal(false)}
        onConfirm={onLogout}
        bodyStyle={styles.bodyStyle}
      />
    </Layout>
  );
}
