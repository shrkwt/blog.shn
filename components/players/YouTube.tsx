'use client'
import React from 'react'

interface YouTubeProps {
  video: string
}

function Youtube(props: YouTubeProps) {
  const { video } = props

  const embedHtml = {
    srcDoc: `<style>
      * { padding: 0; margin: 0; overflow: hidden }
      body, html { height: 100% }
      img, svg { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto }
      svg { filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%)); transition: 250ms ease-in-out }
      body:hover svg { filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%)); transform: scale(1.2) }
    </style>
    <a href='https://www.youtube.com/embed/${video}?autoplay=0&mute=1&amp;controls=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3'>
      <img src='https://img.youtube.com/vi/${video}/hqdefault.jpg' alt='Thumbnail' />
      <?xml version="1.0" encoding="utf-8"?>
      <svg width="84px" height="84px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z" />
        <path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208" />
      </svg>
    </a>`,
  }

  return (
    <div className="aspect-w-16 aspect-h-9 mb-4 relative">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          title="Youtube embed"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          {...embedHtml}
        ></iframe>
      </div>
    </div>
  )
}

export default Youtube
