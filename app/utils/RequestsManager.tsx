import axios from 'axios';
import { parse } from 'node-html-parser';

// Function to get login address and parse form action URL
export const getLoginAddress = async () => {
  try {
    const response = await axios.get('https://link.com');
    const root = parse(response.data);
    const form = root.querySelector('#LoginForm');
    const actionURL = form.getAttribute('action');
    return actionURL;
  } catch (error) {
    console.error('Error getting login address:', error);
    return null;
  }
};

// Function to login
export const performLogin = async (actionURL, username, password) => {
  const data = {
    UserName: username,
    PassWord: password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const response = await axios.post(actionURL, new URLSearchParams(data).toString(), config);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};
