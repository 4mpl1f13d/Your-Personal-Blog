import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        res.json(await db.Blogs.all());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/:id', async (req, res) => {
    try {
        res.json((await db.Blogs.one(req.params.id))[0]);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/blogs,', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let authorid = req.body.authorid; // need to parseInt
    // let tagid = req.body.tagid; // need to create tag file in db folder, then parseInt
    try {
        let blogs = await db.Blogs.post(title, content, authorid)
        res.json(blogs) // add tagid after tagid
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;