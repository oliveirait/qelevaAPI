import { Router } from 'express';
import { Questions } from '../controllers/questions';
import { Simulator } from '../controllers/simulator';


export const router = Router()


router.get("/questions", Questions.read.handle )
router.post("/questions", Questions.create.handle)

router.post("/simulator", new Simulator().handle)
