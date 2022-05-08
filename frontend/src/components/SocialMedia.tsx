import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FcReddit } from 'react-icons/fc'
export const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/Alihan71123417'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.reddit.com/user/PaintingLegitimate69'>
          <FcReddit />
        </a>
      </div>
      <div>
        <a href='https://github.com/gordun209-hub'>
          <AiFillGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
