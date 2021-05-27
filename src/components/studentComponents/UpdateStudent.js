import React, { Component } from 'react';
import { Modal,Form,Input,Select,Button } from 'antd';
import { connect } from 'react-redux';
import { updateStudent } from '../../actions/students/students';


const { Option } = Select;



 class UpdateStudent extends Component {
      state = {
          layout:  {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          },
         fields:[{name:'firstName',value:this.props.updateData.firstName},
                 {name:'otherNames',value:this.props.updateData.otherNames},
                 {name:'sex',value:this.props.updateData.sex},
                 {name:'course',value:this.props.updateData.course},]
      }
      componentDidMount() {
        this.setState({
          fields:[{name:'firstName',value:this.props.updateData.firstName},
          {name:'otherNames',value:this.props.updateData.otherNames},
          {name:'sex',value:this.props.updateData.sex},
          {name:'course',value:this.props.updateData.course}]
         })
      }
       handleCancel = () => {
         const payload = {
           open:false,
           data:this.props.updateData
         }
         this.setState({
          fields:[{name:'firstName',value:this.props.updateData.firstName},
          {name:'otherNames',value:this.props.updateData.otherNames},
          {name:'sex',value:this.props.updateData.sex},
          {name:'course',value:this.props.updateData.course}]
         })
         try {
          console.log(this.props.updateStudent(payload));
         } catch (error) {
           console.log(error);
         }

      };
      validateStatus = value => {
        if (!value) {
          return {error:'Please enter a value ',status:'error'}
        }
      }
      onFinish = (values) => {
        console.log('Success:', values); 
        const payload = {
          open:false,
          data:this.props.updateData
        }
        this.setState({
         fields:[{name:'firstName',value:this.props.updateData.firstName},
         {name:'otherNames',value:this.props.updateData.otherNames},
         {name:'sex',value:this.props.updateData.sex},
         {name:'course',value:this.props.updateData.course}]
        })
        try {
         console.log(this.props.updateStudent(payload));
        } catch (error) {
          console.log(error);
        }
      };
    render() {
        return (
            <div>
                <Modal footer={null} title="Update Record" visible={this.props.openModal}  onCancel={() => {this.handleCancel()}}>
                 <Form
                   onFinish={this.onFinish}
                  layout='vertical'
                        fields={this.state.fields} >
                      <Form.Item name='firstName'
                                 label='First Name'
                                 rules={[{
                                   required:true,
                                   message:'Please input a first name'
                                 }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name='otherNames'
                                 label='Other Names'
                                 rules={[{
                                   required:true,
                                   message:'Please input other names'
                                 }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name='course'
                                 label='Course'
                                 rules={[{
                                   required:true,
                                   message:'Please input a course'
                                 }]}>
                                 <Select>
                                   <Option value='M'>Course 1</Option>
                                   <Option value='F'>Course 2</Option>
                                 </Select>
                      </Form.Item>
                      <Form.Item name='sex'
                                 label='Gender'
                                 rules={[{
                                   required:true,
                                   message:'Please input gender'
                                 }]}>
                        <Select>
                          <Option value='M'>M</Option>
                          <Option value='F'>F</Option>
                        </Select>
                      </Form.Item>
                     <Form.Item>
                       <Button type='primary' htmlType='submit'>Save</Button>
                     </Form.Item>
                 </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
    openModal:state.students.openUpdateStudentModal,
    updateData:state.students.updateStudentData
   }
}

const mapDispatchToProps = () => {
   return {
     updateStudent
   }
}

export default connect(mapStateToProps,mapDispatchToProps())(UpdateStudent);