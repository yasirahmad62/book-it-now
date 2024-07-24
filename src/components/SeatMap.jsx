import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSeats } from '../store/bookingSlice';
import "./SeatMap.css";
import CheckoutButton from "./CheckoutButton";
import Handicap from "../icons/Handicap";

const SeatMap = ({ onSelectSeats,pricing}) => {
  const dispatch = useDispatch();
  const ticketPrice = 2400; // Example price in cents
  const convenienceFee = 340; // Example fee in cents
  const seatingPlan = {
    seating_plan_id: "xyz1234566",
    booked_seats: [0, 1, 2, 5, 19, 20, 23, 120, 39],
  };
  
  const groups = [
    { price: 25, rows: ['A', 'B'] },
    { price: 24, rows: ['C', 'D', 'E', 'F', 'G'] },
    { price: 21, rows: ['H', 'I', 'J', 'K', 'L', 'M'] },
  ];
  
  const rowSeats = {
    'A': 10,
    'B': 12,
    'C': 23,
    'D': 23,
    'E': 23,
    'F': 23,
    'G': 23,
    'H': 23,
    'I': 23,
    'J': 23,
    'K': 23,
    'L': 23,
    'M': 23,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);
  const handleSeatClick = (seatIndex) => {
    if (!seatingPlan.booked_seats.includes(seatIndex)) {
      const updatedSeats = selectedSeats.includes(seatIndex)
        ? selectedSeats.filter((seat) => seat !== seatIndex)
        : [...selectedSeats, seatIndex];

      setSelectedSeats(updatedSeats);
      onSelectSeats(updatedSeats);
      dispatch(setSeats(updatedSeats));
    }
  };

  const renderSeats = (row, startIndex) => {
    const seats = [];
    for (let i = 0; i < rowSeats[row]; i++) {
      const seatIndex = startIndex + i;
      seats.push(
        <div
          key={seatIndex}
          className={`seat ${
            seatingPlan.booked_seats.includes(seatIndex) ? "booked" : ""
          } ${selectedSeats.includes(seatIndex) ? "selected" : ""}`}
          onClick={() => handleSeatClick(seatIndex)}
        >
          {row === 'M' && (seatIndex === startIndex + 0 || seatIndex === startIndex + 22 || seatIndex === startIndex + 21) ? (
            <Handicap />
          ) : (
            i + 1
          )}
        </div>
      );
    }
    return seats;
  };


  let seatIndex = 0;
  return (
    <div className="seat-map">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="group">
          {group.rows.map((row) => (
            <div key={row} className="section">
              <h6 className="rowName">{row}</h6>
              <div className="seats">{renderSeats(row, seatIndex)}</div>
              <p className="hide">{seatIndex += rowSeats[row]}</p>
            </div>
          ))}
        </div>
      ))}

      <p>Screen this side</p>
      <div className="legend">
        <div>
          <span className="seat available"></span> Available
        </div>
        <div>
          <span className="seat selected"></span> Selected
        </div>
        <div>
          <span className="seat booked"></span> Sold
        </div>
      </div>
      <CheckoutButton
        selectedSeats={selectedSeats}
        ticketPrice={ticketPrice}
        convenienceFee={convenienceFee}
      />
    </div>
  );
};

export default SeatMap;
