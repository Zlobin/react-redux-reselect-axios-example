import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortBy, search } from '../Actions/app';

import SearchForm from '../Components/Search/Form';
import SortForm from '../Components/Sort/Form';

class Header extends Component {
  static propTypes = {
    sortField: PropTypes.string,
    searchQuery: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  render() {
    const {
      onSort,
      onSearch,
      sortField,
      searchQuery
    } = this.props;

    return (
      <header>
        <SearchForm searchQuery={searchQuery} handleSearch={onSearch} />
        <SortForm sortField={sortField} handleSort={onSort} />
      </header>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  sortField: app.sortField,
  searchQuery: app.searchQuery
});

const mapDispatchToProps = dispatch => ({
  onSort: field => dispatch(sortBy(field)),
  onSearch: query => dispatch(search(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
