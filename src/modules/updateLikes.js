const updateLikes = async () => {
  const parentEl = document.querySelector('.cards-container');
  parentEl.addEventListener('click', (e) => {
    if (e.target.matches('.fa-heart')) {
      //   addLike();
    }
  });

  const addLike = (e) => {
    // const button = e.target;
    // const cardId = parentEl.childNodes[1];
  };
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

// Event listener function for the like button click
function handleLikeButtonClick(event) {
  const button = event.target;
  const { cardId } = button.dataset;
  const likesCountElement = document.getElementById(`likes-count-${cardId}`);

  // Update the like count
  let likesCount = parseInt(likesCountElement.textContent);
  likesCount++;
  likesCountElement.textContent = likesCount;

  // Send a request to update the like count on the server (if required)
  //   updateLikeCountOnServer(cardId, likesCount);
}

// Function to update the like count on the server
function updateLikeCountOnServer(cardId, likesCount) {
  // Make a request to the server to update the like count for the given card
  // You can use the fetch API or any AJAX library to send the request
  // Include the necessary API endpoint and data in the request
  // Example:
  // fetch('/api/update-like-count', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ cardId, likesCount })
  // })
  // .then(response => {
  //   // Handle the response as needed
  // })
  // .catch(error => {
  //   // Handle the error as needed
  // });
}

updateLikes();
export default updateLikes;
