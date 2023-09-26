import React, { useState } from 'react';
import Select from 'react-select';
import './TicketDateSelects.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function TicketDateSelects(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  return (
    <div className="select_container">
      <Select
        defaultValue={selectedDate}
        onChange={setSelectedDate}
        options={options}
        className="ticket_select"
        placeholder="Date"
      />
      <Select
        defaultValue={selectedHour}
        onChange={setSelectedHour}
        options={options}
        className="ticket_select"
        placeholder="Hour"
      />
    </div>
  );
}

export default TicketDateSelects;
