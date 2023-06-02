import createLike from './createLikes.js';
import appId from './url.js';
import updateLikes from './updateLikes.js';

const addToServer = document
  .querySelector('.cards-container')
  .addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-regular')) {
      const { id } = e.target;
      createLike(appId, id);
      //   e.target.classList.remove('fa-regular');
      //   e.target.classList.add('fa-solid');

      updateLikes();
    }
    updateLikes();
  });

export default addToServer;
