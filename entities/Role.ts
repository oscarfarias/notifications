import {
  PrimaryKey,
  Entity,
  Property,
  Collection,
  OneToMany,
} from '@mikro-orm/core'
import { CustomBaseEntity } from './BaseEntity'
import { User } from './index'

@Entity()
export class Role extends CustomBaseEntity {
  @PrimaryKey()
  id!: number
  @Property()
  name!: string
  //relationships
  @OneToMany(() => User, (user) => user.role)
  users = new Collection<User>(this)
  constructor({ name }: { name: string }) {
    super()
    this.name = name
  }
}
