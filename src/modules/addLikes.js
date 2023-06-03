import createLike from './createLikes';
import appId from './url';
import updateLikes from './updateLikes';

const addToServer = document
  .querySelector('.cards-container')
  .addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-regular')) {
      const { id } = e.target;
      createLike(appId, id);
      updateLikes();
    }
    updateLikes();
  });

export default addToServer;
