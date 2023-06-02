// import appId from './url';

async function getComments(appId, itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;
  let comments;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      console.log('Comments retrieved successfully:', data);
      comments = data;
      return data;
    }
    console.log('Failed to retrieve comments. Error:', response.status);
  } catch (error) {
    console.error('An error occurred:', error);
  }
  return comments;
}

// Example usage:
// getComments(appId, 0);
// getComments(appId, 1);
// getComments(appId, 6);
// getComments(appId, 7);

export default getComments;
