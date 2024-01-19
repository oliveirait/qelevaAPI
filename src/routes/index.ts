import { Router } from 'express';
import { Questions, QuestionsV2 } from '../controllers/questions';
import { Simulator } from '../controllers/simulator/simulator';
import { RandomSimulator } from '../controllers/simulator/randomSimulator';

export const router = Router()


router.get("/questions", Questions.read.handle )
router.post("/questions", Questions.create.handle)
router.post("/questionsV2", QuestionsV2.create.handle)

router.post("/simulator", new Simulator().handle)
router.post("/randomSimulator", new RandomSimulator().handle)
