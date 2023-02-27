import React, {useState} from "react";




function Toggle() {

const [isOn, setIsOn] = useState(true);

const handleClick = () => {setIsOn(isOn => !isOn)};

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

// function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//   function handleClick() {
//     setIsOn((isOn) => !isOn);
//   }

//   return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
// }

export default Toggle;
