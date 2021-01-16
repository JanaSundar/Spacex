import axios from 'axios';
import { BASE_URL } from '../constants';

export const FetchData = async (url = BASE_URL) => {
  return await axios.get(url).then((res) => res.data);
};
