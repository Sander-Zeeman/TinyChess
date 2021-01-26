const express = require('express')
const app = express()
const port = 3000

app.use('/api', (req, res, next) => {
    console.log('Request made.');
    next();
});

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})