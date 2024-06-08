import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { Layout, Input, Button, Text, TopNavigation } from '@ui-kitten/components';
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/authSlice";
import styles from './styles/LoginStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('user@ban.com');
  const [password, setPassword] = useState('123456');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(addUser({ email, password }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Image
          source={require('../assets/to-do-list.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Let's get started!</Text>
        <Text style={styles.title}>EMAIL ADDRESS</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.title}>PASSWORD</Text>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button onPress={handleLogin} style={styles.button}>
          Đăng nhập
        </Button>
        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default LoginScreen;