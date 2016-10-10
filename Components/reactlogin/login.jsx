
import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import auth from '../../auth'
const Login = withRouter(
  React.createClass({

    getInitialState() {
      return {
        error: false
      }
    },

    componentWillMount() {
      const email = 'joe@example.com'
      const pass = 'password1'

      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <p>logging in</p>
      )
    }
  })
)
export default Login;