import React from 'react';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';

const DocumentsTable = ({ tableData , loading ,hasData, deleteRecord }) => {
    const onDelete = e => {
        deleteRecord(e.target.id);
    }
    return (
        <div>
            <Table
                  title={ () => 'Documents'} 
                  bordered={true}
                  loading={loading}
                  hasData={hasData}
                  dataSource={tableData}
                   size='middle'>
                   <Column title="code" 
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
                    <button id={record._id } 
                            onClick={onDelete}
                            className='ant-btn ant-btn-primary ant-btn-sm ant-btn-dangerous'>
                     delete
                    </button>
                           )} />
               </Table>
        </div>
    )
}

export default  DocumentsTable;