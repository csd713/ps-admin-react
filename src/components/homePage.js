"use strict";

var React = require('react');

//React component for home page
var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1> User Administration </h1>
                <p> Using React, React Router, and Flux for ultra-responsive web-apps</p>
            </div>
        );
    }
});

module.exports = Home;