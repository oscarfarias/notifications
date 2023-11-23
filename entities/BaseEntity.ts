import { Property } from '@mikro-orm/core'

export abstract class CustomBaseEntity {
  @Property({ defaultRaw: `now()` })
  createdAt?: Date
  @Property({ defaultRaw: `now()`, onUpdate: () => new Date() })
  updatedAt?: Date
  @Property({ nullable: true, default: null })
  deletedAt?: Date
}
