import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import compression from 'compression';

import App from '../src/App';
import { SpaceXProvider } from '../src/store/SpaceXContext';
import { FetchData } from '../src/utils/Fetch';
const app = express();
const PORT = process.env.PORT || 5000;

const router = express.Router();

router.use(compression());
router.use('^/$', async (req, res, next) => {
  const SpacexData = await FetchData();

  fs.readFile(
    path.join(__dirname, '..', 'build', 'index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Some error happened');
      }
      res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(
            <SpaceXProvider data={SpacexData}>
              <App />
            </SpaceXProvider>
          )}</div>
          <script>
            window.__STATE__ = ${JSON.stringify(SpacexData)};
          </script>
          `
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

