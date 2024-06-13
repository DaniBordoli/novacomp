import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStackParams';
import styles from '../styles/HomeScreenStyles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TaskScreen')}>
        <Text style={styles.buttonText}>Go to Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListScreen')}>
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
