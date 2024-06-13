import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ListScreen from '../../../src/screens/ListScreen';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('fetch-mock-jest');

const mockData = [
  {
    id: '1',
    name: 'Test User',
    avatar: 'https://cdn.fakercloud.com/avatars/mkginfo_128.jpg',
  },
];

fetchMock.get('https://6172cfe5110a740017222e2b.mockapi.io/elements', {
  status: 200,
  body: mockData,
});

test('renders list of elements correctly', async () => {
  const {getByText} = render(<ListScreen />);

  await waitFor(() => {
    expect(getByText('Test User')).toBeTruthy();
  });
});
