import React from 'react'
import profile from './resources/harry_potter_profile.jpg'

export default function comment(props) {
  return (
    <div className='comment-div'>
        <div className='flex-row align-items-top'>
            <div>
                <img src={profile} className='profile-pic comment-input' alt='user profile' />
            </div>
            <div>
                <p><strong className='level-1-5-font-size dark-font'>Harry Potter</strong></p>
                <p className="level-1-2-font-size dark-font">Wow! He looks just like you professor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi culpa impedit fugiat provident non repellat eveniet neque rem voluptatum hic sequi deleniti, natus deserunt possimus voluptatem accusamus consectetur autem tempora!</p>
                <i className="material-symbols-rounded no-fill dark-font">favorite</i>
                <i className="material-symbols-rounded no-fill dark-font">chat_bubble</i>
            </div>
        </div>
    </div>
  )
}
