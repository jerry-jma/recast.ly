import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import data from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: 0,
      currentVideoList: data,
      allVideos: data,
    };
  }

  componentDidMount() {
    this.getYoutubeVideos('kittens');
  }

  getYoutubeVideos(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        currentVideo: 0,
        currentVideoList: videos.slice(1),
        allVideos: videos,
      });
    });
  }

  onElementClick(indexValue) {
    let dataCopy = this.state.allVideos.slice();
    dataCopy.splice(indexValue, 1);

    this.setState({
      currentVideo: indexValue,
      currentVideoList: dataCopy,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSearchInputChange={this.getYoutubeVideos.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.allVideos[0]}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList onClick={this.onElementClick.bind(this)} videos={this.state.currentVideoList} selectedVideo={this.state.currentVideo}/></div>
          </div>
        </div>
      </div>
    );
  }
}


// [0, 1, 2, 4, 5, 6, 7]

// currentVideo = 3
// currentVideoList = data without index 3


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
