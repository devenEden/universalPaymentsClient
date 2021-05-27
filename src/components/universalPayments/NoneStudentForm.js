import React, { Component } from 'react';
import { Form,Input,Button } from 'antd';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import { FiChevronRight } from 'react-icons/fi';
import en from 'world_countries_lists/data/en/world.json';
import { setUniversalPaymentsComponent } from '../../actions/documents/documents';
import { connect } from 'react-redux';

class NoneStudentForm extends Component {

    
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
                <ConfigProvider locale={en}>
                <Form layout='vertical'
                      onFinishFailed={this.onFinishFailed} 
                      onFinish={this.onFinish}>
                <Form.Item name='fullName'
                           label='Full Name'
                           rules={[
                            {required:true, message:'Please input an email'}
                                 ]}> 
                       <Input />
                </Form.Item>
                <Form.Item name='email'
                           label='Email'
                           typ
                           rules={[
                               {required:true, message:'Please input an email'},
                               {type:"email", message:'Please Input a valid email'}
                           ]}> 
                        <Input />
                        </Form.Item>
                      <Form.Item name="tel" 
                                 label='Telephone No'
                                 rules={[
                                    {required:true, message:'Please input a phone number'}

                                         ]}> 
                         <CountryPhoneInput />
                      </Form.Item> 
                    <Button  className='btn' 
                             type='primary'
                             htmlType='submit'>
                        Continue
                        <FiChevronRight />
                    </Button>
                </Form>
              </ConfigProvider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = () => {
    return {
        setUniversalPaymentsComponent
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(NoneStudentForm);