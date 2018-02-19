"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>404! Page Not Found :|</h1>
                <p>Requested page not found!</p>
                <p><Link to="app"> Return to Home</Link></p>
            </div>

        );
    }
});

module.exports = NotFoundPage;