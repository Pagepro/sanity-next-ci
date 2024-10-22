import {defineType, defineField} from 'sanity'

export const cta = defineType({
  type: 'object',
  name: 'cta2',
  title: 'Call to action 2',
  fields: [
    defineField({
      type: 'string',
      name: 'label',
    }),
    defineField({
      type: 'url',
      name: 'link',
    }),
  ],
})
