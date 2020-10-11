import React from 'react'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        {/* <img src={profilePic} alt={`Ramesh Syangtan`} /> */}
        <p>
          A personal blog by
          <a href="https://twitter.com/ramesh_syn">
            <strong>Ramesh Syangtan</strong>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
