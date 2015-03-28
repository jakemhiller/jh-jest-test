import React from 'react';

export default React.createClass({

  getInitialState: function() {
    return {
      maxWidth: 300,
      isFocused: false,
      value: ''
    };
  },

  onFocus: function() {
    this.setState({isFocused: true});
  },

  onBlur: function() {
    this.setState({isFocused: false});
  },

  onChange: function(e) {
    if (!e.target.value) return;
    this.setState({value: e.target.value.trim()});
  },

  getCurrentDropdown: function(style) {
    if (!this.state.isFocused) return false;

    if (this.state.value) {
      return (
        <div className="search__dropdown search__dropdown--autocomplete" style={style}>
          autocomplete
        </div>
      );
    } else {
      return (
        <div className="search__dropdown search__dropdown--suggestions" style={style}>
          suggestions
        </div>
      );
    }
  },

  render: function() {

    let searchStyle = {
      maxWidth: this.state.maxWidth
    };

    let searchInputStyle = {
      width: '100%',
      fontSize: 16
    };

    let autocompleteStyle = {
      border: '1px solid #eee',
      borderRadius: 2,
      marginTop: 5,
      padding: 5
    };

    return (
      <div className="search" style={searchStyle}>
        <input
          className="search__input"
          type="search"
          placeholder="Search"
          style={searchInputStyle}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        >
          {this.state.value}
        </input>
        {this.getCurrentDropdown(autocompleteStyle)}
      </div>
    );
  }
});
