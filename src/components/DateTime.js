import React from 'react';

const DateTime = () => {
  const curr_date = new Date();
  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = curr_date.toLocaleDateString(undefined, dateOptions);

  const dayOptions = { weekday: 'long' };
  const curr_day = curr_date.toLocaleDateString(undefined, dayOptions);

  const curr_time = new Date().toLocaleTimeString();

  return { formattedDate, curr_day, curr_time};
};

export default DateTime;
