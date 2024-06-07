import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Layout, List, ListItem, Text, Icon, Input, Button, Card, Modal } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";


const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [visible, setVisible] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const todoLists = useSelector((state) => state.todo.todos);

  console.tron.log('visible', visible);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const renderTodoItem = ({ item }) => (
    <ListItem>
      <Layout style={styles.wrapItem}>
        <Layout>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{dayjs().format('DD-MM-YYYY hh:mm')}</Text>
        </Layout>

        <TouchableOpacity onPress={() => setVisible(true)}>
          <Ionicons name="trash" size={40} color="red" />
        </TouchableOpacity>

      </Layout>
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <List
        data={todoLists}
        renderItem={renderTodoItem}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => setVisible(true)}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true} style={styles.modalAddBody}>
          <Text>
            Add new todo
          </Text>
          <Input
            placeholder="Input Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <Input
            placeholder="Input Description"
            value={description}
            onChangeText={setDescription}
            textStyle={styles.inputDescription}
            style={{ marginTop: 20 }}
            multiline
          />
          <Button onPress={handleAddTodo} style={styles.button}>
            Create
          </Button>
        </Card>
      </Modal>
    </Layout >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    // flex: 1,
    marginRight: 8,
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
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputDescription: {
    minHeight: 64,
  },
  modalAddBody: {
    width: 400,
    height: 300,
  },
  button: {
    marginTop: 20
  }
});

export default TodoListScreen;