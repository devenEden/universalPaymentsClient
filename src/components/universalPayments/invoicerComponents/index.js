import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUniversalPaymentsComponent } from '../../../actions/documents/documents';
import InvoiceForm from './InvoiceForm';
import InvoiceTable from './InvoiceTable';


class Invoicer extends Component {

    render() {
        return (
            <div className='invoicer'>
                 <InvoiceTable data={this.props.data} />
                 <InvoiceForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.documents.documents
    }
}

const mapDispatchToProps = () => {
    return {
        setUniversalPaymentsComponent
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Invoicer)

