import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
    const renderdList = videos.map( (video)=>{
        return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />
    } )
    return (
        <div>
            <h3>{videos.length} videos Found</h3>
            <div className="ui relaxed divided list">{renderdList}</div>
        </div>
    )
}
export default VideoList


