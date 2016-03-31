/**
 * Created by sirine on 30/03/16.
 */


var React = require('react');
var ReactPropTypes = React.PropTypes;
var Header = require('./Header.react');
var ListExample = require('./List.react');
var TodoStore = require('../stores/TodoStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var  $  = require('jquery');
var Typeahead = require('react-typeahead').Typeahead;
var TodoActions = require('../actions/TodoActions');

var Search = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
        return {searcharray : [], otherarray: []}
    },
    propTypes: {
        allTerroirs: ReactPropTypes.array,
        areAllComplete: ReactPropTypes.bool
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
var temparray=[];
        return (
            <div>
                <h1>Search for terroirs</h1>
                <h2>{this.props.username}</h2>
                <Typeahead
                    options={this.state.searcharray}
                    maxVisible={5}
                    onOptionSelected={this.itemselected}
                />
                <ListExample list={this.state.otherarray}/>
            </div>
        )
    },
    itemselected: function(text) {
      /* if (text.trim()){
      //      TodoActions.searchselection(text);
        }*/
this.setState({otherarray: [text]})
        console.log(this.state.otherarray)
    }
    /**
     * Event handler to mark all TODOs as complete
     */


});

module.exports = Search;
