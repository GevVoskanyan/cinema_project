import React, { useState } from 'react';
import Select from 'react-select';
import countries from 'country-list';
import { genre } from '../../data/data';
import './CatalogSelects.scss';

function CatalogSelects(props) {
  const [year, setYear] = useState('');
  const [genreValue, setGenreValue] = useState('');
  const [country, setCountry] = useState('');
  const countryOptions = countries.getData().map((c) => ({
    value: c.code,
    label: c.name,
  }));
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  // eslint-disable-next-line no-plusplus
  for (let y = currentYear; y >= currentYear - 100; y--) {
    yearOptions.push({ value: year, label: year.toString() });
  }

  return (
    <div className="catalog__select">
      <Select
        value={genreValue}
        onChange={setGenreValue}
        options={genre}
        placeholder="Genre"
        className="select"
      />

      <Select
        value={country}
        onChange={setCountry}
        options={countryOptions}
        placeholder="Country"
        className="select"
      />
      <Select
        value={year}
        onChange={setYear}
        options={yearOptions}
        placeholder="Year"
        className="select"
      />
    </div>
  );
}

export default CatalogSelects;
