import type { Metadata } from 'next'
import { allAiIndices } from '~/content-collections'

const aiIndex = allAiIndices[0]!

export const metadata: Metadata = {
  title: aiIndex.title,
  description: aiIndex.description,
}

export default function Plays() {
  return (
    <div className="flex w-full flex-col gap-2 pb-4">
      <div className="relative z-50 w-full animate-enter">
        <div
          className="font-light"
          dangerouslySetInnerHTML={{
            __html: aiIndex.html,
          }}
        />
      </div>
    </div>
  )
}
