import { postSubscription } from '../api/post-subscription';

import { refs } from '../refs';

refs.footerSubscribeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = refs.footerEmailInput.value;

  postSubscription(email);
});
