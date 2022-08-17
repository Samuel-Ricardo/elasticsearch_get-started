import { getElasticSearchClient } from '@Clients';
import { Request, Response } from 'express';
import { IController } from '../@types/controller';
import { getAll } from './DBController';

const populateElasticDB = async (rows: any[], res: Response) => {
    for await (let row of rows) {
        await getElasticSearchClient().index({
            index: 'photos',
            type: 'type_photos',
            body: row
        }, error => error? res.status(400).json({error}) : {error})
    }
}
