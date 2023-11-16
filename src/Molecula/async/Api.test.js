import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from "axios";
import ApiPrueba from './ApiPrueba';

jest.mock('axios');

test('fetches and displays a list of users', async () => {
    const mockedUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
  
    axios.get.mockResolvedValue({ data: mockedUsers });
  
    render(<ApiPrueba />);
  
   
    await waitFor(() => {
      screen.getByText('John')
      screen.getByText('Jane')
    });

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
    expect(axios.get).toHaveBeenCalledTimes(1)
  });