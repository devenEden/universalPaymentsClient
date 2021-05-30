import documentsPage from '../pages/documents';
import About from '../pages/homePage/About';
import HomePage from '../pages/homePage/index';
import Students from '../pages/studentsPage/index';
import documentRoutes from './documentRoutes';

const indexRoutes = [
    { 
        path: '/',
        component: HomePage
    },
    { 
        path: '/students',
        component: Students
    },
    {
        path: '/documents',
        component: documentsPage
    },
    {
        path:'/about',
        component:About
    }

]

const Routes = [...indexRoutes,...documentRoutes];

export default Routes;