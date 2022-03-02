import './Skills.scss'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import MotionWrap from '@/wrapper/MotionWrap'

import { client, urlFor } from '../../client'
import { AppWrap } from '../../wrapper'

interface ISkills {
  name: string
  bgColor: string
  icon: string
}
interface IWork {
  name: string
  desc: string
  company: string
}
interface IExperience {
  experience: number
  year: number
  works: Array<IWork>
}
const Skills = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([])
  const [skills, setSkills] = useState<ISkills[]>([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then(data => {
      setExperiences(data)
    })

    client.fetch(skillsQuery).then(data => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon) as any} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-exp'>
          {experiences.map(experience => (
            <motion.div key={experience.year} className='app__skills-exp-item'>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map(work => (
                  <>
                    <motion.div
                      key={work.name}
                      data-tip
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-for={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
