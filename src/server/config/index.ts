import * as dotenv from 'dotenv';
//SQL connector information removed from DB / index.ts due to security concerns

dotenv.config();

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
        },
        port: process.env.PORT
};