import "../VideoList/VideoList.scss";
// import Videos from "../Videos/Videos";

function VideoList({ videos, selectedVideo, handleVideoClick }) {
  return (
    <>
      <h1 className="videolist__header">Next videos</h1>
      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video) => (
          <div className="videolist">
            <div
              className="videolist__left"
              key={video.id}
              onClick={() => handleVideoClick(video.id)}
            >
              <img className="videolist__image" src={video.image} />
              {/* <video src={video.url}></video> */}
            </div>
            <div className="videolist__right">
              <p className="videolist__title">{video.title}</p>
              <p className="videolist__name">{video.channel}</p>
            </div>
          </div>
        ))}
      <div className="extra"></div>
    </>
  );
}

export default VideoList;
