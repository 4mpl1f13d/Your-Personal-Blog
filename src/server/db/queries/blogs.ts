import { Query } from '../index';
import db from '../db';


const all = async () => {
    return Query('SELECT * FROM blogs');}


const one = async (id:number) => { 
    return Query('SELECT * FROM blogs WHERE id =?', [id]);
};

// const post = async;
const post = async (title: string, content: string, authorid: number, tagid: number) => {
    // let values = [title, content, authorid];
    // let tempQuery: any = await Query('INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)', values);
    // let insertId: any = Object.entries(tempQuery)[2][1];
    return Query(`INSERT INTO blogs( title, content, authorid) VALUE(?,?,?)` ,[title, content, Number(authorid), Number(tagid)])
}

const put = async (id: number, title: string, content: string) => {
    // let values = [title, content, authorid, id];
    return Query('UPDATE blogs SET (id, title , content) VALUE(?,?,?)` ,[title, content, Number(authorid), Number(tagid)])
}

export default {
    all,
    one, 
    post, 
    put
}