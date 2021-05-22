import React, { useState } from 'react';

export const DatesOptions = ({ dates }) => {
  const optionsDate = dates.map((date) => (
    <option value={date} key={date}>
      {date}
    </option>
  ));
  return (
    <>
      <option value="">Vyberte</option>
      {optionsDate}
    </>
  );
};
