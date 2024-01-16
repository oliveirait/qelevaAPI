
import {Request, Response} from 'express'
import { db } from '../../database/prismaConnect'

export class ListQuestions {
  async handle (req:Request, res:Response) {
    try {
      const questions = await db.questions.findMany()
      return res.json({
        status: 0,
        retorno: questions.length > 0 ? questions : [],
        erro: ""
      })
    }

    catch {
      return res.status(500).json({
        status: 1,
        retorno: [],
        erro: "Falha a buscar lista"
      })
    }

    finally {
      await db.$disconnect()
     }
  }
}