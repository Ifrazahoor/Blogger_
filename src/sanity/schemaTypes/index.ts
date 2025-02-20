import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import blockContent from './blockContent'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author,blockContent,category],
}
