import './About.scss'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { AppWrap } from '@/wrapper'

import { client, urlFor } from '../../client'

const About = () => {
  interface IAbout {
    imgUrl: SanityImageSource
    title: string
    description: string
  }

  const [abouts, setAbouts] = useState<IAbout[]>([])
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then(res => {
      setAbouts(res)
    })
  }, [])
  console.log(abouts)
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Css </span>
        <br />
        is
        <span> Horse SHit </span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
          >
            <img src={urlFor(about.imgUrl) as any} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')
