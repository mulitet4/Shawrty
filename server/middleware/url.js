async function validateUrl(req, res, next) {
  const { url } = req.body;
  // Validate URL
  // Check if URL is present
  // Return 401 Unprocessable entity if not valid
  next();
}

export { validateUrl };
