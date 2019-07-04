import React from 'react';

export default class Badge extends React.Component {
  render() {
    return <button className="btn btn-primary" type="button">
          {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
  }
}
