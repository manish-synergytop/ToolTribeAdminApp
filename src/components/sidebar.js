import React, {Component} from 'react';

export default class SideBar extends Component {
    render(){
        return (
        	<nav className="sidebar sidebar-offcanvas" id="sidebar">
		        <ul className="nav">
		          <li className="nav-item nav-profile">
		            <div className="nav-link">
		              <div className="profile-image"> <img src="images/faces/face4.jpg" alt="image"/> <span className="online-status online"></span> </div>
		              <div className="profile-name">
		                <p className="name">Richard V.Welsh</p>
		                <p className="designation">Manager</p>
		                <div className="badge badge-teal mx-auto mt-3">Online</div>
		              </div>
		            </div>
		          </li>
		          <li className="nav-item"><a className="nav-link" href="index.html"><img className="menu-icon" src="images/menu_icons/01.png" alt="menu icon"/><span className="menu-title">Dashboard</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/widgets.html"><img className="menu-icon" src="images/menu_icons/02.png" alt="menu icon" /><span className="menu-title">Widgets</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/ui-features/buttons.html"><img className="menu-icon" src="images/menu_icons/03.png" alt="menu icon" /><span className="menu-title">Buttons</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html"><img className="menu-icon" src="images/menu_icons/04.png" alt="menu icon" /><span className="menu-title">Form</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/charts/chartjs.html"><img className="menu-icon" src="images/menu_icons/05.png" alt="menu icon" /><span className="menu-title">Charts</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/tables/basic-table.html"><img className="menu-icon" src="images/menu_icons/06.png" alt="menu icon" /><span className="menu-title">Table</span></a></li>
		          <li className="nav-item"><a className="nav-link" href="pages/icons/font-awesome.html"><img className="menu-icon" src="images/menu_icons/07.png" alt="menu icon" /> <span className="menu-title">Icons</span></a></li>
		          <li className="nav-item">
		            <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages"> <img className="menu-icon" src="images/menu_icons/08.png" alt="menu icon" /> <span className="menu-title">General Pages</span><i className="menu-arrow"></i></a>
		            <div className="collapse" id="general-pages">
		              <ul className="nav flex-column sub-menu">
		                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html">Blank Page</a></li>
		                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html">Login</a></li>
		                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html">Register</a></li>
		                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html">404</a></li>
		                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html">500</a></li>
		              </ul>
		            </div>
		          </li>
		          <li className="nav-item"><a className="nav-link" href="pages/ui-features/typography.html"><img className="menu-icon" src="images/menu_icons/09.png" alt="menu icon" /> <span className="menu-title">Typography</span></a></li>
		          <li className="nav-item purchase-button"><a className="nav-link" href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank">Get full version</a></li>
		        </ul>
		    </nav>
        )
    }
}