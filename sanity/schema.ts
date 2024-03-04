import banner from '@/schemas/banner'
import product from '@/schemas/product'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner],
}
