import React from 'react';

const VideoItem = (props) =>
  <li key={props.video.id}>{props.video.snippet.title}</li>
export default VideoItem;
