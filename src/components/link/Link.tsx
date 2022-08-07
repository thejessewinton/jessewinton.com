import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { default as NextLink } from 'next/link';

import classNames from 'classnames';

interface LinkProps {
  children: ReactNode;
  to: string;
  as?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  activeClassName?: string;
  [key: string]: ReactNode;
}

export const Link = ({
  children,
  to,
  className,
  activeClassName,
  as,
  target,
  params,
  ...props
}: LinkProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  return (
    <NextLink href={to} as={as} passHref={isExternal}>
      <a
        className={classNames(
          className,
          'transition-colors duration-200 hover:text-accent-orange'
        )}
        target={isExternal ? '_blank' : target}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};
