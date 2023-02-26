// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  }
};
var Index = defineDocumentType(() => ({
  name: "Index",
  filePathPattern: `index.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    past: {
      type: "list"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index]
});
export {
  Index,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OIDJ5AXM.mjs.map
