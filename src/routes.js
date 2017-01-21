import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import NoMatch from './components/other/NoMatch'


import ConfigurationContainer from './containers/ConfigurationContainer.jsx'
import ServiceContainer from './containers/ServiceContainer.jsx'
import SettingsContainer from './containers/SettingsContainer.jsx'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ConfigurationContainer}/>
        <IndexRedirect to="configuration" />
        <Route path="configuration" component={ConfigurationContainer} >
            <IndexRedirect to="service/1" />
            <Route path="service/:serviceId" component={ServiceContainer} >
                <IndexRedirect to="settings/1" />
                <Route path="settings/:settingId" component={SettingsContainer} />
            </Route>
         </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
)