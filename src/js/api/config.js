import axios from 'axios';
import iziToast from 'izitoast';
import Loader from '../helper/loader.js';

const BASE_URL = 'https://your-energy.b.goit.study/api';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

Loader.init();

const onRequest = config => {
  Loader.show();

  return config;
};

const onResponse = response => {
  Loader.hide();

  return response;
};

const onResponseError = error => {
  iziToast.error({
    title: 'Error',
    message: error.response.data.message,
  });

  Loader.hide();

  return Promise.reject(error);
};

apiInstance.interceptors.request.use(onRequest);
apiInstance.interceptors.response.use(onResponse, onResponseError);
