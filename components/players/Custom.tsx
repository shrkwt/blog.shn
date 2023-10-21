import React from 'react'

interface SparkProps {
  poster: string
  src: string
}

function Hola(props: SparkProps) {
  const { poster, src } = props

  const embedHtml = {
    srcDoc: `<style>
      *{padding:0;margin:0;overflow:hidden}
      body,html{height:100%}
      img,svg{position:absolute;width:100%;top:0;bottom:0;margin:auto}
      svg{filter:drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));transition:250ms ease-in-out}
      body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));transform:scale(1.2)}
    </style>
    <a href='https://www.speedynet.eu.org/apps/spark?link=${src}'>
      <img src='${poster}' alt='Thumbnail' />
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'>
        <circle cx='12' cy='12' r='10'></circle>
        <polygon points='10 8 16 12 10 16 10 8'></polygon>
      </svg>
    </a>`,
  }

  return (
    <div className="aspect-w-16 aspect-h-9 mb-4 relative">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          title="Video embed"
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

export default Hola
