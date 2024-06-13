import tasksReducer, {addTask} from '../../../src/redux/tasksSlice';

test('should return the initial state', () => {
  expect(tasksReducer(undefined, {type: 'unknown'})).toEqual({
    tasks: [],
  });
});

test('should handle addTask', () => {
  const actual = tasksReducer({tasks: []}, addTask('Test Task'));
  expect(actual.tasks.length).toEqual(1);
  expect(actual.tasks[0].description).toEqual('Test Task');
});
