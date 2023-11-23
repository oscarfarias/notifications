import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect, { NextConnect, NextHandler } from 'next-connect'
import { User } from 'entities'
import { expressjwt as jwt } from 'express-jwt'
import Boom from '@hapi/boom'

import { errorResponse } from './api'
import { useORM } from './orm'
import { pathToRegexp } from 'path-to-regexp'
import NextCors from 'nextjs-cors'

const unsecuredRoutes = [
  pathToRegexp(`/api/login`),
  pathToRegexp(`/api/passwordChange/(.*)`),
  { url: pathToRegexp(`/api/appointments/(.*)`), methods: [`GET`] },
]
const unauthorizedStatus = 401
export interface File {
  name: string
  mimetype: string
  size: string
  data: Buffer
  md5: string
}
export interface ExtendedRequest extends NextApiRequest {
  user: User | null
  auth: {
    id: string
    iat: number
  } | null
  files: {
    file: File
  }
}
interface ExtendedError extends Error {
  isBoom: boolean
  name: string
  status: number
}
const formatErrors = (
  err: ExtendedError,
  req: NextApiRequest,
  res: NextApiResponse,
): void => {
  if (err.status === unauthorizedStatus) {
    errorResponse(
      res,
      Boom.unauthorized(`No se encontró token de autenticación`),
    )
  }
  errorResponse(res, err)
}

const populateUser = async (
  req: ExtendedRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> => {
  req.user = null
  next()
}

const allowCORS = async (
  req: ExtendedRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [`GET`, `HEAD`, `PUT`, `PATCH`, `POST`, `DELETE`],
    origin: `*`,
    optionsSuccessStatus: 200,
  })
  next()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getHandler = (): NextConnect<NextApiRequest, NextApiResponse<any>> => {
  const handler = nextConnect<NextApiRequest, NextApiResponse>({
    onError: formatErrors,
  })
    .use(allowCORS)
    .use(useORM)
    .use(
      jwt({
        secret: process.env.TOKEN_SECRET as string,
        algorithms: [`HS256`],
      }).unless({
        path: unsecuredRoutes,
      }),
    )
    .use(populateUser)

  return handler
}

export default getHandler
