import createLike from './createLikes';
import appId from './url';
import getItemLikes from './getLikeCount';
import updateLikes from './updateLikes';
const addToServer = document
  .querySelector('.cards-container')
  .addEventListener('click', e => {
    if (e.target.classList.contains('fa-regular')) {
      const id = e.target.id;
      createLike(appId, id);
      //   e.target.classList.remove('fa-regular');
      //   e.target.classList.add('fa-solid');

      updateLikes();
    }
    updateLikes();
  });

export default addToServer;
