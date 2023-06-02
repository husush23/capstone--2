async function addComment(appId, itemId, username, comment) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

  const data = {
    item_id: itemId,
    username,
    comment,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      console.log('Comment added successfully!');
    } else {
      console.log('Failed to add comment. Error:', response.status);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
// const appId = 'DtHhjB9N7sexPXDyYGO1';
// const itemId = 1;
// const username = 'Dariq';
// const comment = 'Hi I am Dariq';
// addComment(appId, itemId, username, comment);

export default addComment;
