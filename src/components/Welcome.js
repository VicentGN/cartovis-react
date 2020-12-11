import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Welcome.css';

export class Welcome extends Component {

  state = {
    redirection: false
  }

  goToMap = () => {
    this.setState({redirection: true})
  }

  render() {

    if (this.state.redirection) {
      return <Redirect to="/cartovis-react/map" />
    }

    return (
      <div className="jumbotron animated fadeIn">
        <h1 className="display-4">CartoVis</h1>
        <div className="lead">Todo el territorio a un sólo click</div>
        <hr className="my-4"></hr>
        <button className="btn btn-primary btn-lg" onClick={this.goToMap}>Accede al visor</button>
      </div>

    )
  }
}

export default Welcome
