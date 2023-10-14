import express from 'express';
import { createItem, getItems, getItem, getItemsByName, updateItem, deleteItem } from '../controllers/item.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createItem);
router.get('/get', getItems);
router.get('/getItemsByName', getItemsByName);
router.get('/get/:id', getItem);
router.post('/update/:id', verifyToken, updateItem);
router.delete('/delete/:id', verifyToken, deleteItem);

export default router;