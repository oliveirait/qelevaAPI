import { Router } from 'express';
import { Questions } from '../controllers/questions';
export const router = Router()


router.get("/questions", Questions.read.handle )
router.post("/questions", Questions.create.handle)
