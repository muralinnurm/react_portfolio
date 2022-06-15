import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillBehanceCircle} from 'react-icons/ai'

export default function HeaderSocial() {
  return (
    <div className='header-socials'>
      <a href="https://www.facebook.com/mursalinnurm/" target="_blank"><BsFacebook/></a>
      <a href="https://github.com/muralinnurm/" target="_blank"><BsGithub/></a>
      <a href="https://www.behance.net/mnur2" target="_blank"><AiFillBehanceCircle/></a>
    </div>
  )
}
