import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const message = 'Express + TypeScript Server!'
  res.json(message)
})

export default router
