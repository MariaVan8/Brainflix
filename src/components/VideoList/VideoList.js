import "../VideoList/VideoList.scss";
// import Videos from "../Videos/Videos";

function VideoList({ videos, selectedVideo, handleVideoClick }) {
  return (
    <>
      <h1 className="videolist__header">Next videos</h1>
      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video) => (
          <div className="videolist" key={video.id}>
            <div
              className="videolist__left"
              onClick={() => handleVideoClick(video.id)}
            >
              <img className="videolist__image" src={video.image} />
              {/* <video poster={video.image} className="videolist__image" /> */}
            </div>
            <div className="videolist__right">
              <p className="videolist__title">{video.title}</p>
              <p className="videolist__name">{video.channel}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default VideoList;
