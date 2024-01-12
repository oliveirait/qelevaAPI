import {Request, Response} from 'express';
import { router } from './routes';

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333
app.use(express.json(), cors())

app.get("/", (request: Request, response: Response) => {
    response.json({
        status: "OK",
        message: `Running ${new Date()}`
    })
})



app.listen(port, () => {
    console.log(`App is Running on port ${port}`)
})
