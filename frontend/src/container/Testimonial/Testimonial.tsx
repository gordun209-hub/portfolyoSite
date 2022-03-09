/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Testimonial.scss'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

interface ITestimonials {
  feedback: string
  name: string
  company: string
  imgurl: string
}
interface IBrands {
  _id: number
  imgUrl: string
  name: string
}
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([])
  const [brands, setBrands] = useState<IBrands[]>([])

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(query).then(data => {
      setTestimonials(data)
    })

    client.fetch(brandsQuery).then(data => {
      setBrands(data)
      console.log(testimonials)
    })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img
              src={urlFor(testimonials[currentIndex].imgurl) as any}
              alt={testimonials[currentIndex].name}
            />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonials[currentIndex].name}</h4>
                <h5 className='p-text'>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map(brand => (
          <motion.div
            key={brand._id}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src={urlFor(brand.imgUrl) as any} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)
