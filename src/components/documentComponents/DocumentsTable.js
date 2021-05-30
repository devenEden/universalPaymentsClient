import React, { useState } from 'react';
import { Popconfirm, Space, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudents } from '../../actions/documents/documents';

const DocumentsTable = ({ tableData , loading ,hasData, deleteRecord }) => {
        const [deleteId, setdeleteId] = useState('');

    const onDelete = e => {
        setdeleteId(e.target.id);
     }
     //title for students
     const  title = () => {
        return (
          <h3 className='bold margin-zero'>Documents</h3>
        )
      }
  
      const  confirm = (e) => {
       deleteRecord(deleteId);
      }
  
      const   cancel = (e) => {
        console.log('Record Kept');
      }
      const dispatch = useDispatch();

      const documents = useSelector(state => state.documents.documents)
      const onUpdate = e => {
         const data = documents.filter(document => {
                 return e.target.id === document._id
         });
         
         const payload = {
                 open:true,
                 data:data[0],
         }
         console.log('Action',dispatch(updateStudents(payload)));
      }
    return (
        <div>
            <Table
                  title={title} 
                  bordered={true}
                  loading={loading}
                  hasData={hasData}
                  dataSource={tableData}
                   size='medium'>
                   <Column title="Code" 
                           dataIndex="code" 
                           key="code" />
                   <Column title="Document" 
                           dataIndex="name" 
                           key="document" />
                   <Column title="Description" 
                           dataIndex="description" 
                           key="description" />
                   <Column title="Unit Amount" 
                           dataIndex="unitAmount" 
                           key="description" />
                   <Column title='Action' 
                           render={ (text,record) => (
                    <Space>
                    <button  id={record._id } 
                            onClick={onUpdate}
                            className='ant-btn ant-btn-primary ant-btn-sm '>
                         edit
                    </button>
                    <Popconfirm title='Are you sure you want to delete this'
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Yes"
                                id={record._id}
                                cancelText="No"
                    >
                    <button id={record._id } 
                            onClick={onDelete}
                            className='ant-btn ant-btn-primary ant-btn-sm ant-btn-dangerous'>
                     delete
                    </button>
                    </Popconfirm>
                      </Space>
                           )} />
               </Table>
        </div>
    )
}

export default  DocumentsTable;