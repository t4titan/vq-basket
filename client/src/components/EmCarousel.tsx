import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type Partner = {
  name: string
  logo: string
}

type PropType = {
  slides: Partner[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {slides.map((src, index) => (
            <div className="embla-slide relative" key={index}>
              <img
                src={src.logo}
                alt={`Partner ${index + 1}`}
                className="max-h-full max-w-full object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel