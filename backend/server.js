import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
const app = express();
const PORT = process.env.PORT || 5000;

const router = express.Router();


router.use('^/$', (req, res, next) => {
  fs.readFile(
    path.join(__dirname, '..', 'build', 'index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Some error happened');
      }
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
        )
      );
    }
  );
});

router.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

// Connection Listener
app.listen(PORT, () => {
  console.log('Server Started');
});
