export function getIdFromRef($ref: string) {
  // id is located as a last part after slash in $ref string
  const parts = $ref.split('/')
  return parts[parts.length - 1]
}

function getOneOfType(oneOf: Array<any>) {
  const oneOfTypeArray = oneOf.map((oneOf) => oneOf.type)
  // remove duplicite types
  const oneOfTypeuniqueArray = getUniqueArray(oneOfTypeArray)
  const type = oneOfTypeuniqueArray.join(' or ')
  return { type, isArray: Boolean(oneOfTypeuniqueArray.length) }
}

function getUniqueArray(array: Array<any>) {
  return [...new Set(array)]
}

export function useSchema(schemas, schema) {
  const { $ref, oneOf } = schema
  let { type, description, format, enum: enums, default: defaultValue, properties } = schema

  let id: string | undefined
  let hasNestedSchema = false
  let isArray = false

  description = description ?? ''

  if ($ref) {
    id = getIdFromRef($ref)

    if ('properties' in schemas[id]) {
      hasNestedSchema = true
    } else {
      // should add??
      description += '\n\n'
      description += schemas[id].description
      defaultValue = schemas[id].default
      enums = schemas[id].enum

      format = schemas[id].format
      type = schemas[id].type

      if ('items' in schemas[id]) {
        type = schemas[id].items.type
        isArray = true

        if ('$ref' in schemas[id].items) {
          hasNestedSchema = true
          id = getIdFromRef(schemas[id].items.$ref)
        }

        if ('oneOf' in schemas[id].items) {
          const oneOfType = getOneOfType(schemas[id].items.oneOf)
          isArray = oneOfType.isArray
          type = oneOfType.type
        }

        if ('properties' in schemas[id].items) {
          properties = schemas[id].items.properties
        }
      }
    }
  }

  if (schema) {
    if ('items' in schema) {
      type = schema.items.type
      isArray = true

      if ('properties' in schema.items) {
        properties = schema.items.properties
      }

      if ('$ref' in schema.items) {
        hasNestedSchema = true
        id = getIdFromRef(schema.items.$ref)
      }

      if ('oneOf' in schema.items) {
        const oneOfType = getOneOfType(schema.items.oneOf)
        isArray = oneOfType.isArray
        type = oneOfType.type
      }
    }
  }

  if (oneOf) {
    const oneOfType = getOneOfType(oneOf)
    type = oneOfType.type
  }

  return {
    id,
    type,
    enums,
    defaultValue,
    format,
    description,
    hasNestedSchema: hasNestedSchema || Boolean(id),
    isArray,
    properties,
  }
}
