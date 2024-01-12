import { Router } from 'express';
import { CreateNewQuestion } from '../controllers/questions/createQuestion';

export const router = Router()
const questions = new CreateNewQuestion()



router.post("/questions", questions.handle)