import { IController } from '@Types';
import { Request, Response } from 'express';
import { getExecutionDuration } from '@Utils';
import { Client } from 'pg';
import { getPGClient } from '@Clients';

class DBController implements IController {
    async create(req: Request, res: Response) {
        return res.json(await getExecutionDuration<any[]>(async ():Promise<any[]> => {

            const client = getPGClient();
            await client.connect();

            const {rows} = await client.query("SELECT * FROM photos")
            return rows;
        }))
    }
}

export default new DBController;