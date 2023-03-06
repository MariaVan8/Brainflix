import "../Videos/Videos.scss";

function Videos({ selectedVideo }) {
  return (
    <div className="video">
      <video poster={selectedVideo.image} className="video__image" />
    </div>
  );
}

export default Videos;
