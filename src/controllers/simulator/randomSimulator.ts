import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"



export class RandomSimulator {
  async handle (req: Request, res: Response) {
    const { quantidade, area, materia, ano, nivel }: any = req.body

    const qtd = parseInt(quantidade)

    try {
      const randomSimulator = await db.$queryRaw`
        SELECT *
        FROM questions
        WHERE nivel=${nivel} and ano=${ano} and materia=${materia} and area=${area}
        ORDER BY RANDOM()
        LIMIT ${qtd}
      `;

      return res.json({
        status: 0,
        retorno: randomSimulator,
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