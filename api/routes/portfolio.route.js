import express from 'express';
import { createPortfolio, getPortfolios, getPortfolio, updatePortfolio, deletePortfolio } from '../controllers/portfolio.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createPortfolio);
router.get('/get', getPortfolios);
router.get('/get/:id', getPortfolio);
router.post('/update/:id', updatePortfolio);
router.delete('/delete/:id', deletePortfolio);

export default router;