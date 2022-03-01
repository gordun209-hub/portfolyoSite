import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app_header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I am </p>
              <h1 className='head-text'> Alihan</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>I love react</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
