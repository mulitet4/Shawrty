'use client';

async function getUrls(token) {
  try {
    const response = await fetch('http://localhost:8000/api/urls', {
      method: 'GET',
      credentials: 'include',
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function removeUrls(token, id) {
  try {
    const response = await fetch('http://localhost:8000/api/urls/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      credentials: 'include',
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function addUrls(token, url) {
  try {
    const response = await fetch('http://localhost:8000/api/urls/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        originalUrl: url,
      }),
      credentials: 'include',
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(await error.json());
  }
}

export { addUrls, removeUrls, getUrls };
