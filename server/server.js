import express from 'express';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    const app = express();
    // app.use('*', require('./pages/index'))
    // app.get('/', (req, res) => {
    //   return handle(req, res);
    // });

    app.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      console.log('pathname, query ', pathname, query);
      return handle(req, res);
    });
    app.listen(4000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:4000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
