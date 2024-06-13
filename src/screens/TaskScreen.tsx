import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {addTask} from '../redux/tasksSlice';
import styles from '../styles/TaskScreenStyles';

const TaskScreen: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
      setErrorMessage('');
      setModalVisible(false);
    } else {
      setErrorMessage('The field must be completed');
    }
  };

  const handleOpenModal = () => {
    setTaskDescription('');
    setErrorMessage('');
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>New Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.task}>
            <Text style={styles.textTask}>{item.description}</Text>
          </View>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Task Description"
              value={taskDescription}
              onChangeText={setTaskDescription}
              style={styles.input}
            />
            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskScreen;
