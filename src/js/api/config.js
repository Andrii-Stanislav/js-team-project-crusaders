import axios from 'axios';
import iziToast from 'izitoast';

const BASE_URL = 'https://your-energy.b.goit.study/api';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

const onResponse = response => {
  return response;
};

const onResponseError = error => {
  iziToast.error({
    title: 'Error',
    message: error.response.data.message,
  });

  return Promise.reject(error);
};

apiInstance.interceptors.response.use(onResponse, onResponseError);
