import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.css';
import '../css/app.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
// import Breadcrumbs from '../components/other/Breadcrumbs'



class App extends Component {
  render() {

    const children = this.props.children

    return (
      <div>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
					transitionAppearTimeout={300}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <Header />
        </ReactCSSTransitionGroup>
              
        <div className="container mb30">
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
