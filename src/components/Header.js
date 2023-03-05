import React from 'react'

export default function Header() {
  return (
    <div className='header flex-row align-items' id='header'>
        <h1 className='header-ls'>beano<span>.</span></h1>
        <h1 className='header-ss'>b<span>.</span></h1>
        <div className='menu flex-row align-items'>
            <span className="material-symbols-rounded">notifications</span>
            <span className="material-symbols-rounded">chat</span>
            <span className="material-symbols-rounded">help</span>
            <span className="material-symbols-rounded">person</span>
        </div>
    </div>
  )
}
