import React from 'react'

const VideoDetail = ({video})=> {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video Player"></iframe>
            </div>
            <div className="ui segment">
                <div className="ui header">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail