import "../Button/Button.scss";

function Button(props) {
  return (
    <>
      <button
        type="submit"
        onClick={props.handleClick}
        className={`button ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
