import "./ShowBoard.css";
import gameboard from '../Gameboard'

const Board = () => {
  const drawGrid = () => {
    let board = gameboard.getGrid()
    gameboard.recieveAttack(3, 3)
    return (
      board.map((element, index) => (
          <div key={index} className="box"></div>
      ))
    )
  };

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
