import React from 'react'
import profile from './resources/user_profile_pic.jpg'

export default function UserInfo() {
  return (
    <div className='user-info card flex-col'>
      <div className='flex-row align-items profile-img-name'>
        <img className='profile-pic' src={profile} alt="profilepic" />
        <p className='user-info-name level-1-font-size'>John Doe</p>
        <i className="material-symbols-rounded">person_add</i>
      </div>
      <div className='flex-col user-info-content uic-1'>
        <div className='flex-row align-items'>
          <i className="material-symbols-rounded">location_on</i>
          <p className='level-2-font-size'>Navi Mumbai, India</p>
        </div>
        <div className='flex-row align-items'>
          <i className="material-symbols-rounded">work</i>
          <p className='level-2-font-size'>Full-Stack Web Developer</p>
        </div>
      </div>
      <div className='flex-col user-info-content uic-2'>
        <div className='flex-row align-items justify-content-between'>
          <p className='level-2-font-size'>Who's viewed your profile</p>
          <p><strong className='dark-font'>4561</strong></p>
        </div>
        <div className='flex-row align-items justify-content-between'>
          <p className='level-2-font-size'>Impressions of your post</p>
          <p><strong className='dark-font'>4561</strong></p>
        </div>
      </div>
      <div className='flex-col user-info-content uic-3'>
        <p className='level-1-font-size'><strong>Social Profiles</strong></p>
        <div className='flex-row align-items justify-content-between'>
          <div className="align-items flex-row uic-3-d">
          <i className="fa-brands fa-twitter"></i>
          <div className='flex-col'>
            <p className='level-1-5-font-size'><strong>Twitter</strong></p>
            <p className="level-2-font-size">Social Network</p>
          </div>
        </div>
          <i class="material-symbols-rounded">edit</i>
        </div>
        <div className='flex-row align-items justify-content-between'>
          <div className="align-items flex-row uic-3-d">
          <i className="fa-brands fa-twitter"></i>
          <div className='flex-col'>
            <p className='level-1-5-font-size'><strong>Linkedin</strong></p>
            <p className="level-2-font-size">Network Platform</p>
          </div>
        </div>
          <i class="material-symbols-rounded">edit</i>
        </div>
      </div>
    </div>
  )
}

