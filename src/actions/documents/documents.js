export const documentConstants = {
    GET_DOCUMENT_REQUEST: 'GET_DOCUMENT_REQUEST',
    GET_DOCUMENT_ERROR: 'GET_DOCUMENT_ERROR',
    GET_DOCUMENT_SUCCESS:'GET_DOCUMENT_SUCCESS',
    OPEN_ADD_DOCUMENTS_MODAL:'OPEN_ADD_DOCUMENTS_MODAL',

    ADD_DOCUMMENT_REQUEST:'ADD_DOCUMMENT_REQUEST',
    ADD_DOCUMENT_ERROR:'ADD_DOCUMMENT_REQUEST',

    DELETE_DOCUMENT_REQUEST:'DELETE_DOCUMENT_REQUEST',
    
    UNIVERSAL_PAYMENTS_FORM:'UNIVERSAL_PAYMENTS_FORM',
    UNIVERSAL_PAYMENTS_COMPONENT:'UNIVERSAL_PAYMENTS_COMPONENT',

    UPDATE_DOCUMENTS_REQUEST:'UPDATE_DOCUMENTS_REQUEST',
    UPDATE_DOCUMENTS_FRONTEND:'UPDATE_DOCUMENTS_FRONTEND',
    UPDATE_STUDENTS_ERROR:'UPDATE_STUDENTS_ERROR',

}

export const setDocuments =  documents =>  ({

    type:documentConstants.GET_DOCUMENT_REQUEST,
    payload: documents

})

export const setDocumentsError =  payload =>  ({
    
    type:documentConstants.GET_DOCUMENT_ERROR,
    payload

})

export const openAddDocumentsModal =  payload =>  ({
    
    type:documentConstants.OPEN_ADD_DOCUMENTS_MODAL,
    payload

})

export const addNewDocument = payload => ({
   type:documentConstants.ADD_DOCUMMENT_REQUEST,
   payload
})

export const addDocumentError = payload => ({
    type:documentConstants.ADD_DOCUMENT_ERROR,
    payload
})

export const deleteDocuments = payload => ({
    type:documentConstants.DELETE_DOCUMENT_REQUEST,
    payload
})

export const setUniversalPaymentsForm = payload => ({
  type:documentConstants.UNIVERSAL_PAYMENTS_FORM,
  payload
})

export const setUniversalPaymentsComponent = payload => ({
    type:documentConstants.UNIVERSAL_PAYMENTS_COMPONENT,
    payload
  })

export const updateStudents = payload => ({
   type:documentConstants.UPDATE_DOCUMENTS_REQUEST,
   payload
})

export const updateStudentsFrontend = payload => ({
    type:documentConstants.UPDATE_DOCUMENTS_FRONTEND,
    payload
 })