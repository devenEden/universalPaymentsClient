import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { FiPlus } from 'react-icons/fi';
import { Select } from 'antd';
const _lodash = require('lodash');
const { Option } = Select;


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add New Student"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input the First Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="otherNames"
          label="Other Names"
          rules={[
            {
              required: true,
              message: 'Please input the Other Names!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='sex'
                   label='Gender'
                   rules={[
                       {
                         required:true,
                         message:'Please Select a Gender'

                       }
                     ]} >
          <Select 
                  defaultValue=""
                  allowClear>
            <Option value="M">M</Option>
            <Option value="F">F</Option>
          </Select>
        </Form.Item>       
        <Form.Item name="course" 
                   label="Course"
                   rules={[
                     {
                       required:true,
                       message:'Please Input a Course'
                     }]}>
          <Select 
                  defaultValue=""
                  allowClear>
            <Option key={1} value="Course 1">Course 1</Option>
            <Option key={2} value="Course 2">Course 2</Option>
          </Select>
        </Form.Item>

      </Form>
    </Modal>
  );
};

const AddStudent = ({addStudent}) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (result) => {
    result.studentNumber = `STD-${_lodash.random(100000,900000)}`;
    console.log(result);
    addStudent(result);
    console.log("Student Add Action");
    setVisible(false);
  };

  return (
    <div>
      <div className="table-header">
        <Button icon={<FiPlus />}
                type='primary'
                onClick={() => {
                    setVisible(true);
                    }}
        >
          Add  New Student
        </Button>
      </div>
      <br />
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default AddStudent;