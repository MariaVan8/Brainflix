import "../UploadPage/UploadPage.scss";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";

function UploadPage() {
  return (
    <>
      <div className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <p className="upload__title">Video Thumbnail</p>
        <img src={bike} className="upload__image" />
      </div>
      <form className="upload-form">
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
        <Button className="publish__button" text="Publish" />
        <Button className="cancel__button" text="Cancel" />
      </form>
    </>
  );
}
export default UploadPage;
