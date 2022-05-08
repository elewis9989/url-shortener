import express from 'express';
import config from 'config';
import routes from './routes';
import bodyParser from 'body-parser';
import db from './db';
import cors from 'cors';

const app = express();

const port = config.get('port') as number;
const ui_endpoint = config.get('ui_endpoint') as string;

app.use(bodyParser.json());
app.use(
  cors({
    origin: ui_endpoint,
  })
);

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
  db();
  routes(app);
});
