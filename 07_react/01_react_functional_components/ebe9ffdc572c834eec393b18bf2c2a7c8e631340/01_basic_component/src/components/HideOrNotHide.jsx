import React from "react";


export const HideOrNotHide = () => {
   const [text, setText] = React.useState("text will disappear");
   const [buttonText, setButtonText] = React.useState("Hide Content")

  return (
    <div>
    <button onClick = { () => { 
      setText(null);
      setButtonText("Reveal Content")}}> {buttonText} </button>
    <p>
      {text}
    </p>
  

    </div>


  );
};
