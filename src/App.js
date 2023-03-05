import { useState } from "react";
import "./App.scss";

import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";
import VideoList from "./components/VideoList/VideoList";
import VideoData from "./data/videos.json"; //has less info
import DetailedVideos from "./data/video-details.json"; //has more info
import ButtonComment from "./components/ButtonComment/ButtonComment";

function App() {
  const [videos, setVideos] = useState(VideoData); //array of videos
  const [selectedVideo, setSelectedVideo] = useState(DetailedVideos[0]); //single video

  const handleVideoClick = (id) => {
    // console.log("click", id);
    const newVideo = DetailedVideos.filter((video) => video.id === id);

    setSelectedVideo(newVideo[0]);
  };

  return (
    <>
      <Header />
      <Videos selectedVideo={selectedVideo} />
      <div className="desktop">
        <div className="desktop__left">
          <Description selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="desktop__right">
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
