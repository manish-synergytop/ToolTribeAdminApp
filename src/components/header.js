import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">

			    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
			      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
			        <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo"/></a>
			        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a>
			      </div>
			      <div className="navbar-menu-wrapper d-flex align-items-center">
			        <ul className="navbar-nav navbar-nav-left header-links d-none d-md-flex">
			          <li className="nav-item">
			            <a href="#" className="nav-link"><i className="mdi mdi-image-filter"></i>Gallery</a>
			          </li>
			          <li className="nav-item active">
			            <a href="#" className="nav-link"><i className="mdi mdi-email-outline"></i>Inbox</a>
			          </li>
			          <li className="nav-item">
			            <a href="#" className="nav-link"><i className="mdi mdi-calendar"></i>Calendar</a>
			          </li>
			        </ul>
			        <ul className="navbar-nav navbar-nav-right">
			          <li className="nav-item dropdown">
			            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
			              <i className="mdi mdi-bell-ring"></i>
			              <span className="count">4</span>
			            </a>
			            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
			              <a className="dropdown-item">
			                <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
			                </p>
			                <span className="badge badge-pill badge-warning float-right">View all</span>
			              </a>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <div className="preview-icon bg-success">
			                    <i className="icon-info mx-0"></i>
			                  </div>
			                </div>
			                <div className="preview-item-content">
			                  <h6 className="preview-subject font-weight-medium">Application Error</h6>
			                  <p className="font-weight-light small-text">
			                    Just now
			                  </p>
			                </div>
			              </a>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <div className="preview-icon bg-warning">
			                    <i className="icon-speech mx-0"></i>
			                  </div>
			                </div>
			                <div className="preview-item-content">
			                  <h6 className="preview-subject font-weight-medium">Settings</h6>
			                  <p className="font-weight-light small-text">
			                    Private message
			                  </p>
			                </div>
			              </a>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <div className="preview-icon bg-info">
			                    <i className="icon-envelope mx-0"></i>
			                  </div>
			                </div>
			                <div className="preview-item-content">
			                  <h6 className="preview-subject font-weight-medium">New user registration</h6>
			                  <p className="font-weight-light small-text">
			                    2 days ago
			                  </p>
			                </div>
			              </a>
			            </div>
			          </li>
			          <li className="nav-item dropdown">
			            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
			              <i className="mdi mdi-email-variant"></i>
			              <span className="count">7</span>
			            </a>
			            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
			              <div className="dropdown-item">
			                <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
			                </p>
			                <span className="badge badge-info badge-pill float-right">View all</span>
			              </div>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <img src="images/faces/face4.jpg" alt="image" className="profile-pic"/>
			                </div>
			                <div className="preview-item-content flex-grow">
			                  <h6 className="preview-subject ellipsis font-weight-medium">David Grey
			                    <span className="float-right font-weight-light small-text">1 Minutes ago</span>
			                  </h6>
			                  <p className="font-weight-light small-text">
			                    The meeting is cancelled
			                  </p>
			                </div>
			              </a>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <img src="images/faces/face2.jpg" alt="image" className="profile-pic"/>
			                </div>
			                <div className="preview-item-content flex-grow">
			                  <h6 className="preview-subject ellipsis font-weight-medium">Tim Cook
			                    <span className="float-right font-weight-light small-text">15 Minutes ago</span>
			                  </h6>
			                  <p className="font-weight-light small-text">
			                    New product launch
			                  </p>
			                </div>
			              </a>
			              <div className="dropdown-divider"></div>
			              <a className="dropdown-item preview-item">
			                <div className="preview-thumbnail">
			                  <img src="images/faces/face3.jpg" alt="image" className="profile-pic"/>
			                </div>
			                <div className="preview-item-content flex-grow">
			                  <h6 className="preview-subject ellipsis font-weight-medium"> Johnson
			                    <span className="float-right font-weight-light small-text">18 Minutes ago</span>
			                  </h6>
			                  <p className="font-weight-light small-text">
			                    Upcoming board meeting
			                  </p>
			                </div>
			              </a>
			            </div>
			          </li>
			          <li className="nav-item d-none d-lg-block">
			            <a className="nav-link" href="#">
			              <img className="img-xs rounded-circle" src="images/faces/face4.jpg" alt="" />
			            </a>
			          </li>
			        </ul>
			        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
			          <span className="icon-menu"></span>
			        </button>
			      </div>
			    </nav>
            </header>
        )
    }
}