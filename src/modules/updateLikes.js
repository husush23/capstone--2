const updateLikes = async () => {
  const parentEl = document.querySelector('.cards-container');
  parentEl.addEventListener('click', (e) => {
    if (e.target.matches('.fa-heart')) {
      //   addLike();
    }
  });
};

// Get all the like buttons
const parentEl = document.querySelector('.cards-container');

parentEl.addEventListener('click', (e) => {
  if (e.target.matches('.fa-heart')) {
    alert('hi');
  }
});

// Attach event listeners to each like button
// parentEl.forEach(button => {
//   button.addEventListener('click', handleLikeButtonClick);
// });

export default updateLikes;
