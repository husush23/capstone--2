import appId from './url.js';
import getComments from './getComment.js';
import addComment from './createComment.js';

const username = document.getElementById('username');
const comment = document.getElementById('comment');
const commentIcon = document.getElementById('submit');
const commentSection = document.querySelector('.comment-section');

function holder() {
  commentIcon.addEventListener('click', async (e) => {
    e.preventDefault();
    const itemId = e.target.parentElement.id;
    await addComment(appId, itemId, username.value, comment.value);

    const receiveData = async () => {
      const comments = await getComments(appId, itemId);
      commentSection.innerHTML = ''; // Clear the existing comments

      comments.forEach((comment, i) => {
        const newComment = `
        <div class="comment" id="${i}">
          <div class="username">${comment.username}</div>
          <div class="date">${comment.creation_date}</div>
          <div class="content">${comment.comment}</div>
        </div>
      `;

        commentSection.innerHTML += newComment;
      });

      const commentCount = comments.length;
      const commentNumber = document.querySelector('.number');
      commentNumber.textContent = ` comments(${commentCount})`;
    };

    if (username.value) {
      username.value = '';
    }

    if (comment.value) {
      comment.value = '';
    }

    await receiveData();
  });
}

holder();
