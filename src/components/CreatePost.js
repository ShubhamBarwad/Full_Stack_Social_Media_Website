import React from 'react'
import profile from './resources/harry_potter_profile.jpg'

export default function CreatePost() {
  return (
    <div className='create-post-div flex-col card'>
      <div className="new-post-div flex-row align-items justify-content-center">
        <img className='profile-pic' src={profile} alt="profile pic" />
        <input type="text" name="createPost" id="createPost" placeholder="What's on your mind?" />
      </div>
      <div className="break"></div>
      <div className="attachments flex-row align-items justify-content-between">
        <div className="attachment-div flex-row align-items justify-content-center">
          <i className="material-symbols-rounded no-fill">image</i>
          <p className='level-2-font-size hide-on-mobile'>Image</p>
        </div>
        <div className="attachment-div flex-row align-items justify-content-center">
          <i className="material-symbols-rounded no-fill">attach_file</i>
          <p className='level-2-font-size hide-on-mobile'>Attachment</p>
        </div>
        <div className="attachment-div flex-row align-items justify-content-center">
        <i className="material-symbols-rounded no-fill">mic</i>
        <p className='level-2-font-size hide-on-mobile'>Audio</p>
        </div>
        <button className='custom-button'>Post</button>
      </div>
    </div>
  )
}
