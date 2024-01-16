import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"
import { QuestionsProps } from "../../@types/questions"

export class CreateNewQuestion {
    async handle (req: Request, res: Response) {
      console.log("Conectando")
      const { 
          enun,
          a1, a2, a3, a4, a5,
          resp,
          area,
          materia,
          difficulty,
          ano, nivel, cargo
        } = req.body satisfies QuestionsProps

      try {
        const questions = await db.questions.create({
          data: {
            enun,
            a1, a2, a3, a4, a5,
            resp,
            area,
            materia,
            difficulty,
            ano, nivel, cargo
          }
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
        console.log("Desconectando")
        await db.$disconnect()
      }
    }
}
