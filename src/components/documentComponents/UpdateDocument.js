import React  from 'react';
import { Modal, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudents } from '../../actions/documents/documents';


const CollectionCreateForm = ({ fields, visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Update Document"
      okText="Update"
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
        fields={fields}
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

                       },
                       { max:3,
                         message:'Code must be 3 or less numbers'
                       }
                     ]} >
                <Input max={3}  type='number' />
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
              message: 'Please input the Description!',
            },
          ]}
        >
         <TextArea />
        </Form.Item>

      </Form>
    </Modal>
  );
};

const UpdateDocument = ({updateDocument}) => {

  const onCreate = result => {
       const { code , unitAmount } = result
       const num = {
           numCode:parseInt(code),
           numUnitAMount:parseInt(unitAmount)
       };
       result.code = num.numCode;
       result.unitAmount = num.numUnitAMount;
       result._id= globalState.data._id;
       updateDocument(result)
  };
  const { isUpdateDocumentsModalOpen, updateDocumentsData } = useSelector(state => state.documents);
  const dispatch = useDispatch();
  const globalState = {
    isModalOpen: isUpdateDocumentsModalOpen,
    data:updateDocumentsData
  }
  const  onCancel = () => { 
        const payload = {
          open:false,
          data:globalState.data
        }
        console.log('Action',dispatch(updateStudents(payload)));
 }

  const fields = [
    {name:'name',value:globalState.data.name},
    {name:'code',value:globalState.data.code+'',},
    {name:'unitAmount',value:globalState.data.unitAmount},
    {name:'description',value:globalState.data.description}
  ]
  return (
    <div>
      <CollectionCreateForm
        fields={fields}
        visible={globalState.isModalOpen}
        onCreate={onCreate}
        onCancel={onCancel}
      />
    </div>
  );
};

export default UpdateDocument;