import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"

export class CreateNewQuestion {
    async handle (request: Request, response: Response) {
        const { 
            enun,
            a1, a2, a3, a4, a5,
            resp,
            area,
            materia,
            difficulty
         } = request.body

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

         return response.json({status: "OK", created: questions})
    }
}
