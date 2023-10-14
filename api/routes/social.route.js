import express from 'express';
import { createSocial, getSocials, getSocial, updateSocial, deleteSocial } from '../controllers/social.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createSocial);
router.get('/get', getSocials);
router.get('/get/:id', getSocial);
router.post('/update/:id', verifyToken, updateSocial);
router.delete('/delete/:id', verifyToken, deleteSocial);

export default router;