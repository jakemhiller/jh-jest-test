jest.dontMock('../components/search-box.js');

describe('SearchBoxWithDropdown', function() {

  it('is empty to start', function() {
    var React = require('react/addons');
    var SearchBox = require('../components/search-box.js');

    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var searchDom = TestUtils.renderIntoDocument(<SearchBox />);

    var input = TestUtils.findRenderedDOMComponentWithTag(searchDom, 'input');
    expect(input).toBeDefined();

    // Verify that it's Off by default
    expect(input.getDOMNode().textContent).toEqual('2');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.focus(input);
    var suggestions = TestUtils.findRenderedDOMComponentWithClass(searchDom, 'search__dropdown');
    expect(suggestions.getDOMNode().textContent).toEqual('suggestions');

    TestUtils.Simulate.change(input);
    var autocomplete = TestUtils.findRenderedDOMComponentWithClass(searchDom, 'search__dropdown');
    expect(autocomplete.getDOMNode().textContent).toEqual('suggestions');
  });
});
