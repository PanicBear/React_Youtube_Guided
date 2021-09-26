
import { useEffect, useState } from 'react';
import VideoList from './component/video_list/video_list';
import './css/app.css';


const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAAGc5-7w931KT4BPwH9Mv8X9ctk0f1TVc", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [videos]);
  return <VideoList videos={videos} />
};

export default App;