/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import ListScreen from './src/screens/ListScreen';
import {RootStackParamList} from './src/navigation/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="TaskScreen" component={TaskScreen} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
