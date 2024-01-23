import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"



export class RandomSimulator {
  async handle (req: Request, res: Response) {
    const { quantidade, area, materia, ano, nivel, banca } = req.body

    const isEmpty = [quantidade, area, materia, ano, nivel, banca].includes('')

    if (isEmpty) {
      return res.json({
        status: 4,
        retorno: [],
        erro: "Campos inválidos ou faltando"
      })
    }

    try {
      const randomSimulator = await db.$queryRaw`
        SELECT *
        FROM questions
        WHERE nivel=${nivel} and ano=${ano} and materia=${materia} and area=${area} and banca=${banca}
        ORDER BY RANDOM()
        LIMIT ${parseInt(quantidade)}
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