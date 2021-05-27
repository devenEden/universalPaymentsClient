import documentsPage from '../pages/documents';
import HomePage from '../pages/homePage/index';
import Students from '../pages/studentsPage/index';

const Routes = [
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
    }
]

export default Routes;