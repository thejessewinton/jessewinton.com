/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'images.prismic.io'],
  },
  experimental: {
    appDir: true,
  },
});
