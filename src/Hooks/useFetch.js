import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

const useFetch = (url = BASE_URL) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const getData = useCallback(async (url = BASE_URL) => {
    try {
      setLoading(true);
      const result = await axios.get(url).then((res) => res.data);
      setData(result);
      setError('');
      setLoading(false);
    } catch (err) {
      setError(err?.response?.message || 'Error Occurred');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return { loading, error, data, refetch: getData };
};

export default useFetch;
