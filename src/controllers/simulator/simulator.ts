import { Request, Response } from "express"
import { db } from "../../database/prismaConnect"



export class Simulator {
  async handle (req: Request, res: Response) {
    const { quantidade, area, materia, ano, nivel }: any = req.body

    const qtd = parseInt(quantidade)

    try {
      const simulator = await db.questions.findMany({
        where: {
          nivel: nivel,
          ano: ano,
          materia: materia,
          area: area
        },
        take: qtd
      })
      return res.json({
        status: 0,
        retorno: simulator,
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