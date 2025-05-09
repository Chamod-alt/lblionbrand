import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Lblion Brand</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li><a href="#">Dashboard</a></li>

          <li>
            <a onClick={() => toggleSubmenu('profile')} className="dropdown-toggle">
              Profile
            </a>
            {openMenu === 'profile' && (
              <ul className="list-unstyled">
                <li><a href="#">Personal Details</a></li>
                <li><a href="#">KYC</a></li>
              </ul>
            )}
          </li>

          <li>
            <a onClick={() => toggleSubmenu('investment')} className="dropdown-toggle">
              Investment
            </a>
            {openMenu === 'investment' && (
              <ul className="list-unstyled">
                <li><a href="#">Deposit</a></li>
                <li><a href="#">My Asset Details</a></li>
                <li><a href="#">Purchase History</a></li>
              </ul>
            )}
          </li>

          <li><a href="#">My Wallet</a></li>
          <li><a href="#">Referral System</a></li>
          <li><a href="#">Customer Support</a></li>
        </ul>

        <ul className="list-unstyled CTAs">
          <li><a href="#" className="download">Download Source</a></li>
          <li><a href="#" className="article">Back to Article</a></li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
        <h2>Welcome to the Page Content</h2>
        <p>This is the main content area. You can customize it further.</p>
      </div>
    </div>
  );
};

export default Sidebar;
