import getItemLikes from './getLikeCount';
import appId from './url';

const itemId = 0;

const updateLikes = async () => {
  const likeRes = await getItemLikes(appId, itemId);
  // console.log(likeRes);
  const count = document.querySelectorAll('.likes-count');
  count.forEach((c) => {
    // console.log(c.id);
    likeRes.forEach((like) => {
      // console.log(like.item_id);
      if (like.item_id === c.id) {
        c.textContent = like.likes;
      }
    });
  });
};
updateLikes();

export default updateLikes;
