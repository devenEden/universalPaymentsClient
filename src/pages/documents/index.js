import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import routes from '../../routes/documentRoutes';

 const documentsPage = () => {
    return (
        <div>
           <Router>
               {
                   routes.map( (route,idx) => {
                       return (
                           <Route exact key={idx} path={route.path} component={route.component} />
                       )
                   })
               }
           </Router>
        </div>
    )
}

export default documentsPage
