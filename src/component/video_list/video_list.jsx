import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({ videos }) =>
  <ul className={styles.videos}>
    {videos.map(video => <VideoItem key={video.id} video={video} />)}
  </ul>
export default VideoList;

// TODO
// List css two items per row


/*
<div className={styles.list}>
  {props.videos.map((video) => <VideoItem key={video.id} video={video} />)}
</div>
*/