import express from 'express';
import { addQuestion, getQuestion } from '../controllers/question.controller';

const router = express.Router();

router.post('/add',addQuestion);
router.post('/get',getQuestion);

export default router;