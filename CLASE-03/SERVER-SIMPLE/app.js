const express = require('express') // express -> { }
const app = express() // app -> {use, get, post }  app.use
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
