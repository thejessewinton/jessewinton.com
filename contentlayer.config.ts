import { type ComputedFields, defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

const Index = defineDocumentType(() => ({
  name: 'Index',
  filePathPattern: 'index.md',
  isSingleton: true,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    works: {
      type: 'list',
      of: defineNestedType(() => ({
        name: 'Works',
        fields: {
          label: { type: 'string', required: true },
          title: { type: 'string', required: true },
          description: {
            type: 'string',
            required: true
          },
          url: {
            type: 'string',
            required: false
          }
        }
      }))
    }
  },
  computedFields
}))

const PlaysIndex = defineDocumentType(() => ({
  name: 'PlaysIndex',
  filePathPattern: 'plays.md',
  isSingleton: true,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  computedFields
}))

const Plays = defineDocumentType(() => ({
  name: 'Plays',
  filePathPattern: 'plays/**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'string',
      required: true
    },
    synopsis: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: false
    },
    completed: {
      type: 'boolean',
      required: false
    }
  }
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Index, PlaysIndex, Plays]
})
