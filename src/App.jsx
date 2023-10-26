import { useState } from "react";
function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);
    const [isWarningShown, setIsWarningShown] = useState(true);
  console.log(isSpoilerShown);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    setIsButtonShown(false);
    setIsWarningShown(false);
    console.log("handle click");
        //close warning
  }

  function handleCloseWarningClick(){
    //close warning
    setIsWarningShown(false);
    console.log("close warning");
  }

  console.log("APP RENDER");
  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      {isWarningShown && (
      <p>Uwaga! Opis fabuły zawiera spoilery!<button onClick={handleCloseWarningClick}>X</button></p>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quae!
      </p>
      {isButtonShown && <button onClick={handleShowSpoilerClick}>pokaz spoiler</button>}
      {isSpoilerShown && <p> Vader okazuje sie byc ojcem luka</p>}
    </>
  );
}

export default App;
//done//
