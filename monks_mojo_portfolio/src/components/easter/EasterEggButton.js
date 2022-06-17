function EasterEggButton(props) {
  const onClickHandler = () => {
    console.log(props);
    props.readKey(props.buttonTxt);
  };
  return (
    <button
      type="button"
      className={props.color[props.buttonTxt]}
      onClick={onClickHandler}
    >
      {props.buttonTxt}
    </button>
  );
}

export default EasterEggButton;
