import React from 'react';
import { Button } from 'antd';

const InvoiceForm = () => {
    return (

        <div className="invoicer-form-div">
            <div className="invoicer-form">
                <h3>Items Selected: 1 </h3>
                <p>Total Amount: <span className='red-text'>30000</span> Ugx </p>
                <Button type='primary' 
                        size='small'>
                Generate Invoice
                </Button>
            </div>
        </div>
    )
}

export default InvoiceForm

