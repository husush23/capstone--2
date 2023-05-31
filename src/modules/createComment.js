async function addComment(appId, itemId, username, comment) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

  const payload = {
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
      body: JSON.stringify(payload),
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

export default addComment;
