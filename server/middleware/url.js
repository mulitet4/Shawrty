async function validateUrl(req, res, next) {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(422).json({ error: 'URL is required' });
  }

  try {
    new URL(originalUrl);
  } catch (error) {
    return res.status(422).json({ error: 'Invalid url' });
  }

  next();
}

export { validateUrl };
