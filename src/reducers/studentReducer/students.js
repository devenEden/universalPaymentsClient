import { studentConstants } from '../../actions/students/students';

const initialState = {

  globalPath:'https://universalpaymentsbackend.herokuapp.com',

  loadingStudents: true,
  hasData:false,
  loadError: {},
  students: [],

  adding: false,
  addError: {},
  addSuccess: {},

  deleting: false,
  deleteError: {},
  deleteSuccess: {},

  openUpdateStudentModal:false,
  updateStudentData:{},
  updateStudentSuccess:false,
  updateStudentErros:{}
}

 const students = (state = initialState,{ type , payload} ) => {
    switch (type) {
   
    case studentConstants.GET_STUDENT_REQUEST:
        return { ...state, 
                students:payload.data,
                loadingStudents:payload.loading,
                hasData:payload.hasData
               }
    case studentConstants.DELETE_STUDENT_REQUEST: 
        return {...state,students:payload }
    case studentConstants.ADD_STUDENT_REQUEST:
        return {...state, students:payload }
    case studentConstants.GET_STUDENT_ERROR: 
         return {...state,loadError:payload }
    case studentConstants.ADD_STUDENT_ERROR: 
         return {...state,addError:payload }
    case studentConstants.DELETE_STUDENT_ERROR: 
         return {...state,deleteError:payload }
    case studentConstants.UPDATE_STUDENT_DATA:
         return {...state,
                 openUpdateStudentModal:payload.open,
                 updateStudentData:{...state.updateStudentData,...payload.data}
                }
    case studentConstants.UPDATE_STUDENT_BACKEND: 
         return {...state,
                 updateStudentData:payload.data,
                 updateStudentSuccess:payload.success
                }
    case studentConstants.UPDATE_STUDENT_FRONTEND: 
         return {...state,
                openUpdateStudentModal:payload.open,
                students:payload.data,
         }
    default:
        return state;
    } 
}
export default students;
