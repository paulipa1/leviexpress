import React, { useState } from 'react';
import './style.css';
import mapImage from './img/map.svg';

export const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState(' ');
  const [toCity, setToCity] = useState(' ');
  const [date, setDate] = useState(' ');

  const handleFromCityChange = (e) => {
    console.log(e.target.value);
  };
  const handleToCityChange = (e) => {
    console.log(e.target.value);
  };
  const handleDateChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log(fromCity, toCity, date);
  };

  return (
    <div class="journey-picker container">
      <h2 class="journey-picker__head">Kam chcete jet?</h2>
      <div class="journey-picker__body">
        <form class="journey-picker__form">
          <label>
            <div class="journey-picker__label">Odkud:</div>
            <select onChange={handleFromCityChange}>
              <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Kam:</div>
            <select onChange={handleToCityChange}>
              <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Datum:</div>
            <select onChange={handleDateChange}>
              <option value="">Vyberte</option>
              <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option>
            </select>
          </label>
          <div class="journey-picker__controls">
            <button onClick={handleSubmit} class="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img class="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
