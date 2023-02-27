import type { ComputedFields } from "contentlayer/source-files";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

export const Index = defineDocumentType(() => ({
  name: "Index",
  filePathPattern: "index.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    works: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Works",
        fields: {
          label: { type: "string", required: true },
          title: { type: "string", required: true },
          description: {
            type: "string",
            required: true,
          },
          url: {
            type: "string",
            required: false,
          },
        },
      })),
    },
  },
  computedFields,
}));

export const Resume = defineDocumentType(() => ({
  name: "Resume",
  filePathPattern: "resume.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    shows: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Roles",
        fields: {
          character: { type: "string", required: true },
          show: { type: "string", required: true },
          company: {
            type: "string",
            required: true,
          },
          director: {
            type: "string",
            required: true,
          },
          award: {
            type: "string",
            required: false,
          },
        },
      })),
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index, Resume],
});
