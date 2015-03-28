jest.dontMock('../components/search-box.js');

describe('SearchBoxWithDropdown', function() {
  var React;
  var TestUtils;
  var renderedComponent;
  var searchInput;

  beforeEach(function() {
    // External dependencies
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    // Render the component
    var SearchBox = require('../components/search-box.js');
    renderedComponent = TestUtils.renderIntoDocument(<SearchBox />);
    searchInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
  });

  it('is empty to start', function() {
    // Verify that the search box is empty in it's initial state
    expect(searchInput.getDOMNode().textContent).toEqual('');
  });

  it('shows the suggestions dropdown on focus', function() {
    TestUtils.Simulate.focus(searchInput);
    var suggestions = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'search__dropdown--suggestions');
    expect(suggestions).toBeDefined();
  });

  it('shows the autocomplete dropdown when there is text in the search input', function() {
    TestUtils.Simulate.focus(searchInput);
    TestUtils.Simulate.change(searchInput, {target: {value: 'Hello, world'}});
    var autocomplete = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'search__dropdown--autocomplete');
    expect(autocomplete).toBeDefined();
  });
});
