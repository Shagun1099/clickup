import { BarsOutlined, MailOutlined, MenuOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons/lib/icons';
import { Avatar } from 'antd';
import React from 'react'
import user from '../../assets/users/user-2.jpg';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

    const navigate = useNavigate();

    const GoTo = (path) => navigate(path, { replace: true });

    return (
        <div className='header'>
            <div className='header__left'>
                <MenuOutlined className="header__leftIcon" />
                <p style={{ opacity: window.location.pathname !== "/" && 0.6 }} onClick={() => GoTo('/')} className='header__leftLink'>Dashboard</p>
                <p style={{ opacity: window.location.pathname !== "/project-release" && 0.6 }} onClick={() => GoTo('/project-release')} className='header__leftLink'>Project Release</p>
            </div>
            <div className='header__right'>
                <BarsOutlined className='header__rightIcon' />
                <MailOutlined className='header__rightIcon' />
                <MessageOutlined className='header__rightIcon' />
                <Avatar size="large" src={user} />
            </div>
        </div>
    )
}

export default Header