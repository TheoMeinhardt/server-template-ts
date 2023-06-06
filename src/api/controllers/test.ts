import type { Request, Response } from 'express'
import { testDB } from '../model'

async function test (req: Request, res: Response): Promise<void> {
  res.status(200).json(await testDB())
}

export default test
