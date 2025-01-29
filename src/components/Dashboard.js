// src/Dashboard.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './Dashboard.css';

// Register the necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const eSignData = {
    labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
    datasets: [
      {
        data: [30, 20, 50, 10],
        backgroundColor: ['#6f42c1', '#9b59b6', '#8e44ad', '#732d91'],
        hoverBackgroundColor: ['#5a2d94', '#8e44ad', '#7d3f7b', '#6f2a7b'],
      },
    ],
  };

  const eStampData = {
    labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#6f42c1', '#9b59b6', '#8e44ad', '#732d91'],
        hoverBackgroundColor: ['#5a2d94', '#8e44ad', '#7d3f7b', '#6f2a7b'],
      },
    ],
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">OQFY</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownServices"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                <a className="dropdown-item" href="#">Service 1</a>
                <a className="dropdown-item" href="#">Service 2</a>
                <a className="dropdown-item" href="#">Service 3</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">More Services</a>
              </div>
            </li>
            {/* Other Nav Items */}
            <li className="nav-item"><a className="nav-link" href="#">User Management</a></li>
            <li className="nav-item"><a className="nav-link" href="#">My Orders</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Stamp Inventory</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bar Codes</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Invoice</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Michael Smith</a></li>
          </ul>
        </div>
      </nav>

      <div className="row mt-3">
        <div className="col-md-3 sidebar">
          <h5>👋 Welcome back, Michael</h5>
          <p>25 May, 2023 - Tuesday</p>

          <div className="wallet">
            <h4>My Wallet</h4>
            <h1>₹ 2,50,000</h1>
            <p className="text-muted">Current Balance</p>
            <p className="text-warning">Running low? <a href="#">Notify admin now.</a></p>
          </div>

          <h6>Pending Actions</h6>
          <ul>
            <li>#trd35468 - 2 files are waiting to be uploaded</li>
            <li>#33255577 - 2 files are waiting to be uploaded</li>
            <li>#76298347 - 2 files are waiting to be uploaded</li>
            <li>#65873428 - 2 files are waiting to be uploaded</li>
          </ul>
        </div>

        <div className="col-md-9">
          <div className="frequently-used">
            <h4>Frequently Used</h4>
            <div className="row">
              {/* Cards for frequently used services */}
              {['Contract Execution Upload', 'E-Stamp Services', 'E-Sign Services'].map((title) => (
                <div key={title} className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur...</p>
                      <a href="#" className="btn btn-primary">Get started </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="order-details mt-3">
            <h4>Order Details</h4>
            <div className="order-status">
              {/* Status items */}
              {[
                { icon: FaClipboardList, label: 'Total Orders:', count: 18 },
                { icon: FaSpinner, label: 'In Progress:', count: 10 },
                { icon: FaCheckCircle, label: 'Completed Orders:', count: 5 },
                { icon: FaTimesCircle, label: 'Cancelled Orders:', count: 3 },
              ].map(({ icon: Icon, label, count }) => (
                <div key={label} className="status-item">
                  <Icon />
                  <span>{label} <strong>{count}</strong></span>
                </div>
              ))}
            </div>

            {/* "View All" Link */}
            <div className="text-end mt-2">
              <a href="#" className="btn btn-link">View All</a>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts mt-3">
            <div className="row">
              {/* E-Sign Count Chart */}
              <div className="col-md-6 col-sm-12 mb-3">
                <div className="chart-container">
                  <h4>E-Sign Count</h4>
                  <div className="d-flex justify-content-center">
                    <Pie
                      data={eSignData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                      height={150} // Reduced height
                      width={150} // Reduced width
                    />
                  </div>
                </div>
              </div>

              {/* E-Stamp Count Chart */}
              <div className="col-md-6 col-sm-12 mb-3">
                <div className="chart-container">
                  <h4>E-Stamp Count</h4>
                  <div className="d-flex justify-content-center">
                    <Pie
                      data={eStampData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                      height={150} // Reduced height
                      width={150} // Reduced width
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;