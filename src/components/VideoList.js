import React from 'react';



const VideoList = ({videosList, onVideoSelect}) => {
    const renderedVideosList = videosList.map( video => {
       return ( <div onClick={() => onVideoSelect(video)} className="videoItem" key={video.id.videoId}>
                    <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
                    <p>{video.snippet.title}</p>
                </div>)
    });
    return (
        <div className="videoList">
                {renderedVideosList}
        </div>
    )
}


export default VideoList;