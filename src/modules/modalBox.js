import appId from './url.js';
import getComments from './getComment.js';
import fetchData from './getMovies.js';

const parentEl = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close');

// Open modal
export const openModal = () => {
  modal.style.display = 'block';
};

// Close modal
const closeModal = () => {
  modal.style.display = 'none';
};
export const close = closeBtn.addEventListener('click', closeModal);

// Clear previous comment

parentEl.addEventListener('click', (e) => {
  if (e.target.matches('.fa-comment')) {
    const commentSection = document.querySelector('.comment-section');

    commentSection.innerHTML = '';
    form.id = e.target.id;
    const { src } = e.target.parentElement.parentElement.children[0];

    const filName = e.target.parentElement.previousElementSibling.children[0].textContent;
    const target = +e.target.id;

    const image = document.querySelector('.film-image');
    const filmName = document.querySelector('.name');
    const details = document.querySelector('.details');
    image.src = src;
    filmName.innerHTML = filName;

    const receiveData = async () => {
      const comments = await getComments(appId, target);
      const explain = await fetchData();
      explain.forEach((p) => {
        if (filName === p.name) details.innerHTML = p.summary;
      });
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

    receiveData();
  } else {
    return;
  }

  modal.style.display = 'block';
});
