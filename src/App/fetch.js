import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AsyncStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const getRequest = async (api, type) => {
  const res = await fetch(api, {
    method: type,
    // headers: {
    //   Authorization: AsyncStorage.getItem('token'),
    //   // get: AsyncStorage.getItem('name')
    // },
  });
  return await res.json();
};

export const putRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AsyncStorage.getItem('token'),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const deleteRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AsyncStorage.getItem('token'),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const getDataByBody = async (api, body) => {
  const res = await axios.request({
    method: 'POST',
    url: api,
    headers: {
      Authorization: AsyncStorage.getItem('token'),
    },
    data: body,
  });
  return await res.data;
};

export const getDataByBodyParams = async (api, body) => {
  const res = await axios.request({
    method: 'GET',
    url: api,
    // headers: {
    //   Authorization: AsyncStorage.getItem('token'),
    // },
    headers: {
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '2b162ea65dmshb46e0828cb25b9cp1fc4c9jsn37204bb97f50'
    },
   
    params: body,
    
    // params: {region: 'US'},
   
  });

  // console.log('************** fetch function ************** ;', res.data.finance.result[0].quotes)
  // console.log('fetch function', res)
  return await res.data;
};
