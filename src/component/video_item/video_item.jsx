import React from 'react';
import styles from "./video_item.module.css"

// (props) => 대신
// ({ video : {snippet} }) => destructuring
const VideoItem = ({ video: { snippet } }) =>
  <li className={styles.containter}>
    <div className={styles.video}>
      <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
export default VideoItem;
