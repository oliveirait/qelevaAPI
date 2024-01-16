import { Request, Response } from 'express';
import { router } from './routes';


const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

app.use(express.json(), cors(), router)


app.get("/", (req: Request, res: Response) => {
    res.json({
        status: 0,
        retorno: [],
        erro: ""
    })
})


app.listen(port, () => {
    console.log(`App is Running on http://localhost:${port}`)
})
