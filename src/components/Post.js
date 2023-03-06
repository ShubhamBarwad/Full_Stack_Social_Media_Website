import React from 'react'
import senderProfile from './resources/dumbledore_profile.jpg'
import postImg from './resources/gandalf_post.jpg'
import Comment from './Comment.js'

const showHideComments = (e) => {
  const commentDiv = e.target.parentElement.parentElement.parentElement.lastChild
  console.log(e.target.parentElement.parentElement.parentElement.lastChild)
  commentDiv.classList.toggle('hidden')
}

export default function Post(props) {
  return (
    <div className='post card flex-col'>
        <div className='flex-row align-items post-user-name'>
            <img src={senderProfile} alt="profile-pic" className='profile-pic' />
            <p className='level-1-5-font-size'><strong className='dark-font'>Albus Dubledore</strong></p>
        </div>
        <p className='level-1-5-font-size'>I invite all of you to welcome our new Defence Against the Dark Arts Teacher, Gandalf the Grey!</p>
        <img className='post-img' src={postImg} alt="postImg" />
        <div>
          <p><strong className="level-2-font-size dark-font">2546 likes</strong></p>
        </div>
        <div className='flex-row align-items post-actions-div'>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font">favorite</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Like</p> */}
          </div>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font" onClick={showHideComments}>chat_bubble</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Comment</p> */}
          </div>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font">send</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Share</p> */}
          </div>
        </div>
        <div className='flex-row align-items comment-input-div'>
          <img src={props.profileImg} className='profile-pic comment-input' alt='user profile' />
          <input className='comment-input-box' type="text" name="comment-input-box" id="commentInputBox" placeholder='Add a comment...'/>
        </div>
        <div className='all-comments anim-scroll hidden'>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
    </div>
  )
}
