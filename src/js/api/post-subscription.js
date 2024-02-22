import iziToast from 'izitoast';

import { apiInstance } from './config';

export const postSubscription = email =>
  apiInstance.post('/subscription', { email }).then(data => {
    iziToast.success({
      title: 'Success',
      message: data.message,
    });
  });
