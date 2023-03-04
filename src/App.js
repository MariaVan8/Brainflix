import { useState } from "react";
import "./App.scss";

import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";
import VideoList from "./components/VideoList/VideoList";
import VideoData from "./data/videos.json"; //has less info
import DetailedVideos from "./data/video-details.json"; //has more info
// import NewComment from "./components/NewComment/NewComment";
import Button from "./components/Button/Button";

function App() {
  const [videos, setVideos] = useState(VideoData); //array of videos
  const [selectedVideo, setSelectedVideo] = useState(DetailedVideos[0]); //single video

  const handleVideoClick = (id) => {
    // console.log("click", id);
    const newVideo = DetailedVideos.filter((video) => video.id === id);

    setSelectedVideo(newVideo[0]);
  };

  // const handleAddNewComment = (NewComment) => {
  //   console.log(NewComment);
  //   setSelectedVideo([...selectedVideo, NewComment]);
  // };

  return (
    <>
      <Header />
      <Button />
      <Videos selectedVideo={selectedVideo} />
      <Description selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      {/* <NewComment handleAddNewComment={handleAddNewComment} /> */}
      <VideoList
        videos={videos}
        selectedVideo={selectedVideo}
        handleVideoClick={handleVideoClick}
      />
    </>
  );
}

export default App;
