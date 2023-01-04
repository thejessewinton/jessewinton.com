import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body className="scroll-smooth text-sm leading-loose tracking-wide text-primary dark:bg-primary dark:text-neutral-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
