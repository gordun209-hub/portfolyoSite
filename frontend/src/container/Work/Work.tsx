import './Work.scss'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import { client, urlFor } from '../../client'
import { AppWrap } from '../../wrapper'

interface IWork {
  imgUrl: string
  title: string
  description: string
  link: string
  projectLink: string
  codeLink: string
  github: string
  name: string
  tags: Array<string>
}
const Work = () => {
  const [works, setWorks] = useState<IWork[]>([])
  const [filterWork, setFilterWork] = useState<IWork[]>([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query).then(data => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item)
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className='app__work-filter'>
        {['Web App', 'Nextjs', 'All'].map((item, index) => (
          <div
            key={index}
            aria-hidden='true'
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div key={index} className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl) as any} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5
                }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
