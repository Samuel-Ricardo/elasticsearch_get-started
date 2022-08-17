import { IController } from '@Types';
import { Request, Response } from 'express';
import { getExecutionDuration } from '@Utils';
import { Client } from 'pg';
import { getPGClient } from '@Clients';

export const getAll = async ():Promise<any[]> => {

    const client = getPGClient();
    await client.connect();

    const {rows} = await client.query("SELECT * FROM photos")
    return rows;
}

class DBController implements IController {
    async create(req: Request, res: Response) {
        return res.json(await getExecutionDuration<any[]>(getAll))
    }
}

export default new DBController;