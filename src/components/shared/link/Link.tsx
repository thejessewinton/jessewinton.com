import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { default as NextLink } from 'next/link';

import classNames from 'classnames';

interface LinkProps {
  children: ReactNode;
  to: string;
  as?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  icon?: ReactNode;
  activeClassName?: string;
  [key: string]: ReactNode;
}

export const Link = ({
  children,
  to,
  className,
  icon,
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
          'hover:text-accent-orange group flex items-center gap-2 transition-colors duration-200'
        )}
        target={isExternal ? '_blank' : target}
        {...props}
      >
        {children}

        {icon && (
          <span className="transition-transform duration-500 group-hover:-translate-y-1">
            {icon}
          </span>
        )}
      </a>
    </NextLink>
  );
};
