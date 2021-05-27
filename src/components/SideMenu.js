import React from 'react';
import { Layout, Menu } from 'antd';
import logo from '../assets/download.jpeg';
import { Link }  from 'react-router-dom';
import { 
         FiUser,
         FiHome,
         FiFile
    } from 'react-icons/fi';
const {  Sider } = Layout;


const SideMenu = () => {
    return (
          <Sider className='Sider' theme='light' trigger={null}  >
          <Menu theme="Light" mode="inline" >
           <div className='img_div'> <img src={logo} alt=""/></div>
           <Menu.Item to='/' key="1" icon={<FiHome />}>
             <Link to ='/'>Home</Link>   
            </Menu.Item>
           <Menu.Item  key="2" icon={<FiUser />}>
              <Link to='/students'>  Students </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FiFile />}>
            <Link to='/documents'>  Documents </Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default SideMenu;