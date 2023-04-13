import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const message = 'Express + TypeScript Server via jiti!'
  res.json(message)
})

export default router
