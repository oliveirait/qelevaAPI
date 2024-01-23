import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"
import { QuestionsProps } from "../../@types/questions"
import { Prisma } from "@prisma/client"

export class CreateNewQuestionV2 {
  async handle (req: Request, res: Response) {
    const isEmpty = [req.body].includes('')

    if (isEmpty) {
      console.log('Campo vazio', isEmpty)
      return res.json({
        status: 4,
        retorno: [],
        erro: "Campos inválidos ou faltando"
      })
    }
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

    catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          return res.json({
            status: 3,
            retorno: [],
            erro: "Essa questão já está cadastrada. Não é possível cadastrar uma questão repetida."
          })
        }
      }
      console.log('Campo vazio', req.body)
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
