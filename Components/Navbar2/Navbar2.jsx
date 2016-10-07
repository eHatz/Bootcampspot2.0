import React, { Component } from "react";
import "./Navbar2.css";
import MenuItem from "./MenuItem/MenuItem.jsx"
import Menu from "./Menu/Menu.jsx"
var Navbar2 = React.createClass({
    showLeft: function() {
        this.refs.left.show();
    },

    showRight: function() {
        this.refs.right.show();
    },

    render: function() {
        return <div>
            <button onClick={this.showLeft}>Show Left Menu!</button>
            <button onClick={this.showRight}>Show Right Menu!</button>

            <Menu ref="left" alignment="left">
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>

            <Menu ref="right" alignment="right">
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>
        </div>;
    }
});

export default Navbar2;