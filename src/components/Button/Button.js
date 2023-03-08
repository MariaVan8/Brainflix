import "../Button/Button.scss";

function Button(props) {
  return (
    <>
      <button type="submit" className={`button ${props.className}`}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
