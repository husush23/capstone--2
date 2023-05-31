/*eslint-disable*/
import appId from './url';
import getComments from './getComment';
const parentEl = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');

// Open modal
export const openModal = parentEl.addEventListener('click', e => {
  if (e.target.matches('.fa-comment')) {
    modal.style.display = 'block';
  }
});

// Close modal
const closeModal = () => {
  modal.style.display = 'none';
};
// export const close = modal.addEventListener('click', closeModal);

parentEl.addEventListener('click', e => {
  if (e.target.matches('.fa-comment')) {
    const src = e.target.parentElement.parentElement.children[0].src;

    const target = +e.target.id;
    const receiveData = async () => {
      const comments = await getComments(appId, target);
      comments?.forEach((comment, i) => {
        const newComment = `
          <div class="comment">
            <div class="username">${comment.username}</div>
            <div class="date">${comment.creation_date}</div>
            <div class="content">${comment.comment}</div>
          </div>
        `;
        const commentSection = document.querySelector('.comment-section');
        commentSection.innerHTML += newComment;
      });
    };
    receiveData();
  }
  modal.style.display = 'block';
});
