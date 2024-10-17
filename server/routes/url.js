import express from 'express';
import {
  createShortenedUrl,
  deleteUrlbyId,
  getOriginalUrl,
  getUrlsOfUser,
} from '../controllers/url.js';
import { validateUrl } from '../middleware/url.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/shorten', authenticateToken, validateUrl, createShortenedUrl);
router.get('/', authenticateToken, getUrlsOfUser);
router.delete('/:id', authenticateToken, deleteUrlbyId);
router.get('/:id', getOriginalUrl);

export default router;
