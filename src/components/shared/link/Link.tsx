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
  iconHover?: 'down' | 'up';
  activeClassName?: string;
  [key: string]: ReactNode;
}

export const Link = ({
  children,
  to,
  className,
  icon,
  iconHover = 'up',
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
          'group flex items-center gap-2 transition-colors duration-200 hover:text-accent-orange'
        )}
        target={isExternal ? '_blank' : target}
        {...props}
      >
        {children}

        {icon && (
          <span
            className={classNames(
              'transition-transform duration-500 group-hover:translate-x-1',
              iconHover === 'down'
                ? 'group-hover:translate-y-1'
                : 'group-hover:-translate-y-1 group-hover:translate-x-1'
            )}
          >
            {icon}
          </span>
        )}
      </a>
    </NextLink>
  );
};
