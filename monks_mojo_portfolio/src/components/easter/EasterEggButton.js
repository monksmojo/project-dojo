function EasterEggButton(props) {
  return (
    <button
      type="button"
      className={props.color[props.buttonTxt]}
      onClick={() => props.setPressedKey(props.buttonTxt)}
    >
      {props.buttonTxt}
    </button>
  );
}

export default EasterEggButton;
