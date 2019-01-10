import express from 'express';
// import path from 'path';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => {
      return handle(req, res)
    });
    server.listen(4000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:4000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

// const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.get('/', ((req, res) => {
//   res.render('index');
// }));

// app.use(express.static(path.join(__dirname, '../public')));
// app.listen(4000, () => console.log('Example app listening on port 4000!'));
