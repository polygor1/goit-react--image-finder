import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter search query.');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormBtn}>
              <span className={styles.SearchFormBtnLabel}>Search</span>
            </button>
            <input
              className={styles.SearchFormInput}
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
            />
          </form>
        </header>
      </>
    );
  }
}
