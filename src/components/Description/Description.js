import "../Description/Description.scss";
import heart from "../../assets/Icons/likes.svg";
import views from "../../assets/Icons/views.svg";

function Description({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = date.getDate();
  const formattedDateTime = `${month}/${day}/${year} `;

  return (
    <div className="description">
      <p className="description__title">{selectedVideo.title}</p>
      <div className="description__box">
        <div className="description__left">
          <p className="description__item description__item-special ">
            {selectedVideo.channel}
          </p>
          <p className="description__item">{formattedDateTime}</p>
        </div>
        <div className="description__right">
          <p className="description__item">
            <img className="description__icon" src={views} />
            {selectedVideo.views}
          </p>
          <p className="description__item">
            <img className="description__icon" src={heart} />
            {selectedVideo.likes}
          </p>
        </div>
      </div>
      <div>
        <p className="description__paragraph">{selectedVideo.description}</p>
      </div>
    </div>
  );
}

export default Description;
