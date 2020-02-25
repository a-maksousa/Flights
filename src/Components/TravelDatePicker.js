import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function TravelDatePicker() {
  const [date, setDate] = React.useState(new Date());

  const handleChange = date => {
    setDate(date)
  };

  return (
    <DatePicker className="DatePicker"
      selected={date}
      onChange={handleChange}
      dateFormat="EEE, dd MMM"
    />
  );
}