import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import NextCors from 'nextjs-cors'
import Boom from '@hapi/boom'

export interface ControllerDict {
  GET?: NextApiHandler
  POST?: NextApiHandler
  PUT?: NextApiHandler
  PATCH?: NextApiHandler
  DELETE?: NextApiHandler
}
export type SupportedMethods = keyof ControllerDict

export function successResponse<T>(res: NextApiResponse, data?: T): void {
  res.statusCode = 200
  res.setHeader(`Content-Type`, `application/json`)
  res.end(JSON.stringify({ success: true, data }))
}

export function errorResponse(res: NextApiResponse, error: unknown): void {
  console.log(error)
  const formattedError = Boom.isBoom(error)
    ? error
    : Boom.badImplementation(`Ha ocurrido un error inesperado.`, { error })
  const { statusCode, message } = formattedError.output.payload
  res.statusCode = statusCode
  res.setHeader(`Content-Type`, `application/json`)
  res.end(JSON.stringify({ success: false, error: message, formattedError }))
}

export async function methodHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  controllerDict: ControllerDict,
): Promise<void> {
  await NextCors(req, res, {
    methods: [`GET`, `HEAD`, `PUT`, `PATCH`, `POST`, `DELETE`],
    origin: `*`,
    optionsSuccessStatus: 200,
  })
  const method = req.method as SupportedMethods
  const controller = controllerDict[method]
  if (controller != null) {
    try {
      await controller(req, res)
    } catch (error) {
      errorResponse(res, error)
    }
  } else {
    errorResponse(res, Boom.notFound(`Metodo no soportado`))
  }
}
