import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, message, Space } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { setDocuments,
         setDocumentsError,
         openAddDocumentsModal,
         addNewDocument,
         addDocumentError,
         deleteDocuments,
         updateStudentsFrontend,
         updateStudents } 
         from '../../actions/documents/documents';
import DocumentsTable from '../../components/documentComponents/DocumentsTable';
import AddDocument from '../../components/documentComponents/AddDocument';
import { FiPlus } from 'react-icons/fi';
import UpdateDocument from '../../components/documentComponents/UpdateDocument';


class DocumentsIndex extends Component {
      state = {
        isAddModalOpen:false,
        api_url:this.props.api_path
      }
      fetchDocuments = async () => {
         try {
              await fetch(`${this.props.api_path}/api/documents`)
                .then(response => { 
                    response.json()
                    .then(response => {
                        const payload = {
                            loading:false,
                            hasData:true,
                            documents:response.response
                        }
                        console.log('Action',this.props.setDocuments(payload));
                    })
                    .catch(err => console.error(err));
                })
                .catch( err => {
                console.error(err)
                const payload = {
                    loading:false,
                    hasData:false,
                    documents:[],
                    errors:{
                        error:'Failed to Fetch Data From Server',
                        type:'Server Error'
                    }
                  }
                  message.error('Server Error: Failed to fetch data from server')
                  console.log('Action',this.props.setDocumentsError(payload));
                }
                    );
            } catch (error) {
                console.log(error);
            }
      }
      componentDidMount() {
          this.fetchDocuments();
      }
      openAddModal = () => {
          console.log('Action',this.props.openAddDocumentsModal(true));
      }
     //add new Documeny 
      addDocument = async result => {
        const msgLoading = message.loading('Adding Document. Please wait for a confirmation');
            try {

                const res =  await fetch(`${this.state.api_url}/api/documents/create`,{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body:JSON.stringify(result)
                }).catch ( err => console.log(err));

                res.json()
                .then( response => {
                    if (!response.ok && response.error) {  

                    message.error(response.error); 

                    }
                    else{
                       const newDocuments = [...this.props.data,response.response];

                       const payload = {
                           success:{ sucesss:true, msg:'Record Added'},
                           documents:newDocuments
                       }

                       console.log('Action',this.props.addNewDocument(payload));
                       console.log('Action',this.props.openAddDocumentsModal(false));
                       setTimeout(msgLoading);
                       message.success('Record has been added');
                    }
                })
                .catch( error => {
                    console.log(error);
                });
            } catch (error) {
                console.log(error);
                const payload = {
                    success:{succes:false,msg:'Internal Server Error'},
                    error:{type:'Server error:',error:'Failed to add record to database'}   
                }
                this.props.addDocumentError(payload)
                console.log('Action',this.props.addDocumentError(payload));
                message.error(payload.error.type + payload.error.error);
                message.info('You can manually close the Add document Pop Up');
            }
      }
      

      deleteDocument = async id => {
        const msgLoading = message.loading('Deleting document Please wait for a confirmation ');
             await fetch(`${this.state.api_url}/api/documents/${id}`,{
                 method:'DELETE'
             }).then( response => {
                if (!response.ok ) {
                    message.error('Server Error: Failed to delete ecord from database');
                }
                else {
                    const oldDocuments = this.props.data;
                    const newDocuments = oldDocuments.filter( document => {
                        return id !== document._id 
                    });
                    const payload = {
                        success:true,
                        documents:newDocuments
                    };
                   console.log('Action',this.props.deleteDocuments(payload));
                   setTimeout(msgLoading);
                   message.success('Record has been deleted');
                }
             })
             .catch(error => console.log(error));
        
      }

      updateDocument = async  values => {
        const msgLoading = message.loading('Updating record. Please wait for a confirmation');
        try {
            await fetch(`${this.state.api_url}/api/documents/${values._id}`,
            {
                method:'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify(values)
            })
            .then(response => {
                if (!response.ok ) {
                    message.error(`Failed to update data in database. Please check your connection`);
                }
                else {
                    response.json()
                    .then(res => {
                        const oldDocuments = this.props.data.filter( document => {
                            return values._id !== document._id
                        });
                        const newStudents = [values,...oldDocuments];
                        const payload = {
                            data:newStudents,
                            open:false
                        }
                        console.log('Action',this.props.updateStudentsFrontend(payload));
                        setTimeout(msgLoading);
                        message.success('Document has been updated');
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            })
            .catch(err => {
                console.log(err);
                console.log('Action',this.props.updateStudents({open:false}));
            })
        } catch (error) {
            console.log(error);
        }
      }

    render() {
        return (
            <div className='container box-shadow'>
                <div className="table-header">
                    <Space>
                        {/* <Button >
                        <Link to='documents/universalPayments' > 
                              Universal Payments
                        </Link>
                        </Button> */}
                        <Button icon={<FiPlus />}
                                onClick={this.openAddModal} 
                                type='primary' >
                        Add New Document
                         </Button>
                    </Space>
                </div>
                <br/>
                <AddDocument openModal={this.props.openDocumentModel} 
                             addDocument={this.addDocument}
                             onClose = {this.props.openAddDocumentsModal}/>
                <DocumentsTable loading={this.props.loading} 
                                tableData={this.props.data}
                                deleteRecord={this.deleteDocument}
                                hasData={this.props.hasData} />
                <UpdateDocument updateDocument={this.updateDocument} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.documents.isLoading,
        data: state.documents.documents,
        hasData: state.documents.documentsHasData,
        openDocumentModel:state.documents.isAddDocumentModalOpen,
        api_path: state.documents.globalPath
    }
}

const mapDispatchToProps = () => {
    return {
        setDocuments,
        setDocumentsError,
        openAddDocumentsModal,
        addNewDocument,
        addDocumentError,
        deleteDocuments,
        updateStudentsFrontend,
        updateStudents
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(DocumentsIndex);