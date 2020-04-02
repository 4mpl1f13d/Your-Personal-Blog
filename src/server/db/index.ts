import * as mysql from 'mysql';
import config from '../config';
import db from '../db';

import Blogs from './queries/blogs';
import Tags from './queries/tags';

const pool = mysql.createPool(config.mysql);

// console.log('derp');

// BadIdea...
// const userid = '1; DROP TABLE users;'
// console.log('SELECT * FROM users WHERE id = ${userid}');
// console.log('SELECT * FROM users WHERE id = 1; DROP TABLE users;');


export const Query = (query: string, values?: any) => {

const sql= mysql.format(query,values);
console.log(sql);

    return new Promise((resolve, reject) => {
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

// Query('SELECT * FROM users WHERE id = ?', [1]);

// Thanks you Landers!!!! 
// export const Connection = mysql.createConnection(config.mysql);

// Connection.connect(err => {
//     if (err) console.log(err)
// });

// export const Query = (query: string, values?: Array<string | number>) => {
//     return new Promise<Array<any>>((resolve, reject) => {
//         Connection.query(query, values, (err, results) => {
//             if (err) return reject(err);
//             return resolve(results);
//         });
//     });
// }



// export default {
//     Blogs,
//     Tags
// }