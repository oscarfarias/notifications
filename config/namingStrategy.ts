import { EntityCaseNamingStrategy } from '@mikro-orm/core'
import pluralize from 'pluralize'
import { capitalizeFirstLetter } from '../common/utils/format'

export default class CustomNamingStrategy extends EntityCaseNamingStrategy {
  classToTableName(entityName: string): string {
    return capitalizeFirstLetter(pluralize(entityName))
  }
  joinColumnName(propertyName: string): string {
    return `${propertyName}Id`
  }
  joinTableName(sourceEntity: string, targetEntity: string): string {
    return `${capitalizeFirstLetter(sourceEntity)}${capitalizeFirstLetter(
      targetEntity,
    )}`
  }
  joinKeyColumnName(entityName: string, referencedColumnName?: string): string {
    const name = entityName.substr(0, 1).toLowerCase() + entityName.substr(1)
    if (referencedColumnName) {
      return `${name}${capitalizeFirstLetter(referencedColumnName)}`
    }
    return name
  }
}
