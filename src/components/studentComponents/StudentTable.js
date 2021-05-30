import { Component } from "react";
import { Table, Space, Popconfirm } from 'antd';
import UpdateStudent from "./UpdateStudent";
import { connect } from "react-redux";
import { updateStudentForm } from '../../actions/students/students';

const { Column } = Table;



class StudentTable extends Component {
   state = {
     deleteId:''
   }

  //updating the global state to gain the clicked div
  onUpdate = (e) => {
      try {
        const { id  } = e.target;
        const updateStudentData = this.props.students.filter(student => {
          return id === student._id;
      });
      const payload = {
          open:true,
          data:updateStudentData[0]
      }
      console.log('Action',this.props.updateStudentForm(payload));
      } catch (error) {
        console.log(error);
      }
  }
   deleteButton = e => {
      this.setState({
        deleteId:e.target.id
      });
   }
   //title for students
    title = () => {
      return (
        <h3 className='bold margin-zero'>Students</h3>
      )
    }

     confirm = (e) => {
     this.props.onDelete(this.state.deleteId);
    }

    cancel = (e) => {
      console.log(e);
    }
    render() { 
        return (
            <Table loading= {this.props.loading}
                   hasData={this.props.hasData}
                   bordered={true}
                   size='medium'
                   title={this.title}
                   dataSource={this.props.data}>
                <Column title="Std Number" dataIndex="studentNumber" key="studentNumber" />
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Other Names"  dataIndex="otherNames" key="Other Names" />
                <Column title="Sex" dataIndex="sex" key="sex" />
                <Column title="Course" dataIndex="course" key="course" />
                <Column
                title="Action"
                key="action"
                dataIndex='_id'
                render={(text, record) => (
                    <Space size="middle"> 
                    <button id={record._id } 
                            onClick={this.onUpdate}
                            className='ant-btn ant-btn-primary ant-btn-sm'>
                            edit
                    </button>
                    <UpdateStudent onUpdate={this.props.onUpdate} />
                    <Popconfirm title='Are you sure you want to delete this'
                                onConfirm={this.confirm}
                                onCancel={this.cancel}
                                okText="Yes"
                                id={record._id}
                                cancelText="No"
                    >
                    <button id={record._id } 
                             onClick={this.deleteButton}
                            className='ant-btn ant-btn-primary ant-btn-sm ant-btn-dangerous'>
                            delete
                    </button>
                    </Popconfirm>
                    </Space>
                )}
                />
            </Table>
        )
    }
}

const mapStateToProps = state => {
  return {
    students: state.students.students,
    loading: state.students.loadingStudents,
    hasData: state.students.hasData
  }
}

const mapDispatchToProps = () => {
  return {
    updateStudentForm,
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(StudentTable);