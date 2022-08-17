import DBController from 'controller/DBController';
import PhotoController from 'controller/PhotoController';
import express, { Request, Response } from 'express'
import { getElasticSearchClient } from './client/elasticsearch';

const app = express();

app.get('/', async (req:Request, res:Response) => {

    const result = await getElasticSearchClient().index({ 
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

app.get('/db/setup', DBController.create);
app.get('/photos/setup', PhotoController.create);

app.get('/photos/findAll', PhotoController.findAll);
app.get('/photos/findById/:id', PhotoController.findById);
app.post('/photos/createPhoto', PhotoController.createPhoto);

app.get('/photos/findByQuery', PhotoController.findByQuery)

app.listen(3333, () => console.log(`Running http://localhost:3333`))