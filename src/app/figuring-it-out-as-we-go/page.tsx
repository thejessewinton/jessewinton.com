import { Intro } from '~/components/figuring-it-out-as-we-go/intro'

export default function FiguringItOutAsWeGo() {
  return (
    <>
      <div className='fixed left-0 top-0 z-0 size-40 h-screen w-full bg-gradient-to-br from-neutral-200 to-white dark:from-neutral-900 dark:to-neutral-950' />
      <div className='relative'>
        <Intro />
      </div>
    </>
  )
}
