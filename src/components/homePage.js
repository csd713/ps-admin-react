"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

//React component for home page
var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1> User Administration </h1>
                <p> Using React, React Router, and Flux for ultra-responsive web-apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;