import React  from 'react';
import StudentForm from '../../components/universalPayments/studentForm';
import NoneStudentForm from '../../components/universalPayments/NoneStudentForm';
import Header from '../../components/universalPayments/Header';
import { useSelector } from 'react-redux';
import Invoicer from '../../components/universalPayments/invoicerComponents';

 const  UniversalPayments = () =>  {
        const { radioValue,universalPaymentsComponent } = useSelector(state => state.documents);
        const component = universalPaymentsComponent;
        return (
            <div className='container box-shadow'>
               {
                 component === 'main' ?
                 ( 
                <div>
                    <Header />
                    <div className="pre-form">
                    { radioValue === 'Student' ? (<StudentForm /> ) : ( <NoneStudentForm />) }
                    </div>
                </div>
                 ) : (
                  <Invoicer />
                )}
            </div>
        )
}

export default UniversalPayments;