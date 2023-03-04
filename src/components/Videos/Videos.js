import mohan from "../../assets/Images/Mohan-muruge.jpg";
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
