import React, { Component } from 'react';
import '../css/app.css';

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumbs from '../components/other/Breadcrumbs'

class App extends Component {
  render() {

    const children = this.props.children

    return (
      <div>
        <Header />
        <Breadcrumbs />
      
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
