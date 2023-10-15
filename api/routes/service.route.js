import express from 'express';
import { createService, getServices, getService, updateService, deleteService } from '../controllers/service.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createService);
router.get('/get', getServices);
router.get('/get/:id', getService);
router.post('/update/:id', updateService);
router.delete('/delete/:id', deleteService);

export default router;