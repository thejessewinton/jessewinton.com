import { PrismicRichText } from '@prismicio/react';

export const CallToAction = ({ heading }: any) => {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-12 border-t border-gray-300 text-center">
      <div className="flex items-center uppercase">
        <PrismicRichText field={heading} />
        {/* Want Me to&nbsp;
        <Link
          to="mailto:hi@jessewinton.com"
          className="text-accent-orange"
          icon={<ArrowTopRightIcon className="h-10 w-10 text-white" />}
        >
          Join Your Cast
        </Link> */}
      </div>
    </div>
  );
};
