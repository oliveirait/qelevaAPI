import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"
import { QuestionsProps } from "../../@types/questions"

export class CreateNewQuestion {
  async handle (req: Request, res: Response) {
    try {
      const questions = await db.questions.create({
        data: req.body satisfies QuestionsProps
      })
      return res.json({
        status: 0,
        retorno: [questions],
        erro: ""
      })
    }

    catch {
      return res.json({
        status: 2,
        retorno: [],
        erro: "Parametros faltando"
      })
    }

    finally {
      console.log(new Date())
      await db.$disconnect()
    }
  }
}
