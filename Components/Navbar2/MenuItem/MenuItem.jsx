import React, { Component } from "react";
import "./MenuItem.css";

var MenuItem = React.createClass({
    navigate: function(hash) {
        window.location.hash = hash;
    },

    render: function() {
    	const { hash } = this.props;
        return <div className="menu-item">{this.props.children}</div>;
    }
});

export default MenuItem;