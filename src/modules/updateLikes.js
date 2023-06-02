import getItemLikes from './getLikeCount';
import appId from './url';

const itemId = 0;

const updateLikes = async () => {
  const likeRes = await getItemLikes(appId, itemId);
  const count = document.querySelectorAll('.likes-count');
  count.forEach((c) => {
    likeRes.forEach((like) => {
      if (like.item_id === c.id) {
        c.textContent = like.likes;
      }
    });
  });
};
updateLikes();

export default updateLikes;
