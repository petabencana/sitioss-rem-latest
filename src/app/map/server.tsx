// server.js
/*
const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enable CORS for all routes during development
  if (dev) {
    server.use(cors());
  }

  server.all('*', (req:any, res:any) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err:any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
  });
});
*/
