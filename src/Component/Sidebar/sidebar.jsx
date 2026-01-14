// src/Component/Sidebar/sidebar.jsx
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const { Header } = Layout;

const menuItems = [
  { key: 'home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'about', icon: <UserOutlined />, label: 'About Me' },
  { key: 'contact', icon: <MailOutlined />, label: 'Contact' },
];

function Sidebar({ setCurrentSection }) {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const handleClick = (e) => {
    setCurrentSection(e.key);
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Header
      ref={headerRef}
      style={{
        background: '#ffffff',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
        height: '64px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ 
        color: '#1890ff', 
        fontSize: 24, 
        fontWeight: 'bold',
        letterSpacing: '1px',
      }}>
        Portfolio
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={menuItems}
        onClick={handleClick}
        style={{ 
          background: 'transparent',
          border: 'none',
          minWidth: '400px',
          flex: 1,
          justifyContent: 'flex-end',
          lineHeight: '64px',
          color:"white"
        }}
      />
    </Header>
  );
}

export default Sidebar;