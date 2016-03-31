/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var TodoActions = require('../actions/TodoActions');
var  $  = require('jquery');
var Typeahead = require('react-typeahead').Typeahead;

var Header = React.createClass({
    getInitialState: function(){
      return {searcharray : []}
    },

    componentDidMount: function(){
        $.ajax({
            url: "http://localhost:3000/terroirs/search",
            type: 'GET',
            data: {'name': ''},
            success: function (data) {
                console.log("success")
               this.setState({searcharray:data})
            }.bind(this),
            error: function (xhr, status, err) {
                console.log("didnt connect")
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>Search for terroirs</h1>
          <h2>{this.props.username}</h2>
          <Typeahead
              options={this.state.searcharray}
              maxVisible={5}
              onOptionSelected={this.itemselected}
          />

      </header>
    );
  },


  itemselected: function(text) {
    if (text.trim()){
      TodoActions.searchselection(text);
    }

  }

});

module.exports = Header;
