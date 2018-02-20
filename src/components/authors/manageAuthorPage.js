"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Router = require('react-router');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' }
        };
    },

    //this function is called when every keypress made
    setAuthorState: function () {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    saveAuthor: function (event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author); //saving to mock API - not real save
        Toastr.success('Author saved!');
        this.transitionTo('authors');

    },

    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor} />
        );
    }
});

module.exports = ManageAuthorPage;