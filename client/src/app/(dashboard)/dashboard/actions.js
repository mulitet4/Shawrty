async function get(token) {
  try {
    const response = await fetch('http://localhost:8000/api/urls', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function remove(token, id) {
  try {
    const response = await fetch('http://localhost:8000/api/urls/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function add(token, url) {
  try {
    const response = await fetch('http://localhost:8000/api/urls/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        originalUrl: 'https://google.com',
      }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export { add, remove, get };
