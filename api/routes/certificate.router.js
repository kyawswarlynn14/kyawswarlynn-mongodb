import express from 'express';
import { createCertificate, getCertificates, getCertificate, updateCertificate, deleteCertificate } from '../controllers/certificate.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createCertificate);
router.get('/get', getCertificates);
router.get('/get/:id', getCertificate);
router.post('/update/:id', updateCertificate);
router.delete('/delete/:id', deleteCertificate);

export default router;