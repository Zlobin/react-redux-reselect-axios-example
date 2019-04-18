import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function SortForm({ sortField = '', handleSort }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sort by</FormLabel>
      <RadioGroup
        aria-label="Sort by"
        name="sort"
        value={sortField}
        onChange={event => handleSort(event.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="Default" />
        <FormControlLabel value="DateAdded" control={<Radio />} label="DateAdded" />
        <FormControlLabel value="IsPositive" control={<Radio />} label="IsPositive" />
      </RadioGroup>
    </FormControl>
  );
}

SortForm.propTypes = {
  sortField: PropTypes.string,
  handleSort: PropTypes.func.isRequired
};

export default SortForm;
