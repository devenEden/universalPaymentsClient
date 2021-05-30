import DocumentsIndex from '../../layouts/documentLayouts'
import UniversalPayments from '../../layouts/documentLayouts/UniversalPayments'

const documentRoutes = [
    {
        path:'/documents/universalPayments',
        component: UniversalPayments
    },
    {
        path:'/documents',
        component: DocumentsIndex
    }
]

export default documentRoutes;