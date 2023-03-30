const express = require('express');
const app = express();
const path = require('path');
const { conn, Widget } = require('./db');

app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));
app.use(express.json());
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/widgets', async (req, res, next) => {
  try {
    res.send(await Widget.findAll())
  } catch (error) {
    next(error)
  }
})

app.post('/api/widgets', async(req, res, next) => {
  try {
    res.status(201).send(await Widget.create(req.body))
  } catch (error) {
    next(error)
  }
})

app.put('/api/widgets/:id', async(req, res, next) => {
  try {
    const widget = await Widget.findByPk(req.params.id)
    res.send(await widget.update(req.body))
  } catch (error) {
    next(error)
  }
})

const port = process.env.PORT || 3000;

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`);
    await conn.sync({ force: true });
    await Promise.all([
      ['foo', 'bar', 'baz', 'quq'].map( name => Widget.create({ name }))
    ])
  }
  catch(ex){
    console.log(ex);
  }
});
