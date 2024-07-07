import express from 'express';
import {
  createShortenedUrl,
  getOriginalUrl,
} from '../controllers/urlController.js';
import { validateUrl } from '../middleware/validateUrl.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/shorten', authenticateToken, validateUrl, createShortenedUrl);
router.get('/:url', getOriginalUrl);

export default router;
