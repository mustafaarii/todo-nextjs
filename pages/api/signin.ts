// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthDTO } from '../admin/signin'

export interface SigninApiRequest extends NextApiRequest {
  body: AuthDTO,
  method: "POST"
}

export default function handler(
  req: SigninApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  res.status(200).json(req.body)
}