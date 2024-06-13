import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: '#ADD8E6',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  task: {
    padding: 16,
    borderWidth: 1,
    marginTop: 10,
  },
  textTask: {
    color: 'black',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    color: 'black',
    width: '100%',
    marginBottom: 16,
  },
  error: {
    color: 'red',
  },
});

export default styles;
