import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../src/redux/store';
import TaskScreen from '../../../src/screens/TaskScreen';

test('renders TaskScreen and handles adding a task', async () => {
  const {getByText, getByPlaceholderText} = render(
    <Provider store={store}>
      <TaskScreen />
    </Provider>,
  );

  fireEvent.press(getByText('New Task'));

  const input = getByPlaceholderText('Task Description');
  fireEvent.changeText(input, 'Test Task');

  fireEvent.press(getByText('Add Task'));

  await waitFor(() => {
    expect(getByText('Test Task')).toBeTruthy();
  });
});
