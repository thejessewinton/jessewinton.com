'use client'

import { Balancer } from 'react-wrap-balancer'

export const Intro = () => {
  const heading = 'Figuring It Out As We Go'
  const description =
    'A new show about death. Fun, right? Written and performed by Jesse Winton. Directed by Jacquie McCourt.'
  const eyebrow = 'July 16, 2024 @ Darkfest, The Tank NYC'
  const delay = heading.length * 50

  return (
    <>
      <span
        className='mb-2 block animate-blur text-xs text-neutral-500'
        style={{
          animationDelay: `${delay * 2}ms`
        }}
      >
        <Balancer>{eyebrow}</Balancer>
      </span>
      <h1 className='sr-only'>{heading}</h1>
      <h1 className='mb-4 text-6xl font-medium text-neutral-900 dark:text-white'>
        <Balancer>
          {heading.split(' ').map((word, i) => {
            return (
              <span
                key={word}
                className='mr-3 inline-block animate-text tracking-tight'
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              >
                {word}
              </span>
            )
          })}
        </Balancer>
      </h1>
      <div className='mt-8'>
        <h3>
          {description.split(' ').map((word, i) => {
            return (
              <span
                key={word}
                className='mr-1 inline-block animate-text text-neutral-900 dark:text-neutral-400'
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                {word}
              </span>
            )
          })}
        </h3>
      </div>
    </>
  )
}
