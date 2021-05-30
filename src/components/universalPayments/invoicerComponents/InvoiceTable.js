import React, { Component } from 'react'
import { Button, Input, Table } from 'antd';
import { FiChevronLeft } from 'react-icons/fi';
import {setUniversalPaymentsComponent }from '../../../actions/documents/documents';
import { connect } from 'react-redux';




export class InvoiceTable extends Component {
    
    state = {
        selectedRowKeys:[],
        inputValue:[],
        defaultValue:1,
        total:0,
        documentsNumber:0,
        totalAmount:0
    }
    onSelectChange = selectedRowKeys => {
        this.setState({selectedRowKeys});
        if (selectedRowKeys.length > 0) {
            console.log(selectedRowKeys.length,this.state.totalAmount);
        }
        else {
            this.setState({
                totalAmount:0
            })
        }
    }
    onChangeInput  = e => {
        const check = this.state.selectedRowKeys.includes(e.target.id);
        if (!check) {
        this.setState({
            selectedRowKeys:[...this.state.selectedRowKeys,e.target.id]
        });
        }
        
         
    }
    columns = [
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
         render:  key => <Input id={key._id} 
                                size='small'
                                min={1}
                                defaultValue={1}
                                value={this.state.selectedRowKeys.includes(key._id) ? undefined : this.state.defaultValue}
                                onChange={this.onChangeInput}
                                type='number' />
        }
      ];

    onReturn = () => {
        const payload = {
            data:{},
            component:'main'
        }
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
       const {selectedRowKeys} = this.state;
       const  rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
            
      };
      
        this.props.data.forEach(e => {
            e.key=e._id
        });
        return (
            <div className="invoicer-table">
                <Table bordered={true}
                       loading={this.props.loading}
                       hasData={this.props.hasData}
                       columns={this.columns}
                       pagination={false}
                       rowSelection={rowSelection}
                       dataSource={this.props.documents}
                       size='middle'
                       title={this.title} >
                </Table>  
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      documents: state.documents.documents,
      loading: state.documents.isLoading,
      hasData:state.documents.documentsHasData
    }
}

const mapDispatchToProps = () => {
   return {
       setUniversalPaymentsComponent,
   }
}
export default connect(mapStateToProps,mapDispatchToProps())(InvoiceTable);
