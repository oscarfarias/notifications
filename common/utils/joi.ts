//https://joi.dev/api/?v=17.4.2#errors
import Joi from 'joi'
import moment from 'moment'
const messages = {
  FIELD_REQUIRED: `Este campo es requerido.`,
  STRING_LENGTH: `Este campo debe ser de {#limit} caracteres`,
  STRING_MIN: `Este campo debe ser de mínimo {#limit} caracteres`,
  STRING_MAX: `Este campo debe ser de máximo {#limit} caracteres`,
  STRING_DOMAIN: `{{#label}} debe ser un dominio válido`,
  STRING_EMAIL: `Ingrese un email válido`,
  STRING_ALPHANUM: `{{#label}} solo puede contener caracteres alfanuméricos`,
  STRING_TRIM: `{{#label}} no debe contener espacio en blanco al principio o al final`,
  ANY_ONLY: `{{#label}} no coincide`,
  NUMBER_BASE: `Ingrese al menos un número`,
  NUMBER_MAX: `Este campo debe ser menor o igual a {#limit}`,
  NUMBER_MIN: `Este campo debe ser mayor o igual a {#limit}`,
  VALID_MOMENT: `{{#label}} es requerido.`,
}

export const joiMessages = {
  'string.empty': messages.FIELD_REQUIRED,
  'string.base': messages.FIELD_REQUIRED,
  'string.length': messages.STRING_LENGTH,
  'string.min': messages.STRING_MIN,
  'string.max': messages.STRING_MAX,
  'string.domain': messages.STRING_DOMAIN,
  'string.email': messages.STRING_EMAIL,
  'string.alphanum': messages.STRING_ALPHANUM,
  'string.trim': messages.STRING_TRIM,
  'any.only': messages.ANY_ONLY,
  'number.base': messages.NUMBER_BASE,
  'any.required': messages.FIELD_REQUIRED,
  'number.max': messages.NUMBER_MAX,
  'number.min': messages.NUMBER_MIN,
}

export const AugmentedJoi = Joi.extend((joi) => ({
  base: joi.any(),
  type: `moment`,
  messages: {
    validMoment: messages.FIELD_REQUIRED,
  },
  rules: {
    date: {
      validate(value, helpers) {
        if (!moment.isMoment(value)) {
          return helpers.error(`validMoment`)
        }
        return value
      },
    },
  },
}))
