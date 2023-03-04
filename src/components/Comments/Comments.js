import mohan from "../../assets/Images/Mohan-muruge.jpg";
import "../../components/Comments/Comments.scss";

function Comments(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props);
  };

  console.log("PROPS:", props.selectedVideo);
  return (
    <>
      <h1>3 Comments</h1>
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
            <button className="form__button">COMMENT</button>
          </div>
        </form>
      </div>
      <div>
        {props.selectedVideo.comments.map((comment) => {
          return (
            <div className="comment">
              <div className="comment__left">
                <img src={mohan} className="comment__image" />
              </div>
              <div className="comment__right">
                <div className="comment__info">
                  <p>{comment.name}</p>
                  <p>{comment.timestamp}</p>
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
