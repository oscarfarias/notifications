export function capitalizeFirstLetter(word: string): string {
  return word.replace(/\w/, (l) => l.toUpperCase())
}
export function serializeCollection<
  T extends { id: string | number },
  K extends T[`id`] = T[`id`],
  V = T,
>({
  entity,
  getterFn = (entity) => entity as unknown as V,
}: {
  entity: T[]
  getterFn?: (entity: T) => V
}): [K[], Record<K, V>] {
  const entityById = {} as Record<K, V>
  const entityIds = entity.map((entity) => {
    const id = entity.id as K
    entityById[id] = getterFn(entity)
    return id
  })

  return [entityIds, entityById]
}

export function serializeCollectionByProperty<
  T extends { [key: string]: string | number },
  K extends T[keyof T] = T[keyof T],
  V = T,
>({
  entity,
  property,
  getterFn = (entity) => entity as unknown as V,
}: {
  entity: T[]
  property: keyof T
  getterFn?: (entity: T) => V
}): [K[], Record<K, V>] {
  const entityById = {} as Record<K, V>
  const entityIds = entity.map((entity) => {
    const id = entity[property] as K
    entityById[id] = getterFn(entity)
    return id
  })
  return [entityIds, entityById]
}
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}
export function uniqueId(): string {
  const idPart = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return `${idPart() + idPart() + idPart() + idPart()}`
}
