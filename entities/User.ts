import {
  PrimaryKey,
  Entity,
  Property,
  Unique,
  ManyToOne,
} from '@mikro-orm/core'
import { Role } from './index'
import { CustomBaseEntity } from './BaseEntity'
import { SoftDeletable } from 'mikro-orm-soft-delete'
import uuid4 from 'uuid4'

//CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
@SoftDeletable(() => User, `deletedAt`, () => new Date())
@Entity()
@Unique({ properties: [`deletedAt`, `email`] })
export class User extends CustomBaseEntity {
  @PrimaryKey({ type: `uuid`, defaultRaw: `uuid_generate_v4()` })
  id: string = uuid4()
  @Property()
  firstName!: string
  @Property({ nullable: true })
  lastName?: string
  @Property()
  email!: string
  @Property()
  password!: string
  @Property({ nullable: true, default: null })
  gender?: string
  @Property({ nullable: true, default: null })
  phone?: string
  @Property({ nullable: true, default: null })
  birthDate?: Date

  //relationships
  @ManyToOne({ entity: () => Role })
  role!: Role

  constructor() {
    super()
  }
}
