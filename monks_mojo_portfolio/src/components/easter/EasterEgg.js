import { C } from "../../Constants";
import EasterEggButton from "./EasterEggButton";
import { useState, useEffect } from "react";
import PreviousMap from "postcss/lib/previous-map";

function EasterEgg({ currentPhrase, setCurrentPhrase }) {
  const [colorMap, setColorMap] = useState({
    GO: C.neutral,
    PA: C.neutral,
    LA: C.neutral,
  });
  const [pressedKey, setPressedKey] = useState("");

  const updateColorMap = (key, value) => {
    const newColorMap = { ...colorMap };
    newColorMap[key] = value;
    console.log(newColorMap);
    setColorMap(newColorMap);
  };

  useEffect(() => {
    if (pressedKey !== "" && pressedKey !== null) {
      const keyArray = [...currentPhrase, pressedKey];
      setCurrentPhrase(keyArray);
      switch (pressedKey) {
        case C.GO:
          console.log(keyArray.length, keyArray);
          if (keyArray.length >= 1 && keyArray[0] === C.arrayKey[0]) {
            updateColorMap(C.GO, C.correct);
          } else {
            updateColorMap(C.GO, C.wrong);
          }
          break;
        case C.PA:
          console.log(keyArray.length, keyArray);
          if (keyArray.length >= 2 && keyArray[1] === C.arrayKey[1]) {
            updateColorMap(C.PA, C.correct);
          } else {
            updateColorMap(C.PA, C.wrong);
          }
          break;
        case C.LA:
          console.log(keyArray.length, keyArray);
          if (keyArray.length >= 3 && keyArray[2] === C.arrayKey[2]) {
            updateColorMap(C.LA, C.correct);
          } else {
            updateColorMap(C.LA, C.wrong);
          }
          break;
      }
    }
  }, [pressedKey]);

  
  return (
    <div className="flex justify-center py-2 my-4 divide-x-2 rounded text-gray-100 divide-violet-400">
      <EasterEggButton
        setPressedKey={setPressedKey}
        buttonTxt="LA"
        color={colorMap}
      />
      <EasterEggButton
        setPressedKey={setPressedKey}
        buttonTxt="GO"
        color={colorMap}
      />
      <EasterEggButton
        setPressedKey={setPressedKey}
        buttonTxt="PA"
        color={colorMap}
      />
    </div>
  );
}
export default EasterEgg;
