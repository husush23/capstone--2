/*eslint-disable*/
const username = document.getElementById('username');
const comment = document.getElementById('comment');
import addComment from './createComment';
export default document
  .getElementById('submit')
  .addEventListener('click', e => {
    e.preventDefault();
    // addComment(appId, itemId, username, comment);
    console.log(username.value);
  });
