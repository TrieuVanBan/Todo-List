import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Input, Button, Text, TopNavigation } from '@ui-kitten/components';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập tại đây
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20
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
});

export default LoginScreen;