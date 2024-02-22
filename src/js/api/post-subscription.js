import iziToast from 'izitoast';

import { apiInstance } from './config';

export const postSubscription = email =>
  apiInstance
    .post('/subscription', { email })
    .then(data => {
      iziToast.success({
        title: 'Success',
        message: data.message,
      });
    })
    .catch(error => {
      const errorMsg = error.response.data.message;

      if (errorMsg === 'Subscription already exists') {
        iziToast.info({
          title: 'Info',
          message: errorMsg,
        });
        return error;
      }

      iziToast.error({
        title: 'Error',
        message: errorMsg,
      });
    });
