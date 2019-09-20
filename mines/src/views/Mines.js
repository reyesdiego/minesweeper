import React from "react";
import "../App.css";
import axios from "axios";
import Cell from "./Cell";

class Mines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    };
  }
  componentDidMount() {
    //creates a new game
    axios
      .post("http://localhost:3000/games", { cols: 10, rows: 10 })
      .then(response => {
        this.setState({ game: response.data });
      });
  }

  render() {
    const { game } = this.state;

    const createTable = board => {
      let table = [];

      for (let i = 0; i < board.rows; i++) {
        let children = [];
        for (let j = 0; j < board.cols; j++) {
          const cellId = `${i}.${j}`;
          children.push(
            <td key={j}>
              <Cell cellId={cellId} cell={board[cellId]}></Cell>
            </td>
          );
        }
        table.push(<tr key={i}>{children}</tr>);
      }
      return table;
    };
    return (
      <div>
        <div className="App">
          <header className="App-header">
            {game.board ? (
              <table>
                <tbody>{createTable(game.board)}</tbody>
              </table>
            ) : null}
          </header>
        </div>
      </div>
    );
  }
}

export default Mines;
