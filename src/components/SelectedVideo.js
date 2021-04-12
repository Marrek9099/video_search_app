import React from 'react';


const SelectedVideo = ({selectedVideo}) => {
    if(selectedVideo) {
        return ( 
            <div className="selectedVideo" >
                <iframe className="videoPlayer"  height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title="YouTube video player"></iframe>
                <div className="videoDescription">
                    <h3>{selectedVideo.snippet.title}</h3>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
           </div>
           )
        }
    return 'loading';
}

export default SelectedVideo;