/*eslint-disable*/
import appId from './url';
import getComments from './getComment';
import {summary} from './display';
const parentEl = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close');

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
export const close = closeBtn.addEventListener('click', closeModal);

// Clear previous comment

parentEl.addEventListener('click', e => {
  if (e.target.matches('.fa-comment')) {
    const commentSection = document.querySelector('.comment-section');

    commentSection.innerHTML = '';
    form.id = e.target.id;
    const src = e.target.parentElement.parentElement.children[0].src;
    // const summary = e.target.parentElement.parentElement.children[0];
    console.log(summary);
    const image = document.querySelector('.film-image');
    const details = document.querySelector('.details');
    details.innerHTML = summary;
    image.src = src;

    const target = +e.target.id;
    const receiveData = async () => {
      const comments = await getComments(appId, target);
      comments?.forEach((comment, i) => {
        const newComment = `
          <div class="comment" id="${i}">
            <div class="username" >${comment.username}</div>
            <div class="date">${comment.creation_date}</div>
            <div class="content">${comment.comment}</div>
          </div>
        `;

        commentSection.innerHTML += newComment;
      });
    };
    receiveData();
  } else {
    return;
  }
  modal.style.display = 'block';
});
