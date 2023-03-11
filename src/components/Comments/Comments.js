import mohan from "../../assets/Images/Mohan-muruge.jpg";
import "../../components/Comments/Comments.scss";
import ButtonComment from "../ButtonComment/ButtonComment";

function Comments({ comments }) {
  console.log(comments);
  if (!comments) return;
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="form__header">{comments.length} Comments</h1>
      <div className="form">
        <div className="form__item-left">
          <img className="form__image" src={mohan} />
        </div>
        <form className="form__item-right" onSubmit={submitHandler}>
          <label className="form__title" htmlFor="content">
            Join the conversation
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
        {comments?.map((comment) => {
          const date = new Date(comment.timestamp);
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
          const day = date.getDate();
          const formattedDateTime = `${month}/${day}/${year} `;
          return (
            <div className="comment" key={comment.id}>
              <div className="comment__left">
                <div className="comment__image" />
              </div>
              <div className="comment__right">
                <div className="comment__info">
                  <p className="comment__name">{comment.name}</p>
                  <p className="comment__date">{formattedDateTime}</p>
                </div>
                <p className="comment__item" key={comment.id}>
                  {comment.comment}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
