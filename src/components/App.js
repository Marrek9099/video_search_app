import './Main.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SelectedVideo from './SelectedVideo';
import VideoList from './VideoList';

export default () => {
    
    const [videosList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState('');
  
    
    const onTermChange = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: '5',
                key: 'AIzaSyBYOm4jpsO-TSwZ61-Wl8FOlaqKbRnZV4g',
                q: term
           }
        });

        setVideoList(response.data.items);
        setSelectedVideo(response.data.items[0]);
       
    }


    const onVideoSelect = video => {
        setSelectedVideo(video);
    }

    
    useEffect(() => {
        onTermChange('buildings');
    }, []);
     
    return (
            <div>
                <SearchBar onTermChange={onTermChange}/>
                <div className="videos">
                    <SelectedVideo selectedVideo={selectedVideo}/>
                    <VideoList videosList={videosList} onVideoSelect={onVideoSelect}/>
                </div>
            </div>
        )  
    
  

}
