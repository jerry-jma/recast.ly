import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => (
  <div className="video-list">
    {console.log(props)}
    {props.videos.map((video, index) => {
      if (index !== props.selectedVideo) {
        return <VideoListEntry onClick={(event) => props.onClick(index)} video={video} key={video.etag}/>;
      }
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
