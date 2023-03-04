import "../Description/Description.scss";

function Description({ selectedVideo }) {
  return (
    <div className="description">
      <p className="description__title">{selectedVideo.title}</p>
      <div className="description__box">
        <div className="description__left">
          <p className="description__item">{selectedVideo.channel}</p>
          <p className="description__item">{selectedVideo.timestamp}</p>
        </div>
        <div className="description__right">
          <p className="description__item">{selectedVideo.views}</p>
          <p className="description__item">{selectedVideo.likes}</p>
        </div>
      </div>
      <div>
        <p>{selectedVideo.description}</p>
      </div>
    </div>
  );
}

export default Description;
