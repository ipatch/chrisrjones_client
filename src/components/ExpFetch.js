import React, { Component } from 'react';

export default class ExpFetch extends Component {

  state = {
    hasErrors: false,
    ExpFetch: { }
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/hello')
      .then(res => res.json())
      .then(res => this.setState({ expfetch: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div>{JSON.stringify(this.state.expfetch)}</div>;
  }
}
