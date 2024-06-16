'use client'

import { Balancer } from 'react-wrap-balancer'

export const Intro = () => {
  const heading = 'Figuring It Out As We Go'
  const description =
    'A new show about death. Fun, right? Written and performed by Jesse Winton. Directed by Jacquie McCourt.'
  const delay = heading.length * 50

  return (
    <>
      <span
        className='mb-2 block animate-blur font-mono text-xs tracking-tight text-neutral-500'
        style={{
          animationDelay: `${delay * 2}ms`
        }}
      >
        <Balancer>July 16, 2024 @ Darkfest, The Tank NYC.</Balancer>
      </span>
      <h1 className='sr-only'>{heading}</h1>
      <h1 className='mb-4 text-6xl font-medium'>
        <Balancer>
          {heading.split(' ').map((word, i) => {
            return (
              <span
                key={word}
                className='animate-text mr-3 inline-block tracking-tight'
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
                className='animate-text mr-2 inline-block font-mono text-sm tracking-tight text-neutral-400'
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
