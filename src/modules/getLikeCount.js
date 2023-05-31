// Getting likes
async function getItemLikes(appId, itemId) {
  let data;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/?item_id=${itemId}`;

  try {
    // Send the GET request to retrieve the likes for the item
    const response = await fetch(url);

    // Check the response status
    if (response.ok) {
      const likesData = await response.json();
      // console.log('Likes:', likesData);
      data = likesData;
    } else {
      console.log('Failed to retrieve likes. Status code:', response.status);
    }
  } catch (error) {
    console.error('Error while retrieving likes:', error);
  }

  return data;
}
const appId = 'DtHhjB9N7sexPXDyYGO1'; // Replace with the actual app ID
const itemId = 0; // Replace with the actual item ID
// getItemLikes(appId, itemId);
export default getItemLikes;
