import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const result = await axios.get(url).then((res) => res.data);
        setData(result.data);
      } catch (err) {
        setError(err?.response?.message);
      }
    };
    getData();

    setLoading(false);
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
