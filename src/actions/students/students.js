export const studentConstants  = {
   GET_STUDENT_REQUEST: 'GET_STUDENT_REQUEST',
   GET_STUDENT_SUCCESS: 'GET_STUDENT_SUCCESSS',
   GET_STUDENT_ERROR: 'GET_STUDENT_ERROR',

   DELETE_STUDENT_REQUEST: 'DELETE_STUDENT_REQUEST',
   DELETE_STUDENT_SUCCESS: 'DELETE_STUDENT_SUCCESS',
   DELETE_STUDENT_ERROR: 'DELETE_STUDENT_ERROR',

   ADD_STUDENT_REQUEST: 'ADD_STUDENT_REQUEST',
   ADD_STUDENT_SUCCESS: 'ADD_STUDENT_SUCCESS',
   ADD_STUDENT_ERROR: 'ADD_STUDENT_ERROR',

   UPDATE_STUDENT_DATA:'UPDATE_STUDENT_DATA',
}

export const setStudents = students => ({
   type:studentConstants.GET_STUDENT_REQUEST,
   payload:students
})

export const addStudents = students => ({
   type:studentConstants.ADD_STUDENT_REQUEST,
   payload:students
})

export const deleteStudent = payload => ({
   type: studentConstants.DELETE_STUDENT_REQUEST,
   payload
})

export const deleteStudentError = error => ({
   type: studentConstants.DELETE_STUDENT_ERROR,
   payload:error
})

export const setStudentsError = error => ({
    type:studentConstants.GET_STUDENT_ERROR,
    payload:error
})

export const addStudentError = error => ({
   type:studentConstants.ADD_STUDENT_ERROR,
   payload:error

})

export const updateStudent = payload => ({
   type:studentConstants.UPDATE_STUDENT_DATA,
   payload
})
