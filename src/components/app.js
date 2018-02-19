/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); //bootstrap expects jQuery to be in global name space

var App = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;