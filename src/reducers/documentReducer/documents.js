import { documentConstants } from "../../actions/documents/documents";

const initialState = {
    isLoading:true,
    loadErrors:{},
    documents:[],
    documentsHasData:false,

    isAddDocumentModalOpen:false,
    AddDocumentSuccess:{},
    AddDocumentError:{},

    deleteDocumentsSuccess:false,

    radioValue:'Student',
    universalPaymentsFormData:{},
    universalPaymentsComponent:'main',
}

const documentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case documentConstants.GET_DOCUMENT_REQUEST: 
        return { ...state, 
                 isLoading:payload.loading,
                 hasData:payload.hasData,
                 documents:[...payload.documents]
                }
    case documentConstants.GET_DOCUMENT_ERROR: 
        return {
            ...state,
            isLoading:payload.loading,
            hasData:payload.hasData,
            loadErrors:{...payload.error}
        }
    case documentConstants.OPEN_ADD_DOCUMENTS_MODAL: 
        return {
            ...state,
            isAddDocumentModalOpen:payload
        }
    case documentConstants.ADD_DOCUMMENT_REQUEST:
        return {
            ...state,
            AddDocumentSuccess:{...payload.success},
            documents:payload.documents
        }
    case documentConstants.ADD_DOCUMENT_ERROR:
        return {
            ...state,
            AddDocumentSuccess:payload.success,
            AddDocumentError:payload.error
        }
    case documentConstants.DELETE_DOCUMENT_REQUEST: 
        return {
             ...state,
             deleteDocumentsSuccess:payload.success,
             documents:payload.documents
       }
    case documentConstants.UNIVERSAL_PAYMENTS_FORM: 
     return {
         ...state,
         radioValue:payload
     }
     case documentConstants.UNIVERSAL_PAYMENTS_COMPONENT: 
     return {
         ...state,
         universalPaymentsComponent:payload.component,
         universalPaymentsFormData:payload.data
     }
     default:
        return state;
    }
}


export default documentReducer;
