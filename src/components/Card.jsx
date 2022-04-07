import React from 'react'

const Card = () => {
  return (
    <div className="flex justify-center align-center">
      <div class="card">
        <div class="inner container text-center">
          <h1 class="font-roboto text-[48px]">Video Feed</h1>
          <img
            src="http://192.168.65.110:9000/?action=stream"
            class="video-feed"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
