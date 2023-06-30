import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { FaEarlybirds } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  const location = useLocation();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Add state for submenu

  const menuItems = [
    { text: 'Home', link: '/home' },
    {
      text: 'Page',
      submenu: [{ text: 'List', link: '/list' }],
    },
    { text: 'RegisterForm', link: '/register' },
  ];
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <OffcanvasMenu
        Link={Link}
        location={location}
        config={{
          push: false,
        }}
        menu={menuItems.map((item, index) => ({
          ...item,
          onClick: item.submenu ? handleSubMenuToggle : undefined,
          isOpen: item.text === 'Page' ? isSubMenuOpen : undefined,
        }))}
        header={
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Link className="Icon" to="/">
              <FaEarlybirds className="AnimatedIcon" size="50px" />
            </Link>
          </div>
        }
        footer={<Footer />}
      />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="social-wrap">
      <h4>Social Networks Footer</h4>
      <ul className="social">
      </ul>
    </div>
  );
}

export default Menu;
