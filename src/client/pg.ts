import { Client } from "pg"

export const getPGClient = () => new Client({
        host:'IP.DO.BANCO',
        port: 5432,
        database: 'postgres',
        password: 'SENHA',
        user: 'posgres',
    })
