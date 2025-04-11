
import { useState } from "react";
import "./App.css";

function Squre({ position, setClickedSqures ,ClickedSqures}) {
  const handleClick = () => {
    console.log(`Square clicked at: ${position.x}, ${position.y}`);
    setClickedSqures([...ClickedSqures,position]);

  };
  function checkIfmark(){
    const click = ClickedSqures.find((element) => {
      if(element.x===position.x && element.y===position.y){
        console.log("element");
        return true;
      }
    });
    console.log("click",click);
    if(click){
      return 'X';
    }
  }
  return <span onClick={handleClick}>{checkIfmark()}</span>;
}

function App() {
  const [ClickedSqures,setClickedSqures] = useState([]);
  console.log("clickedSqures",ClickedSqures);

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="row">
            <Squre position={{ x: 0, y: 2 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 1, y: 2 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 2, y: 2 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
          </div>
          <div className="row">
            <Squre position={{ x: 0, y: 1 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 1, y: 1 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 2, y: 1 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
          </div>
          <div className="row">
            <Squre position={{ x: 0, y: 0 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 1, y: 0 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
            <Squre position={{ x: 2, y: 0 }} setClickedSqures={setClickedSqures} ClickedSqures={ClickedSqures} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
