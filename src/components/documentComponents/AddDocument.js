import React  from 'react';
import { Modal, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add New Document"
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
          name="name"
          label="Document"
          rules={[
            {
              required: true,
              message: 'Please input the Document!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='code'
                   label='Code'
                   rules={[
                       {
                         required:true,
                         message:'Please Select a Code!',

                       }
                     ]} >
                <Input maxLength={3}  type='number' />
        </Form.Item>       
        <Form.Item name="unitAmount" 
                   label="Unit Amount "
                   rules={[
                     {
                       required:true,
                       message:'Please Input a unit Amount'
                     }]}>
                <Input type='number'/>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input the Other Names!',
            },
          ]}
        >
         <TextArea />
        </Form.Item>

      </Form>
    </Modal>
  );
};

const AddDocument = ({addDocument,openModal,onClose}) => {

  const onCreate = result => {
       const { code , unitAmount } = result
       const num = {
           numCode:parseInt(code),
           numUnitAMount:parseInt(unitAmount)
       };
       result.code = num.numCode;
       result.unitAmount = num.numUnitAMount;
     addDocument(result);
  };
  const  onCancel = () => { 
    
    console.log('Action',onClose(false));
 }

  return (
    <div>
      <CollectionCreateForm
        visible={openModal}
        onCreate={onCreate}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddDocument;