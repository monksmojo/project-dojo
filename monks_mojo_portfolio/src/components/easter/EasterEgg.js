import { C } from "../../Constants";
import EasterEggButton from "./EasterEggButton";
import { useState, useEffect, useReducer } from "react";
import { neutral } from "../../Styled";

function EasterEgg(props) {
  const [colorMap, setColorMap] = useState({
    GO: C[neutral],
    PA: C[neutral],
    LA: C[neutral],
  });
  const [keyArray, setKeyArray] = useState([]);

  useEffect(() => {
    console.log(props.readKey);
  }, [props.readKey]);

  // const checkReadKey = (value) => {
  //   if (value !== " " && value !== null) {
  //     props.readKey(value);
  //     // console.log(value);
  //     setPressedKey([...pressedKey, value]);
  //     // // setPressedKey((p) => p.push(value));
  //     const myData = [...pressedKey];
  //     console.log(myData);
  //     console.log(pressedKey);
  //   }

  //   switch (value) {
  //     case C.GO:
  //       console.log(pressedKey.length, pressedKey[0]);
  //       if (pressedKey.length >= 1 && pressedKey[0] === C.arrayKey[0]) {
  //         setKey1Class(C.correct);
  //       } else {
  //         setKey1Class(C.wrong);
  //       }
  //       break;
  //     case C.PA:
  //       console.log(pressedKey.length, pressedKey[1]);
  //       if (pressedKey.length >= 2 && pressedKey[1] === C.arrayKey[1]) {
  //         setKey2Class(C.correct);
  //       } else {
  //         setKey2Class(C.wrong);
  //       }
  //       break;
  //     case C.LA:
  //       console.log(pressedKey.length, pressedKey[2]);
  //       if (pressedKey.length >= 3 && pressedKey[2] === C.arrayKey[2]) {
  //         setKey3Class(C.correct);
  //       } else {
  //         setKey3Class(C.wrong);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="flex justify-center py-2 my-4 divide-x-2 rounded text-gray-100 divide-violet-400">
      <EasterEggButton
        readKey={props.readKey}
        buttonTxt="GO"
        color={colorMap}
      />
      <EasterEggButton
        readKey={props.readKey}
        buttonTxt="oo"
        color={colorMap}
      />
      <EasterEggButton
        readKey={props.readKey}
        buttonTxt="per"
        color={colorMap}
      />
    </div>
  );
}
export default EasterEgg;
