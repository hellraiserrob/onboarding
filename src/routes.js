import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NoMatch from './components/other/NoMatch'


import ConfigurationContainer from './containers/ConfigurationContainer.jsx'
import ServiceContainer from './containers/ServiceContainer.jsx'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ConfigurationContainer}/>
        <Route path="configuration" component={ConfigurationContainer} >
            <Route path="service/:id" component={ServiceContainer} />
         </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
)