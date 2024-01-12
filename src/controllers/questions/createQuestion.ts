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
          difficulty
        } = req.body satisfies QuestionsProps

        try {
          const questions = await db.questions.create({
            data: {
                enun,
                a1, a2, a3, a4, a5,
                resp,
                area,
                materia,
                difficulty
            }
        })

        return res.json({status: "OK", created: questions})
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
