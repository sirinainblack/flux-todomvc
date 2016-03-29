/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactDom = require('react-dom');
var TodoApp = require('./components/TodoApp.react');
var Login = require('./components/Login.react');

var Router = require('react-router/lib/Router');
var Route = require('react-router/lib/Route');
var IndexRoute = require('react-router/lib/IndexRoute');

const App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>App</h1>
                <Login/>
                {this.props.children}
            </div>
        );
    }
});
ReactDom.render(
    <Router>
        <Route path="/" component={App} >

            <Route path="TodoApp" component={TodoApp}/>
            <Route path="Login" component={Login}/>


        </Route>
    </Router>,
  document.getElementById('todoapp')
);
