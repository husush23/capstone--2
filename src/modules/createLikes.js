// Creating likes
async function createLike(appId, itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

  try {
    // Prepare the request body
    const requestBody = {
      item_id: itemId,
    };

    // Send the POST request to create a new like
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // Check the response status
    if (response.status === 201) {
      console.log('Like created successfully!');
    } else {
      console.log('Failed to create the like. Status code:', response.status);
    }
  } catch (error) {
    console.error('Error while creating the like:', error);
  }
}
// const appId = 'DtHhjB9N7sexPXDyYGO1'; // Replace with the actual app ID
// const itemId = 'item3'; // Replace with the actual item ID
// createLike(appId, itemId);
export default createLike;
