import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { MikroORM, RequestContext } from '@mikro-orm/core'
import { EntityManager } from '@mikro-orm/postgresql'
import config from '../../config/mikro-orm'
import { NextHandler } from 'next-connect'

declare global {
  // eslint-disable-next-line no-var
  var __MikroORM__: MikroORM
}
async function getORM(): Promise<MikroORM> {
  if (!global.__MikroORM__) {
    global.__MikroORM__ = await MikroORM.init(config)
  }
  return global.__MikroORM__
}

export async function useORM(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> {
  const orm = await getORM()
  RequestContext.create(orm.em, next)
}

export function withORM(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const orm = await getORM()
    return RequestContext.createAsync(orm.em, async () => handler(req, res))
  }
}

export function getEntityManager(): EntityManager {
  const em = RequestContext.getEntityManager() as EntityManager | undefined
  if (!em)
    throw new Error(
      `Entity manager not found. Are you in a 'withORM'-wrapped Context?`,
    )
  return em
}
