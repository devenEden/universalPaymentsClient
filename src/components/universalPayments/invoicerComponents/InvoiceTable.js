import React, { Component } from 'react'
import { Button, Input, Table } from 'antd';
import { FiChevronLeft } from 'react-icons/fi';
import {setUniversalPaymentsComponent }from '../../../actions/documents/documents';
import { connect } from 'react-redux';


const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key:'code'
    },
    {
      title: 'Documents',
      dataIndex: 'name',
      key:'documents'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key:'description',
      width:'35%'
    },
    {
        title: 'Unit Amount',
        dataIndex:'unitAmount',
        key:'dataIndex',
        width:'20%',
    },
    {
     title:'Qty',
     width:'10%',
     key:'qty',
     render:  key => <Input min={1} size='small' value={1}  type='number' />
    }
  ];

export class InvoiceTable extends Component {

    onReturn = () => {
        const payload = {
            data:{},
            component:'main'
        }
        console.log(payload,this.props);
     console.log('Action',this.props.setUniversalPaymentsComponent(payload));
       }
       title = () => {
           return (
               <div className='table-title'>
                   <span className='header-blue header-bold'>SELECT REQUIRED ITEMS AND CONTINUE <span className='red-text'>(QTY COLUMN IS EDITABLE)</span> </span>
                  <div className="title-btn">
                  <Button danger
                         className='btn'
                         onClick={this.onReturn}
                         type='primary'>
                             <FiChevronLeft />
                             Back
                  </Button>
                  </div>
               </div>
           )
       }

    render() {
        return (
            <div className="invoicer-table">
                <Table bordered={true}
                       columns={columns}
                       pagination={false}
                       dataSource={this.props.data}
                       size='middle'
                       title={this.title} >
                </Table>  
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
       setUniversalPaymentsComponent,
   }
}
export default connect(mapStateToProps,mapDispatchToProps())(InvoiceTable);
