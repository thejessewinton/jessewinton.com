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
var Work = defineNestedType(() => ({
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
    works: {
      type: "list",
      of: Work
    }
  },
  computedFields
}));
var Role = defineNestedType(() => ({
  name: "Roles",
  fields: {
    character: { type: "string", required: true },
    show: { type: "string", required: true },
    company: {
      type: "string",
      required: true
    },
    director: {
      type: "string",
      required: true
    },
    award: {
      type: "string",
      required: false
    }
  }
}));
var Resume = defineDocumentType(() => ({
  name: "Resume",
  filePathPattern: `resume.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    shows: {
      type: "list",
      of: Role
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index, Resume]
});
export {
  Index,
  Resume,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HHUUPGVB.mjs.map
