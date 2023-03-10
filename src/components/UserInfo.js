import React from 'react'

export default function UserInfo(props) {
  return (
    <div className='user-info card flex-col'>
      <div className='flex-row align-items profile-img-name'>
        <img className='profile-pic' src={props.profileImg} alt="profilepic" />
        <p className='user-info-name level-1-font-size'>{props.userName}</p>
        <i className="material-symbols-rounded no-fill">manage_accounts</i>
      </div>
      <div className='flex-col user-info-content uic-1'>
        <div className='flex-row align-items'>
          <i className="material-symbols-rounded">location_on</i>
          <p className='level-2-font-size'>Surry, London</p>
        </div>
        <div className='flex-row align-items'>
          <i className="material-symbols-rounded">work</i>
          <p className='level-2-font-size'>Auror, Ministry of Magic</p>
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
          <i className="material-symbols-rounded">edit</i>
        </div>
        <div className='flex-row align-items justify-content-between'>
          <div className="align-items flex-row uic-3-d">
          <i className="fa-brands fa-linkedin"></i>
          <div className='flex-col'>
            <p className='level-1-5-font-size'><strong>Linkedin</strong></p>
            <p className="level-2-font-size">Network Platform</p>
          </div>
        </div>
          <i className="material-symbols-rounded">edit</i>
        </div>
      </div>
    </div>
  )
}

