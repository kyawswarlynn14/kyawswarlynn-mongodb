import express from 'express';
import { createService, getServices, getService, updateService, deleteService } from '../controllers/service.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createService);
router.get('/get', getServices);
router.get('/get/:id', getService);
router.post('/update/:id', verifyToken, updateService);
router.delete('/delete/:id', verifyToken, deleteService);

export default router;