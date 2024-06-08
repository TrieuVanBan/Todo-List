import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Layout, List, ListItem, Text, Icon, Input, Button, Card, Modal, Datepicker } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";
import { addToTodos, setDeleteTodo } from "../store/todoSlice";
import { showToast } from '../components/Toast/Toast';
import { ModalComfirm } from '../components/ConfirmModal/Modal';
import styles from './styles/TodoStyles';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const TodoListScreen = () => {

  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const now = new Date();
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todoLists = useSelector((state) => state.todo.todos);

  const [visible, setVisible] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState();


  const [searchTask, setSearchTask] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [taskList, setTaskList] = useState(todoLists);

  useEffect(() => {
    setTaskList(todoLists);
  }, [todoLists]);


  const handleAddTodo = () => {
    if (title) {
      dispatch(addToTodos({ title, description, time: date, tag }));
      clearModalState();
      setVisible(false);
    }
  };

  const onRemoveTask = (id) => {
    setIsOpenConfirmModal(true);
    setDeleteId(id);
  };
  const onDeleteTask = () => {
    dispatch(setDeleteTodo(deleteId));
    showToast({ type: 'success', message: "Remove task successfully" });
    setIsOpenConfirmModal(false);
  };


  const onChangeInput = (val) => {
    setSearchTask(val);
    const newTaskList = val ? todoLists?.filter(el => el.title?.toLowerCase()?.includes(val?.toLowerCase())) : todoLists;
    setTaskList(newTaskList);
  };

  const clearModalState = () => {
    setTitle('');
    setDescription('');
    setDate(new Date());
    setTag('');
  };

  const onCancelAdd = () => {
    clearModalState();
    setVisible(false);
  };

  const renderTodoItem = ({ item }) => (
    <ListItem style={{ marginVertical: 10, borderRadius: 10 }}>
      <Layout style={styles.wrapItem}>
        <Layout style={styles.taskItem}>
          <Text style={styles.titleTask}>{item?.title}</Text>
          <Text style={styles.description}>{item?.description}</Text>
          <Layout style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
            <Text style={styles.time}>{item?.time?.toLocaleDateString() || dayjs().format('DD/MM/YYYY')}</Text>
            {item?.tag?.split(',').map((item, idx) =>
              <Text key={idx} style={[styles.tag, { backgroundColor: getRandomColor(), }]}>{item.trim()}</Text>)}
          </Layout>
        </Layout>

        <TouchableOpacity onPress={() => onRemoveTask(item.id)} style={styles.iconRemove}>
          <Ionicons name="trash" size={30} color="red" />
        </TouchableOpacity>

      </Layout>
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Search Task ..."
        value={searchTask}
        onChangeText={onChangeInput}
        style={styles.input}
      />

      {taskList?.length ? <List
        data={taskList}
        renderItem={renderTodoItem}
        style={{ backgroundColor: '#d8eaf2' }}
      /> : (
        <Layout style={{ backgroundColor: '#d8eaf2', justifyContent: "center", alignItems: "center", marginTop: '30%' }}>
          <Image
            source={require('../assets/no-task.png')}
            style={styles.image}
          />
          <Text style={styles.noTaskTitle}>No Task!</Text>
          <Text style={styles.noTaskDes}>There is no pending task!</Text>
          <Button style={{ width: 150 }} onPress={() => setVisible(true)}>New Task</Button>
        </Layout>
      )}
      <TouchableOpacity style={styles.btnAdd} onPress={() => setVisible(true)}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={onCancelAdd}
      >
        <Card disabled={true} style={styles.modalAddBody}>
          <ScrollView>
            <Text style={styles.titleModal}>
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
            <Input
              placeholder="Input Tag"
              value={tag}
              onChangeText={setTag}
              textStyle={styles.inputTag}
              style={{ marginTop: 20 }}
            />
            <Datepicker
              date={date}
              min={yesterday}
              onSelect={nextDate => setDate(nextDate)}
              style={{ marginTop: 20 }}
            />

          </ScrollView>
          <Button onPress={handleAddTodo} style={styles.button}>
            Create
          </Button>
        </Card>
      </Modal>

      <ModalComfirm
        visible={isOpenConfirmModal}
        headerQuestion='Are you sure?'
        detailQuestion=' Do you really want to delete this records? This process cannot be undone.'
        onCancel={() => setIsOpenConfirmModal(false)}
        onConfirm={onDeleteTask}
      />
    </Layout >
  );
};

export default TodoListScreen;