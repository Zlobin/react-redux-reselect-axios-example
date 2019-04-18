import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchForm extends PureComponent {
  state = {
    searchQuery: ''
  }

  onEnterTerm = event => {
    const { value: searchQuery } = event.target;

    this.setState({
      searchQuery
    });
  }

  render() {
    const { searchQuery } = this.state;
    const { handleSearch } = this.props;

    return (
      <div className="search__form">
        <TextField
          id="outlined-search"
          label="Enter search query..."
          type="search"
          margin="normal"
          variant="outlined"
          value={searchQuery}
          onChange={this.onEnterTerm}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => handleSearch(searchQuery)}
        >
          Search
        </Button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  handleSearch: PropTypes.func.isRequired
};

export default SearchForm;
