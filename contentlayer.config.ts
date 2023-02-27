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
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
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

export const Writing = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: "writing/**/*.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index, Writing],
});
