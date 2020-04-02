import * as express from 'express';

import db from '../db';

const router = express.Router();

//Completed
router.get('/api/blogs', async (req, res) => {
    try {
        let blogs = await db.Blogs.all();
        res.json(blogs);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

//Completed
router.get('/api/blogs/:id', async (req, res) => {
    try {
        let blogs = await db.Blogs.one(parseInt(req.params.id, 10));
        res.json(blogs[0]);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/blogs', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let authorid = parseInt(req.body.authorid, 10);
    let tagid = parseInt(req.body.tagid, 10)
    try {
        let blogs = await db.Blogs.post(title, content, authorid, tagid);
        res.json(blogs);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/api/blogs/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    let title = req.body.title;
    let content = req.body.content;
    try {
        let blogs = await db.Blogs.put(id, title, content);
        res.json(blogs);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})




export default router