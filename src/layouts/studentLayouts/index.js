import { Component } from "react";
import { connect } from "react-redux";
import StudentTable from "../../components/studentComponents/StudentTable";
import { setStudents,
         addStudents, 
         deleteStudent,
         setStudentsError,
         addStudentError,
         deleteStudentError,
         updateStudentFrontEnd
       } from '../../actions/students/students';
import React from 'react';
import AddStudent from "../../components/studentComponents/AddStudent";
import { message } from "antd";


class StudentLayout extends Component {
    state = {
        modelOpen: false,
        API_URL:this.props.API_URL,
    }
    //get All Students
    
     fetchStudents = async () => {
       await fetch(`${this.state.API_URL}/api/students/`)
      .then( response =>  response.json() )
      .then(studentList => { 
          try {
                if(studentList && studentList.length > 0){

                const payload = {
                  hasData:true,
                  data:studentList,
                  loading:false
                }
                 console.log('Action',this.props.setStudents(payload));
                }
                else {
                    const payload = {
                        hasData:false,
                        data:studentList,
                        loading:false
                      }
                      console.log('Action',this.props.setStudents(payload));
                      message.info('No students added yet. Click Add New student to add new student');
                } 

              } catch (error) {
                    console.log(error);
              }
        })
      .catch( err => {
          console.log(err);
          const loadError = {
              type:'Server Error',
              error:'Failed to fetch data from database',
              hasData:false,
              loading:false,
          }
          this.props.setStudentsError(loadError);
          try {
              message.error(this.props.loadError.type + ': ' +this.props.loadError.error)
          } catch (error) {
              console.log(error);
          }
      }); 
    } 
    //Mount Component
    componentDidMount () {
        this.fetchStudents();
    }
    //add new Student
    addStudent = async student => {
        const msgLoading = message.loading('Adding Record. Please wait for a confirmation message');
        try {
            const res =  await  fetch(`${this.state.API_URL}/api/students/create`,{
                    method:'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(student)
                });
            res.json()
            .then(response => {
                const studentsOld = this.props.students;
                const newStudents = [...studentsOld,response.response];
                //dispatch action
                console.log('Action',this.props.addStudents(newStudents));
                setTimeout(msgLoading);
                message.success('Record has been added');
                console.log(response.ok);
            })
            .catch(err =>  console.log(err));
        } catch (error) {
            console.log(error);
            const addError = {
                type:'Server Error',
                error:'Failed to add record to data base '
            }
            console.log('Action',this.props.addStudentError(addError));
            message.error(this.props.addError.type + ': ' +this.props.addError.error)
        }

    }
    //delete Student
    deleteStudents = async id => {
        const msgLoading = message.loading('Deleting record. Please wait for a confirmation message');
        await fetch(`${this.state.API_URL}/api/students/${id}`,{
            method:'DELETE'
        })
        .then(response => {
                if(!response.ok) {
                const  deleteError = {
                    type:'Server Error',
                    error:'Failed to delete record from database'
                }  
               console.log('Action',this.props.deleteStudentError(deleteError));
               message.error(this.props.deleteError.type + ': ' +this.props.deleteError.error);
                }
                else {
                    const studentsOld = this.props.students;
                    const newStudents = studentsOld.filter(student => {
                    return student._id !== id;
                    });
                    console.log('Action',this.props.deleteStudent(newStudents));
                    setTimeout(msgLoading);
                    message.success('Record deleted succesfully');
                }
            
        })
        .catch(error => console.log(error));
        
    }
    //Update Student
    updateStudentBackend = async values => {

        const msgLoading = message.loading('Updating student. Please wait for a confirmation message');
         try {

            await fetch(`${this.state.API_URL}/api/students/${values._id}`,{
                 method:'PUT',
                 headers:{
                     'Content-Type':'application/json'
                 },
                 body:JSON.stringify(values)
             })
             .then( response => {
                   if (!response.ok) {
                       message.error('Server Error: failed to updata data in database' + response.error);
                   }
                   else{
                       response.json()
                       .then(response => {
                          const oldStudents =  this.props.students.filter(student => {
                              return values._id !== student._id;
                          });
                          const newStudents = [values,...oldStudents];
                          const payload = {
                               success:true,
                               open:false,
                               data:newStudents
                          }
                         console.log('Action',this.props.updateStudentFrontEnd(payload));
                          setTimeout(msgLoading);
                          message.success('Student record has been updated!');
                       })
                       .catch(err => console.log(err))
                   }
             }).catch(err => console.log(err))
         } catch (error) {
             console.log(error);
         }
    }
    //render Component 
    render() {
        return ( 
            <div className='container box-shadow'>
                <AddStudent addStudent={this.addStudent} />
                <StudentTable onUpdate={this.updateStudentBackend} 
                              onDelete={this.deleteStudents} 
                              data={this.props.students} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        students: state.students.students,
        loadError: state.students.loadError,
        addError: state.students.addError,
        deleteError: state.students.deleteError,
        updateModel: state.students.updateStudentData,
        updateStudentData: state.students.updateStudentData,
        API_URL: state.students.globalPath
    }
}

const mapDispatchToProps = () => {
    return {
        setStudents,
        addStudents,
        deleteStudent,
        setStudentsError,
        addStudentError,
        deleteStudentError,
        updateStudentFrontEnd,
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(StudentLayout);