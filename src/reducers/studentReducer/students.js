import { studentConstants } from '../../actions/students/students';

const initialState = {

  loadingStudents: false,
  loadError: {},
  students: [],

  adding: false,
  addError: {},
  addSuccess: {},

  deleting: false,
  deleteError: {},
  deleteSuccess: {},

  openUpdateStudentModal:false,
  updateStudentData:{}
}

 const students = (state = initialState,{ type , payload} ) => {
    switch (type) {
   
    case studentConstants.GET_STUDENT_REQUEST:
        return { ...state, students:payload };
    case studentConstants.DELETE_STUDENT_REQUEST: 
        return {...state,students:payload };
    case studentConstants.ADD_STUDENT_REQUEST:
        return {...state, students:payload };
    case studentConstants.GET_STUDENT_ERROR: 
         return {...state,loadError:payload }
    case studentConstants.ADD_STUDENT_ERROR: 
         return {...state,addError:payload }
    case studentConstants.DELETE_STUDENT_ERROR: 
         return {...state,deleteError:payload }
    case studentConstants.UPDATE_STUDENT_DATA:
         return {...state,openUpdateStudentModal:payload.open,updateStudentData:{...state.updateStudentData,...payload.data}}
    default:
        return state;
    } 
}
export default students;
