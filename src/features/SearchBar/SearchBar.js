import React, { useCallback, useState } from 'react';
import Select from 'react-select';

import { TfiMenu } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.scss';
import { Link } from 'react-router-dom';

const options = [
  { name: 'Fantasy', id: 1 },
  { name: 'Romance', id: 2 },
  { name: 'Thriller', id: 3 },
  { name: 'Western', id: 4 },
  { name: 'Comedy', id: 5 },
];

function SearchBar(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  // eslint-disable-next-line react/no-unstable-nested-components
  function CustomPlaceholder() {
    return (
      <div className="custom-placeholder">
        <TfiMenu className="menu-icon" />
        Categories
      </div>
    );
  }

  const onSelectChangeHandler = useCallback((ev) => {
  }, []);

  return (
    <div className="search_bar">
      <div className="search_bar_container">
        <div className="search_bar_left_side">
          <Select
            defaultValue={selectedOption}
            onChange={(ev) => onSelectChangeHandler(ev)}
            options={options}
            className="search_bar_select"
            components={{ Placeholder: CustomPlaceholder }}
            getOptionLabel={(o) => o.name}
            getOptionValue={(o) => o.id}
            isSearchable={false}
          />
        </div>
        <div className="search_bar_right_side">
          <div className="search_bar_inp_container">
            <input
              type="search"
              className="search_bar_inp"
              placeholder="Search"
            />
            <BsSearch className="search_bar_search_icon" />
          </div>
          <Link to="/ticket" className="search_bar_btn btn">
            Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
