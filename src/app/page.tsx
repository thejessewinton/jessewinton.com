import { Bio } from 'components/sections/bio/Bio';
import { CallToAction } from 'components/sections/call-to-action/CallToAction';
import { Intro } from 'components/sections/intro/Intro';

const Index = () => {
  return (
    <>
      <Intro />
      <Bio />
      <CallToAction />
    </>
  );
};

export default Index;
