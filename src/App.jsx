function App() {
  function handleClick(){
   { alert("klik!!") }
  }
  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
       <h2>Fabuła</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quae!</p>
      <button
        onClick={(handleClick)}>
       pokaz spoiler</button>
      <p>Vader okazuje sie byc ojcem luka</p>
      
    </>
  )
}

export default App;
//done//