// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Index documents */
interface IndexDocumentData {
    /**
     * Heading field in *Index*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: index.heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Blurb field in *Index*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: index.blurb
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    blurb: prismicT.RichTextField;
    /**
     * Image field in *Index*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: index.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Meta Title field in *Index*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: index.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Index*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: index.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<IndexDocumentData>, "index", Lang>;
/** Content for Site Settings documents */
interface SiteSettingsDocumentData {
    /**
     * Socials field in *Site Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    socials: prismicT.GroupField<Simplify<SiteSettingsDocumentDataSocialsItem>>;
    /**
     * Meta Title field in *Site Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Site Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in Site Settings → Socials
 *
 */
export interface SiteSettingsDocumentDataSocialsItem {
    /**
     * Label field in *Site Settings → Socials*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Site Settings → Socials*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Site Settings document from Prismic
 *
 * - **API ID**: `site_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteSettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SiteSettingsDocumentData>, "site_settings", Lang>;
/** Content for Writing documents */
interface WritingDocumentData {
    /**
     * Title field in *Writing*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: writing.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Writing*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: writing.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Meta Title field in *Writing*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: writing.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Writing*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: writing.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Writing document from Prismic
 *
 * - **API ID**: `writing`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WritingDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<WritingDocumentData>, "writing", Lang>;
export type AllDocumentTypes = IndexDocument | SiteSettingsDocument | WritingDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { IndexDocumentData, IndexDocument, SiteSettingsDocumentData, SiteSettingsDocumentDataSocialsItem, SiteSettingsDocument, WritingDocumentData, WritingDocument, AllDocumentTypes };
    }
}
