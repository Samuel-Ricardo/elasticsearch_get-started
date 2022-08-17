import express, { Request, Response } from 'express'
import { getClient } from './client/elasticsearch';

const app = express();

app.get('/', async (req:Request, res:Response) => {

    const result = await getClient().index({ 
        index: 'elasticsearch',
        type: 'type_elastic_teste',
        body: {
            user: 'user',
            password: '1234',
            email: 'tomi@email.com',
        }
    });
    
    return res.json({
        hello: 'Hello World :D',
        result
    });
})

app.listen(3333, () => console.log(`Running http://localhost:3333`))