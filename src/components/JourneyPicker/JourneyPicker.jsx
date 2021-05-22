import React, { useState, useEffect } from 'react';
import './style.css';
import mapImage from './img/map.svg';
import { CityOptions } from './CityOptions/CityOptions';
import { DatesOptions } from './DatesOptions/DatesOptions';

export const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState(' ');
  const [toCity, setToCity] = useState(' ');
  const [date, setDate] = useState(' ');

  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((resp) => resp.json())
      .then((json) => setDates(json.data));
  }, []);

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
    console.log(
      `Odosielam formulár s cestou od ${fromCity} do ${toCity} dňa ${date}`,
    );
  };

  return (
    <div class="journey-picker container">
      <h2 class="journey-picker__head">Kam chcete jet?</h2>
      <div class="journey-picker__body">
        <form onSubmit={handleSubmit} class="journey-picker__form">
          <label>
            <div class="journey-picker__label">Odkud:</div>
            <select onChange={handleFromCityChange}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Kam:</div>
            <select onChange={handleToCityChange}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Datum:</div>
            <select onChange={handleDateChange}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div class="journey-picker__controls">
            <button class="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img class="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
