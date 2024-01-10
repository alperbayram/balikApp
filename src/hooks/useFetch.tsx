// src/hooks/useFetch.ts

import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

interface UseFetchProps {
  url: string;
}

const useFetch = ({url}: UseFetchProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError('Veri yok baba.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
