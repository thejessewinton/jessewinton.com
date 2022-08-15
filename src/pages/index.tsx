import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { PrismicDocument } from '@prismicio/types';

import { createClient } from '../../prismic.config';

import { Bio } from 'components/sections/bio/Bio';
import { CallToAction } from 'components/sections/call-to-action/CallToAction';
import { Gallery } from 'components/sections/gallery/Gallery';
import { Intro } from 'components/sections/intro/Intro';

type IndexPage = NextPage & {
  document: PrismicDocument;
};

const Index = ({ document }: IndexPage) => {
  console.log(document.data.gallery);
  return (
    <>
      <NextSeo title={document.data.meta_title} />
      <Intro
        upNext={document.data.up_next}
        link={document.data.ticket_link.url}
        image={document.data.intro_image}
        blurb={document.data.intro_blurb}
      />
      <Bio
        roles={document.data.roles}
        bio={document.data.bio}
        image={document.data.bio_image}
        url={document.data.resume.url}
      />
      <CallToAction
        heading={document.data.heading}
        cta={document.data.call_to_action}
        link={document.data.link}
      />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const document = await client.getSingle('index');

  return {
    props: {
      document,
    },
  };
};
