import { getElasticSearchClient } from '@Clients';
import { IPhoto } from '@types/photo';
import { getExecutionDuration } from '@Utils';
import { SearchResponse } from 'elasticsearch';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
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
class PhotoController implements IController {
    async create(req: Request, res: Response): Promise<any>{
        return res.json({result: await populateElasticDB(await getAll(), res), message: "Indexes OK :D"}) 
    }

    async findAll (req: Request, res: Response): Promise<any> {
        return res.json(await getExecutionDuration<SearchResponse<unknown>>(async ()=>{
            const search_result = await getElasticSearchClient().search({
                index: 'photos',
                size: 6000
            })
            return search_result
        }))
    }

    async findById (req: Request, res: Response) {
        
        const {id} = req.params;

        const data = await getElasticSearchClient().search({
            index: 'photos',
            q: `id:${id}`
        })

        return res.json(data.hits.hits)
    }

    async findByQuery(req: Request, res: Response){
        return res.json(await getElasticSearchClient().search({
            index: 'photos',
            body: {
                query: {
                    term: {
                        "title.keyword": 'Title De Teste'
                    }
                }
            }
        }))
    }

    async createPhoto(req: Request, res: Response){
        const photo:IPhoto = {
            "albumid": null,
            "id": 99999,
            "title": "happy",
            "url": "https://photos/happy.png",
            "thumbnilurl": null
        }

        return res.json(await getElasticSearchClient().index({
            index: 'photos',
            type: 'type_photos',
            body: photo
        }));
    }
}

export default new PhotoController;