import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchComments } from '../Actions/app';

import Header from './Header';
import Comments from './Comments';
import Spinner from '../Components/Spinner/Spinner';

class App extends Component {
  static propTypes = {
    isInitialized: PropTypes.bool.isRequired,
    onFetchComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { isInitialized } = this.props;

    if (!isInitialized) {
      this.props.onFetchComments();
    }
  }

  renderApp() {
    return <Fragment>
      <Header />
      <Comments />
    </Fragment>;
  }

  render() {
    return (
      <Fragment>
        {
          this.props.isInitialized
            ? this.renderApp()
            : <Spinner />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isInitialized: app.isInitialized
});

const mapDispatchToProps = dispatch => ({
  onFetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
