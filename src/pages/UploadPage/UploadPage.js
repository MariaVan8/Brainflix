import "../UploadPage/UploadPage.scss";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();
  const handleSubmitClick = (e) => {
    e.preventDefault();
    alert("You succesfully uploaded the Video details");
    navigate(`/`);
  };
  return (
    <>
      <h1 className="upload__header">Upload Video</h1>
      <form className="upload-form">
        <div className="upload">
          <div className="upload__up">
            <div className="upload__left">
              <p className="upload__title">Video Thumbnail</p>
              <img src={bike} className="upload__image" />
            </div>
            <div className="upload__right">
              <label className="upload-form__label" htmlFor="content">
                Title your video
              </label>
              <textarea
                className="upload-form__title"
                name="content"
                id="content"
                placeholder="Add a title to your video"
              ></textarea>
              <label className="upload-form__label" htmlFor="content">
                Add a video description
              </label>
              <textarea
                className="upload-form__description"
                name="content"
                id="content"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
          <div className="upload__down">
            <div className="button__container">
              <Button
                handleClick={handleSubmitClick}
                className="publish__button"
                text="Publish"
              />
              <Button className="cancel__button" text="Cancel" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default UploadPage;
