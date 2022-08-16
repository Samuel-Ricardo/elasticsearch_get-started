import express, { Request, Response } from 'express'

const app = express();

app.get('/', async (req:Request, res:Response) => {
    return res.json('Hello World :D');
})

app.listen(3333, () => console.log(`Running http://localhost:3333`))