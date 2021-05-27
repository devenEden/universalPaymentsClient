import React from 'react';
import { Radio } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setUniversalPaymentsForm } from '../../actions/documents/documents';

const Header = () => {
    const radioValue = useSelector(state => state.documents.radioValue);
    const dispatch = useDispatch();
    const onChange = e => {
        console.log('radio checked', e.target.value);
        dispatch(setUniversalPaymentsForm(e.target.value));
        console.log(radioValue);
    }
    return (
        <div>
               <h1 className='headerBlue' > Welcome to Universal Payments</h1> 
               <p>This Portal Allows You reference Numbers for Making Payments to the university |
                   <Link to='/documents'> Click Here </Link> to return to documents
               </p>
               <div className="line-div"></div>
               <h3>Select your status</h3>
               <Radio.Group onChange={onChange} value={radioValue}  >
                    <Radio value={'Student'}>Student</Radio>
                    <Radio value={'None Student'}>None Student</Radio>
                </Radio.Group>
        </div>
    )
}

export default Header;
