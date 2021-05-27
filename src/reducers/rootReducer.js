import { combineReducers } from 'redux';
import students from './studentReducer/students';
import documents from './documentReducer/documents';


export default combineReducers({ students,documents  });