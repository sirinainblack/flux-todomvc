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
var hashHistory = require('react-router/lib/hashHistory');
var IndexRoute = require('react-router/lib/IndexRoute');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Link = require('react-router/lib/Link');
var ListExample = require('./components/List.react')
var MUI = require('material-ui');
var AppBar = MUI.AppBar;
var LeftNav = MUI.LeftNav;
var MenuItem = MUI.MenuItem;
var FlatButton = MUI.FlatButton
var Search = require('./components/search.react');
const App = React.createClass({


    getInitialState: function() {
        return {open : false}
    },
    handleToggle: function () {

        console.log('hi yy!');
    },
    componentDidMount: function() {
        injectTapEventPlugin();

    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Mon Terroir"
                    onRightIconButtonTouchTap={this._handleClick}
                    iconElementRight={<FlatButton label="Sign Out" />}
                />
                <LeftNav
                    docked={false}
                    width={400}
                    open={this.state.open}
                    onRequestChange={this.reqchange}
                >
                    <MenuItem onClick={this.handleClose}><Link to="/Login">Login</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="/TodoApp">TodoApp</Link></MenuItem>

                    {this.props.children}
                </LeftNav>
                <nav>
                    <ul>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/TodoApp">App</Link></li>
                        <li><Link to="/Search">Search</Link></li>
                        <li><Link to="/List">List</Link></li>

                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
});
ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={TodoApp} />

            <Route path="TodoApp" component={TodoApp}/>
            <Route path="Login" component={Login}/>
            <Route path="Search" component={Search}/>
            <Route path="List" component={ListExample}/>



        </Route>
    </Router>,
  document.getElementById('todoapp')
);
