/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */
var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var  $  = require('jquery');
var  jQuery  = require('jquery');
var TodoStore = require('../stores/TodoStore');
var Login = require('./Login.react');

var Link = require('react-router/lib/Link');
window.$ = $;
window.jQuery = jQuery;
/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete(),
    username: TodoStore.getUsername(),
    terrList: TodoStore.getterrList(),
    open : false
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },
  handleToggle: function () {
    this.setState({open: !this.state.open});
    console.log('hi !');
  },

  handleClose: function () {
    this.setState({open: true});
  },
  reqchange: function(open){
    console.log("something");
    this.setState({open : !this.state.open})
  },
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    return (
      <div>
        <MainSection
          allTerroirs={this.state.terrList}
          areAllComplete={this.state.areAllComplete}
        />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = TodoApp;
