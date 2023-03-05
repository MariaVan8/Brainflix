import "../Videos/Videos.scss";

function Videos({ selectedVideo }) {
  console.log(selectedVideo);
  return (
    <div className="video">
      <video poster={selectedVideo.image} className="video__image" />
    </div>
  );
}

export default Videos;
