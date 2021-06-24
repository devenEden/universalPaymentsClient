import documentsPage from '../pages/documents';
import About from '../pages/homePage/About';
import HomePage from '../pages/homePage/index';
import Students from '../pages/studentsPage/index';
import documentRoutes from './documentRoutes';

const indexRoutes = [
    { 
        key:'/',
        path: '/',
        component: HomePage
    },
    { 
        key:'/students',
        path: '/students',
        component: Students
    },
    {
        key:'/documents',
        path: '/documents',
        component: documentsPage
    },
    {
        key:'/about',
        path:'/about',
        component:About
    }

]

const Routes = [...indexRoutes,...documentRoutes];

export default Routes;