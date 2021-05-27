import { Component } from "react";
import { connect } from "react-redux";
import StudentTable from "../../components/studentComponents/StudentTable";
import { setStudents,
         addStudents, 
         deleteStudent,
         setStudentsError,
         addStudentError,
         deleteStudentError,
         updateStudent,
       } from '../../actions/students/students';
import React from 'react';
import AddStudent from "../../components/studentComponents/AddStudent";
import { message } from "antd";

class StudentLayout extends Component {
    state = {
        modelOpen: false,
        editData:{},
    }
    //get All Students
     fetchStudents = async () => {
       await fetch('http://127.0.0.1:8080/api/students/')
      .then( response =>  response.json() )
      .then(studentList => { 
          try {
                if(studentList)

                    console.log('Action',this.props.setStudents(studentList));
              } catch (error) {
                    console.log(error);
              }
        })
      .catch( err => {
          console.log(err);
          const loadError = {
              type:'Server Error',
              error:'Failed to fetch data from database '
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

        try {
            const res =  await  fetch('http://127.0.0.1:8080/api/students/create',{
                    method:'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(student)
                });
            res.json()
            .then(response => {
                const msgLoading = message.loading('Adding Record ...');
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
        console.log(id);
        await fetch(`http://127.0.0.1:8080/api/students/${id}`,{
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
                    message.success('Record deleted succesfully');
                }
            
        })
        .catch(error => console.log(error));
        
    }
    //Update Student
    updateStudent = id => {
        const updateStudentData = this.props.students.filter(student => {
            return id === student._id;
        });
        const payload = {
            open:true,
            data:updateStudentData[0]
        }
        console.log('Action',this.props.updateStudent(payload));
    }
    //render Component 
    render() {
        return ( 
            <div className='container box-shadow'>
                <AddStudent addStudent={this.addStudent} />
                <StudentTable onUpdate={this.updateStudent} 
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
        updateModel: state.students.updateStudentData
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
        updateStudent,
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(StudentLayout);