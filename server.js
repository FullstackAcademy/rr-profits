const express = require('express');
const app = express();
const path = require('path');
const { conn } = require('./db');

app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));
app.use(express.json());
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


const port = process.env.PORT || 3000;

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`);
    await conn.sync({ force: true });
  }
  catch(ex){
    console.log(ex);
  }
});
