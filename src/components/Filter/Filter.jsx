import PropTypes from 'prop-types';

import {FilterStyled, FilterInputStyled} from './FilterStyled';

export const Filter = ({ filter, onChange }) => {
    return(
    <FilterStyled>
        Filtr name
        <FilterInputStyled
            type="text"
            value={filter}
            onChange={onChange}
        />
        </FilterStyled>
    )
    };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};