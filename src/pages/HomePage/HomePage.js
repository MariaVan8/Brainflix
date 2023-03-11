import { useState, useEffect } from "react";
import Videos from "../../components/Videos/Videos";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// import VideoData from "../../data/videos.json";
// import DetailedVideos from "../../data/video-details.json";

const api = "https://project-2-api.herokuapp.com";
const apiKey = "fc3d88f5-649d-4acb-b2ce-4e66a5e9c423";

function HomePage() {
  const [videos, setVideos] = useState([]); //array of videos
  const [selectedVideo, setSelectedVideo] = useState({}); //single video
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getSelectedVideo(videoId);
    } else if (videos.length) {
      console.log("videoid: ", videos[0].id);
      getSelectedVideo(videos[0].id);
    }
  }, [videoId, videos]);

  function getVideos() {
    axios
      .get(`${api}/videos?api_key=${apiKey}`)
      .then((response) => {
        console.log("response from get videos: ", response.data);
        setVideos(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

  function getSelectedVideo(videoId) {
    axios
      .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
      .then((response) => {
        console.log("response from get videos: ", response.data);
        setSelectedVideo(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

  // const handleVideoClick = (id) => {
  //   const newVideo = getVideos.filter((video) => video.id === id);

  //   setSelectedVideo(newVideo[0]);
  // };

  return (
    <>
      <Videos selectedVideo={selectedVideo} />
      <div className="desktop">
        <div className="desktop__left">
          <Description selectedVideo={selectedVideo} />
          <Comments comments={selectedVideo.comments} />
        </div>
        <div className="desktop__right">
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            // handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
