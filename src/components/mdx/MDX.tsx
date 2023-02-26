"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { clsx } from "clsx";

type ComponentProps = { className?: string };

const components = {
  h1: ({ className, ...props }: ComponentProps) => (
    <h1 className={clsx("text-4xl", className)} {...props} />
  ),
  h2: ({ className, ...props }: ComponentProps) => (
    <h2 className={clsx("text-3xl", className)} {...props} />
  ),
  h3: ({ className, ...props }: ComponentProps) => (
    <h3 className={clsx("text-2xl", className)} {...props} />
  ),
  h4: ({ className, ...props }: ComponentProps) => (
    <h4 className={clsx("text-xl", className)} {...props} />
  ),
  h5: ({ className, ...props }: ComponentProps) => (
    <h5 className={clsx("text-lg", className)} {...props} />
  ),
  h6: ({ className, ...props }: ComponentProps) => (
    <h6 className={clsx("text-base", className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentProps) => (
    <p className={clsx("mb-8", className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentProps) => (
    <a className={clsx(className)} {...props} />
  ),
  em: ({ className, ...props }: ComponentProps) => (
    <em className={clsx("font-serif", className)} {...props} />
  ),
  i: ({ className, ...props }: ComponentProps) => (
    <i className={clsx("font-serif", className)} {...props} />
  ),
};

interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
