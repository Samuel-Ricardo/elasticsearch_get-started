import { Client } from "pg"

export const getClinet = () => new Client({
        host:'IP.DO.BANCO',
        port: 5432,
        database: 'postgres',
        password: 'SENHA',
        user: 'posgres',
    })
