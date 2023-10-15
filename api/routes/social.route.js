import express from 'express';
import { createSocial, getSocials, getSocial, updateSocial, deleteSocial } from '../controllers/social.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createSocial);
router.get('/get', getSocials);
router.get('/get/:id', getSocial);
router.post('/update/:id', updateSocial);
router.delete('/delete/:id', deleteSocial);

export default router;