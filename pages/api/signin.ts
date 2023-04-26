// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthDTO } from '../admin/signin'

export interface SigninApiRequest extends NextApiRequest {
  body: AuthDTO,
  method: "POST"
}

export default function handler(
  req: SigninApiRequest,
  res: NextApiResponse<AuthDTO>
) {
  res.status(200).json({email: "asfsaf"})
}