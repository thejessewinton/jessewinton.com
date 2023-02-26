// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  }
};
var Works = defineNestedType(() => ({
  name: "Works",
  fields: {
    label: { type: "string", required: true },
    title: { type: "string", required: true },
    description: {
      type: "string",
      required: true
    },
    url: {
      type: "string",
      required: false
    }
  }
}));
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
    image: {
      type: "string",
      required: true
    },
    works: {
      type: "list",
      of: Works
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
//# sourceMappingURL=compiled-contentlayer-config-VXCFQEB4.mjs.map
