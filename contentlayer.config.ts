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

const Works = defineNestedType(() => ({
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
}));

export const Index = defineDocumentType(() => ({
  name: "Index",
  filePathPattern: `index.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: {
      type: "string",
      required: true,
    },
    works: {
      type: "list",
      of: Works,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index],
});
