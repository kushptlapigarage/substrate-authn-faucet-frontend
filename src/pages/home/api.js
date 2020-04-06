import axios from 'axios';
import { baseOptions } from '../../config';

export const signup = async (data) => {
  try {
    const response = await axios.post(`${baseOptions.url}/request-token/`, data);
    return response;
  } catch (e) {
    console.log(new Date(), e);
    throw new Error(e.error || e.message);
  }
};
