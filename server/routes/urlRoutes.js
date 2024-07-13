import express from 'express';
import {
  createShortenedUrl,
  deleteUrlbyId,
  getOriginalUrl,
  getUrlsOfUser,
} from '../controllers/urlController.js';
import { validateUrl } from '../middleware/validateUrl.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/shorten', authenticateToken, validateUrl, createShortenedUrl);
router.get('/', authenticateToken, getUrlsOfUser);
router.delete('/:id', authenticateToken, deleteUrlbyId);
router.get('/:url', getOriginalUrl);

export default router;
