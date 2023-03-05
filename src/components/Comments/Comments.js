import mohan from "../../assets/Images/Mohan-muruge.jpg";
import "../../components/Comments/Comments.scss";
import ButtonComment from "../ButtonComment/ButtonComment";

function Comments({ selectedVideo }) {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  console.log("PROPS:", selectedVideo);
  return (
    <>
      <h1 className="form__header">3 Comments</h1>
      <div className="form">
        <div className="form__item-left">
          <img className="form__image" src={mohan} />
        </div>
        <form className="form__item-right" onSubmit={submitHandler}>
          <label className="form__title" htmlFor="content">
            JOIN THE CONVERSATION
          </label>
          <div className="form__container">
            <textarea
              className="form__content"
              name="content"
              id="content"
              placeholder="Add a new comment"
            ></textarea>
            <ButtonComment className="comment__button" text="COMMENT" />
          </div>
        </form>
      </div>
      <div>
        {selectedVideo.comments.map((comment) => {
          const date = new Date(selectedVideo.timestamp);
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
          const day = date.getDate();
          const formattedDateTime = `${month}/${day}/${year} `;
          return (
            <div className="comment">
              <div className="comment__left">
                <img src="{comment.avatar}" className="comment__image" />
              </div>
              <div className="comment__right">
                <div className="comment__info" key={comment.id}>
                  <p className="comment__name">{comment.name}</p>
                  <p className="comment__date">{formattedDateTime}</p>
                </div>
                <p className="comment__item">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
