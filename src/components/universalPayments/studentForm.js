import React, { Component } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Form,Input,Button} from 'antd';
import { setUniversalPaymentsComponent } from '../../actions/documents/documents';
import { connect } from 'react-redux';

class StudentForm extends Component {

    onFinish = result => {
     const payload = {
         component:'invoiceComponent',
         data:result
     }
     console.log('Action',this.props.setUniversalPaymentsComponent(payload));
    }

    onFinishFailed = result  => {
        console.log(result);
    }

    render() {
        return (
            <div>
                <Form onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                      layout='vertical' >
                <Form.Item label='Student Number' 
                           name='studentNumber'
                           rules={[
                                {required:true, message:'Please input a student Number'}
                                     ]}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                  <Button htmlType='submit'  className='btn' type='primary'>
                        Continue
                        <FiChevronRight />
                    </Button>
                  </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = () => {
   return {
       setUniversalPaymentsComponent
   }
}

export default connect(mapStateToProps,mapDispatchToProps())(StudentForm);

