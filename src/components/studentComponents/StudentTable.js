import { Component } from "react";
import { Table, Space } from 'antd';
import UpdateStudent from "./UpdateStudent";

const { Column } = Table;



class StudentTable extends Component {
   state = {
     title:undefined,
     loading: true,
     hasData:false,
     bordered:true,
     size:'small'
   }
 
  componentDidMount () {
    console.log(this.props.data)
    const { data } = this.props;
    try {
      if (undefined !== data) {
           if (data.length > 0) {
             this.setState({
               loading:false,
               hasData:true
             })
           } else {
            this.setState({
              loading:false,
              hasData:false
            }) 
           }
        }else{
         console.log('now theres no undefined',data.length);
        }
    } catch (error) {
      console.log(error);
      console.log('now theres no undefined');
      this.setState({
        loading:false,
        hasData:false
      })
    }
  }
  onDelete = (e) => {
    // eslint-disable-next-line no-restricted-globals
const con  = confirm('Are you sure you want to delete this record'); 
   if (con) {
    this.props.onDelete(e.target.id);
   }
  }
  onUpdate = (e) => {
   this.props.onUpdate(e.target.id);
  }
    render() { 
        return (
            <Table {...this.state} 
                   title={()=>'Students'}
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
                    {/* <button id={record._id } 
                            onClick={this.onUpdate}
                            className='ant-btn ant-btn-primary ant-btn-sm'>
                            edit
                    </button> */}
                    <UpdateStudent />
                    <button id={record._id } 
                            onClick={this.onDelete}
                            className='ant-btn ant-btn-primary ant-btn-sm ant-btn-dangerous'>
                            delete
                    </button>
                    </Space>
                )}
                />
            </Table>
        )
    }
}


export default StudentTable;