import "./ShowBoard.css";
import gameboard from '../Gameboard'

const Board = () => {
  // const drawGrid = () => {
  //   let board = gameboard.getGrid()
  //   gameboard.recieveAttack(3, 3)
  //   return (
  //     board.map((element, index) => (
  //       <div key={index} className="box"></div>
  //     ))
  //   )
  // };

  const drawGrid = () => {
    let board = gameboard.getGrid()
    
    return (
      <div>
        {board.map((value, index) => {
          return (
            <div className={`column ${index}`}>
              {value.map((value, index) => {
                return <div className={`row ${index}`}>{value}</div>;
              })}
            </div>
          );
        })}
      </div>
    );  
  }

  return (
    <div id='boards'>
      <div className="board">
        {drawGrid()}
      </div>
      <div className="board">
        {drawGrid()}
      </div>
    </div>
  );
};

export default Board;
