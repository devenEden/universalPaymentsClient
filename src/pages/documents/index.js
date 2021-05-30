import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import routes from '../../routes/documentRoutes';

 const documentsPage = () => {
    return (
        <div>
           <Router>
           <Switch>
               {
                   routes.map( (route,idx) => {
                       return (
                           <Route exact key={idx} path={route.path} component={route.component} />
                       )
                   })
               }
               </Switch>
           </Router>
        </div>
    )
}

export default documentsPage
