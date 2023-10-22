
import { PersonInfo } from "./components/PersonInfo";
import dogImg from "./assets/dog.jpg"
function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "j.kowalski@gmail.com",
    tel: "+48 999 999 999"
  };
  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "j.kowalska@gmail.com",
    tel: "+48 999 999 888"
  };
  const karol = {
    name: "Karol",
    lastName: "Kowalski",
    mail: "k.kowalski@gmail.com",
  };
  const imageLink = "https://zrozumiecreact.pl/dog.jpg";
  return (
    <>
    <PersonInfo person={jan} />
    <br />
   <PersonInfo person={janina} />
   <br />
   <PersonInfo person={karol} />
   <img src={imageLink} alt="dog" />
   </>
   

  );
}

export default App;
