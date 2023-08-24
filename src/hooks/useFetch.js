import { useEffect, useRef, useState } from "react";

import config from "@/config";
import { cacheClient } from "@/lib/Cache";

/** This hook is just built for this project. Uses the simple cache system for avoiding unnecessary requests */
export default function useFetch(endpoint) {
  const [data, setData] = useState(cacheClient.get(endpoint));
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);
  const currentEndpoint = useRef(endpoint);

  async function fetchData() {
    setLoading(true);

    let myHeaders = new Headers();

    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    
    let requestOptions = {
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const data = await fetch(`${config.env.PROXY_URL}/${config.env.API_URL}${endpoint}`, requestOptions).then(res => res.json());

      cacheClient.set(endpoint, data);
      
      if(endpoint === currentEndpoint.current) {
        setData(data);
        setLoading(false);
      }
    } catch(err) {
      setError(true);
    }
  }

  function updateData(newData) {
    setData(newData);
    cacheClient.update(endpoint, newData);
  }

  useEffect(() => {
    currentEndpoint.current = endpoint;

    const dataFromCache = cacheClient.get(endpoint);

    if(!dataFromCache) {
      fetchData();
    } else {
      setData(dataFromCache);
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, updateData };
}