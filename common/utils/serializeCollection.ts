export function serializeCollection<T extends { id: string | number }>({
  entity,
}: {
  entity: T[]
}): [(number | string)[], Record<string | number, T>] {
  const entityById: Record<string | number, T> = {}
  const entityIds = entity.map((entity) => {
    const id = entity.id as string | number
    entityById[id] = entity
    return id
  })
  return [entityIds, entityById]
}
export function normalizeByField<T>({
  data,
  field,
}: {
  data: T[]
  field: keyof T
}): {
  [key: string]: T
} {
  return data.reduce((entityByField: Record<string, T>, entity) => {
    const id = entity[field] as unknown as string
    entityByField[id.toLowerCase()] = entity
    return entityByField
  }, {})
}
