import React from 'react';
import './dashboad.css';
import Sidebar from '../Compornent/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    
    <div className="dashboard-container" style={{backgroundColor:"white"}}>
      <aside className="sidebar">
       {/*<div className="sidebar-header">CWinCatch</div>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Profile</li>
          <li>Investment</li>
          <li>Withdraw Asset</li>
          <li>My Wallet</li>
          <li>Referral System</li>
          <li>Income Details</li>
          <li>Summery</li>
          <li>Customer Support</li>
        </ul>
        
        */}

        <Sidebar />
      </aside>
       

      <main className="main-content" style={{color:"black",backgroundColor:"white"}}>
      <nav className="top-nav">
          <ul>
            <li className="active">Dashboard</li>
            <li>Wallet</li>
            <li>Transaction</li>
            <li>Support Ticket</li>
          </ul>
        </nav>
      <div className="alert-box">
          <strong>Daily Trade Income Settings</strong>
          <p>
            To receive trade income for tomorrow (2025-05-07), please enable this option. If disabled, you will not receive any trade income.
          </p>
        </div>

        <div className="greeting">Good Evening, <strong>chamod Mahiru</strong></div>

        <div className="card-container" style={{backgroundColor:"aliceblue"}}>
          <div className="card" style={{color:"black"}}>My Investment<br />$0.00</div>
          <div className="card" style={{color:"black"}}>Today Income<br />$0.00</div>
          <div className="card" style={{color:"black"}}>My Withdrawal<br />$0.00</div>
        </div>

       

        <div className="greeting">
          Good Evening, <strong>chamod Mahiru</strong>
        </div>

        <div className="main-section">
          <div className="wallet-card">
            <h3>Your Main Wallet</h3>
            <p className="wallet-balance">$0.00</p>
            <p className="wallet-sub">current balance</p>
          </div>

          <div className="summary-right">
            <div className="summary-card">
              <h4>Total Investment Profit</h4>
              <p>$0.00</p>
            </div>
            <div className="summary-card">
              <h4>Package Earning Total Payout</h4>
              <p>$0.00</p>
            </div>
            <div className="summary-card">
              <h4>Package Earning & Commission Total Payout</h4>
              <p>$0.00</p>
            </div>
          </div>

          <div className="personal-summary">
            <h4>Personal Details Summery</h4>
            <p><strong>CWC4</strong></p>
            <p>Referral Username</p>
            <div className="stats">
              <div>0<br /><small>Active Direct Sales</small></div>
              <div>0<br /><small>InActive Direct Sales</small></div>
            </div>
            <div className="dates">
              <div>2025-05-06<br /><small>Register Date</small></div>
              <div>-<br /><small>Active Date</small></div>
            </div>
            <div className="status-tags">
              <span className="not-verified">Not Verified</span>
              <span className="inactive">InActive</span>
            </div>
          </div>
        </div>

        <div className="card-container-icons">
          <div className="card" style={{color:"black"}}><br />Active investment</div>
          <div className="card" style={{color:"black"}}>Today Income<br />My Events</div>
          <div className="card" style={{color:"black"}}>My Withdrawal<br />Investment Plan</div>
          <div className="card" style={{color:"black"}}>My Withdrawal<br />Withdraw</div>
        </div>
  

        <div className="card-container-icons">
          <div className="card" style={{color:"black"}}>My Investment<br />Retierment Plans</div>
          <div className="card" style={{color:"black"}}>Today Income<br />Tax Saving investment</div>
          <div className="card" style={{color:"black"}}>My Withdrawal<br />Garanted return</div>
          <div className="card" style={{color:"black"}}>My Withdrawal<br />Goverment Securuties</div>
        </div>


        <div className="refer-section">
          <div className="left-panel">
            <h2>Let's explore best<br /><strong>Refer friends & earn</strong></h2>
            <div className="activate-box">
              <input type="text" readOnly value="Please activate the package." />
              <button className="copy-btn">📋</button>
            </div>
            <div className="features">
              <p><span>✔</span> 100+ Best professionals for your support</p>
              <p><span>✔</span> We have Quick, Easy and Trusted partners</p>
            </div>
          </div>

          <div className="right-panel">
            <div className="refer-card">
              <h3>Refer friends & earn</h3>
              <p>Ask your friend to join us & earn 10% of profit they made first time.</p>
              <button className="invite-btn">Invite to Join</button>
              <span className="send-icon">📨</span>
            </div>

            <div className="package-card">
              <img src="https://via.placeholder.com/80x60" alt="GS 2025" />
              <div className="package-details">
                <span className="tag">G-SEC</span>
                <h4>New GS 2025</h4>
                <p>Ends on <strong>Thu, 1 Aug 2024</strong></p>
                <p>Indicative Yield* <strong>7.05%</strong></p>
              </div>
              <button className="place-bid">Place Bid</button>
            </div>
          </div>
        </div>

        <div className="bottom-tabs">
          <div className="tab">Latest Package Earnings</div>
          <div className="tab">Direct/indirect Sales</div>
          <div className="tab">Trade Income</div>
        </div>
        
      </main>
    </div>
  );
};

export default Dashboard;
