import * as express from 'express';
import apiRouter from './routes';
import config from './config';

const app = express();

app.use(express.static('public'));
app.use(express.json());

// app.use(apiRouter);
app.use('/api', apiRouter);


// const port = process.env.PORT || 3000;
app.listen(parseInt(config.port), () => console.log(`Server listening on port: ${config.port}`));

// import './db';
