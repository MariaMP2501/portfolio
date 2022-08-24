import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';

/*import {FaFacebookF} from 'react-icons/fa'; */

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin>
        <link to="https://www.linkedin.com/in/maria-mendez-paez-29a613195"/>
          </BsLinkedin> 
      </div>
      <div>
        <BsGithub>
          <a href="https://github.com/MariaMP2501/Bank-app"></a>
        </BsGithub>
      </div>
      <div>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default SocialMedia
