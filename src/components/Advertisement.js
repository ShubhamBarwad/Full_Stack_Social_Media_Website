import React from 'react'
import adImg from './resources/ad_photo.jpg'

export default function Advertisement() {
  return (
    <div className='card ad-info flex-col'>
        <div className="ad-info-title flex-row align-items justify-content-between">
            <p className="level-1.5-font-size"><strong className='dark-font'>Sponsored</strong></p>
            <p className='level-2-font-size light-font'>create Ad</p>
        </div>
        <img src={adImg} alt="advertisement" />
        <div className='flex-row align-items justify-content-between'>
            <p className='level-2-font-size'>The Leaky Cauldron</p>
            <p className='level-2-font-size light-font'>theleakycauldron.in</p>
        </div>
        <p className='level-2-font-size light-font'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, aut.</p>
    </div>
  )
}
