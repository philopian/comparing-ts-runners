import express, { Express } from 'express'

import routes from './routes'

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
