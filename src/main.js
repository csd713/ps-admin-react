//Entry point for this app
$ = jQuery = require('jquery'); //bootstrap expects jQuery to be in global name space
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }

        return (
            <div>
                <Child />
            </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}
window.addEventListener('hashchange', render);
render();
/* This is saying - take Home page component and attach it to 
* the DOM element id app in index.html */
//React.render(<Home/>, document.getElementById('app'));