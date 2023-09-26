import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import ShowSeatPlace from '../ShowSeatPlace/ShowSeatPlace';
import hall_line from './img/hall_line.png';
import './Seats.scss';

const ROWS = 7;

function Seats(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [row, setRow] = useState('');
  const [seat, setSeat] = useState('');
  const rowLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const cellsPerRow = [15, 17, 17, 17, 17, 17, 19];
  const [tickets, setTickets] = useState([
    { row: 1, seat: 1 },
    { row: 2, seat: 5 },
    { row: 2, seat: 9 },
    { row: 5, seat: 10 },
    { row: 6, seat: 5 },
  ]);

  const isSeatBooked = (r, s) => tickets.some((ticket) => ticket.row === r && ticket.seat === s);
  const closeModalHandler = useCallback(() => {
    setIsClicked(false);
    setRow('');
    setSeat('');
  }, [row, seat, isClicked]);
  const handleClick = useCallback(
    (r, s) => {
      setIsClicked((prev) => !prev);
      setRow(r);
      setSeat(s);
    },
    [tickets],
  );

  return (
    <div className="hall__items">
      <div className="hall__construction">
        <figure className="hall__construction_line_container">
          <img src={hall_line} alt="hall" />
        </figure>
        <table className="hall__seats_table">
          <tbody>
            {_.range(1, ROWS + 1).map((rows, index) => (
              <tr key={rows}>
                <td className="letters">{rowLabels[index]}</td>
                {_.range(1, cellsPerRow[index] + 1).map((seats) => (
                  <td
                    key={seats}
                    style={
                      // eslint-disable-next-line no-nested-ternary
                      row === rows && seat === seats
                        ? { background: 'rgb(184, 174, 174)' }
                        : isSeatBooked(rows, seats)
                          ? { background: 'rgb(137, 52, 52)' }
                          : { background: 'rgb(18, 95, 85)' }
                    }
                    onClick={() => handleClick(rows, seats)}
                  >
                    {`${rows}/${seats}`}
                  </td>
                ))}
                <td className="letters">{rowLabels[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {row && (
        <ShowSeatPlace
          row={row}
          seat={seat}
          price={15}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
}

export default Seats;
