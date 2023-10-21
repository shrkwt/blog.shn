import React from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default'

interface VideoProps {
  poster: string
  src: string
  thumbnails: string
}

function Hls(props: VideoProps) {
  const { poster, src, thumbnails } = props

  return (
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <MediaPlayer title="Sprite Fight" src={src}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails={thumbnails} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  )
}

export default Hls
