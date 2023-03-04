function NewComment(props) {
  const clickHandler = () => {
    console.log("This IS A TEST!!!", props);
  };
  return (
    <>
      <p></p>
      {/* <div className="comment">
        <div className="comment__left">
          <img src={mohan} width={50} className="comment__image" />
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
      </div> */}
    </>
  );
}

export default NewComment;
