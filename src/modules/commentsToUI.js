/*eslint-disable*/
import appId from './url';
import getComments from './getComment';
import addComment from './createComment';
const username = document.getElementById('username');
const comment = document.getElementById('comment');
const commentIcon = document.getElementById('submit');
const commentSection = document.querySelector('.comment-section');
export default commentIcon.addEventListener('click', e => {
  e.preventDefault();
  const itemId = e.target.parentElement.id;
  addComment(appId, itemId, username.value, comment.value);

  //   Update again
  const receiveData = async () => {
    const comments = await getComments(appId, itemId);
    comments?.forEach((comment, i) => {
      const newComment = `
        <div class="comment" id="${i}">
          <h3>Add a comment</h3>
          <div class="username" >${comment.username}</div>
          <div class="date">${comment.creation_date}</div>
          <h3>Comments()</h3>
          <div class="content">${comment.comment}</div>
        </div>
      `;

      commentSection.innerHTML += newComment;
    });
  };
  receiveData();
  username.value = '';
  comment.value = '';
  receiveData();
});
