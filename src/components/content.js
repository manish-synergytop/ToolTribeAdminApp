import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
        	<div className="content-wrapper">
		        <div className="row purchace-popup">
		            <div className="col-12">
		              <span className="d-flex alifn-items-center">
		                <p>Like what you see? Check out our premium version for more.</p>
		                <a href="https://github.com/BootstrapDash/StarAdmin-Free-Bootstrap-Admin-Template" target="_blank" className="btn ml-auto download-button">Download Free Version</a>
		                <a href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank" className="btn purchase-button">Upgrade To Pro</a>
		                <i className="mdi mdi-close popup-dismiss"></i>
		              </span>
		            </div>
		          </div>
		          <div className="row">
		            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
		              <div className="card card-statistics">
		                <div className="card-body">
		                  <div className="clearfix">
		                    <div className="float-left">
		                      <i className="mdi mdi-cube text-danger icon-lg"></i>
		                    </div>
		                    <div className="float-right">
		                      <p className="card-text text-right">Total Revenue</p>
		                      <div className="fluid-container">
		                        <h3 className="card-title font-weight-bold text-right mb-0">$65,650</h3>
		                      </div>
		                    </div>
		                  </div>
		                  <p className="text-muted mt-3">
		                    <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
		                  </p>
		                </div>
		              </div>
		            </div>
		            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
		              <div className="card card-statistics">
		                <div className="card-body">
		                  <div className="clearfix">
		                    <div className="float-left">
		                      <i className="mdi mdi-receipt text-warning icon-lg"></i>
		                    </div>
		                    <div className="float-right">
		                      <p className="card-text text-right">Orders</p>
		                      <div className="fluid-container">
		                        <h3 className="card-title font-weight-bold text-right mb-0">3455</h3>
		                      </div>
		                    </div>
		                  </div>
		                  <p className="text-muted mt-3">
		                    <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
		                  </p>
		                </div>
		              </div>
		            </div>
		            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
		              <div className="card card-statistics">
		                <div className="card-body">
		                  <div className="clearfix">
		                    <div className="float-left">
		                      <i className="mdi mdi-poll-box text-teal icon-lg"></i>
		                    </div>
		                    <div className="float-right">
		                      <p className="card-text text-right">Sales</p>
		                      <div className="fluid-container">
		                        <h3 className="card-title font-weight-bold text-right mb-0">5693</h3>
		                      </div>
		                    </div>
		                  </div>
		                  <p className="text-muted mt-3">
		                    <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
		                  </p>
		                </div>
		              </div>
		            </div>
		            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
		              <div className="card card-statistics">
		                <div className="card-body">
		                  <div className="clearfix">
		                    <div className="float-left">
		                      <i className="mdi mdi-account-location text-info icon-lg"></i>
		                    </div>
		                    <div className="float-right">
		                      <p className="card-text text-right">Employees</p>
		                      <div className="fluid-container">
		                        <h3 className="card-title font-weight-bold text-right mb-0">246</h3>
		                      </div>
		                    </div>
		                  </div>
		                  <p className="text-muted mt-3">
		                    <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
		                  </p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="row">
		            <div className="col-12 grid-margin">
		              <div className="card">
		                <div className="card-body">
		                  <h5 className="card-title mb-4">Targets</h5>
		                  <canvas id="dashoard-area-chart" height="100px"></canvas>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="row">
		            <div className="col-12 grid-margin">
		              <div className="card">
		                <div className="card-body">
		                  <h5 className="card-title mb-4">Orders</h5>
		                  <div className="table-responsive">
		                    <table className="table center-aligned-table">
		                      <thead>
		                        <tr>
		                          <th className="border-bottom-0">Order No</th>
		                          <th className="border-bottom-0">Product Name</th>
		                          <th className="border-bottom-0">Purchased On</th>
		                          <th className="border-bottom-0">Shipping Status</th>
		                          <th className="border-bottom-0">Payment Method</th>
		                          <th className="border-bottom-0">Payment Status</th>
		                          <th className="border-bottom-0"></th>
		                          <th className="border-bottom-0"></th>
		                          <th className="border-bottom-0"></th>
		                        </tr>
		                      </thead>
		                      <tbody>
		                        <tr>
		                          <td>034</td>
		                          <td>Iphone 7</td>
		                          <td>12 May 2017</td>
		                          <td>Dispatched</td>
		                          <td>Credit card</td>
		                          <td><label className="badge badge-teal">Approved</label></td>
		                          <td><a href="#" className="btn btn-outline-success btn-sm">View Order</a></td>
		                          <td><a href="#" className="btn btn-outline-danger btn-sm">Cancel</a></td>
		                        </tr>
		                        <tr>
		                          <td>035</td>
		                          <td>Galaxy S8</td>
		                          <td>15 May 2017</td>
		                          <td>Dispatched</td>
		                          <td>Internet banking</td>
		                          <td><label className="badge badge-warning">Pending</label></td>
		                          <td><a href="#" className="btn btn-outline-success btn-sm">View Order</a></td>
		                          <td><a href="#" className="btn btn-outline-danger btn-sm">Cancel</a></td>
		                        </tr>
		                        <tr>
		                          <td>036</td>
		                          <td>Amazon Echo</td>
		                          <td>17 May 2017</td>
		                          <td>Dispatched</td>
		                          <td>Credit card</td>
		                          <td><label className="badge badge-teal">Approved</label></td>
		                          <td><a href="#" className="btn btn-outline-success btn-sm">View Order</a></td>
		                          <td><a href="#" className="btn btn-outline-danger btn-sm">Cancel</a></td>
		                        </tr>
		                        <tr>
		                          <td>037</td>
		                          <td>Google Pixel</td>
		                          <td>17 May 2017</td>
		                          <td>Dispatched</td>
		                          <td>Cash on delivery</td>
		                          <td><label className="badge badge-danger">Rejected</label></td>
		                          <td><a href="#" className="btn btn-outline-success btn-sm">View Order</a></td>
		                          <td><a href="#" className="btn btn-outline-danger btn-sm">Cancel</a></td>
		                        </tr>
		                        <tr>
		                          <td>038</td>
		                          <td>Mac Mini</td>
		                          <td>19 May 2017</td>
		                          <td>Dispatched</td>
		                          <td>Debit card</td>
		                          <td><label className="badge badge-teal">Approved</label></td>
		                          <td><a href="#" className="btn btn-outline-success btn-sm">View Order</a></td>
		                          <td><a href="#" className="btn btn-outline-danger btn-sm">Cancel</a></td>
		                        </tr>
		                      </tbody>
		                    </table>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="row">
		            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin">
		              <div className="card">
		                <div className="card-body">
		                  <h5 className="card-title mb-4">Global Sales by Top Locations</h5>
		                  <div className="row">
		                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
		                      <table className="table table-striped">
		                        <tbody>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/US.png" />
		                              </div>
		                            </td>
		                            <td>USA</td>
		                            <td className="text-right">
		                              2.920
		                            </td>
		                            <td className="text-right">
		                              53.23%
		                            </td>
		                          </tr>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/DE.png" />
		                              </div>
		                            </td>
		                            <td>Germany</td>
		                            <td className="text-right">
		                              1.300
		                            </td>
		                            <td className="text-right">
		                              20.43%
		                            </td>
		                          </tr>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/AU.png" />
		                              </div>
		                            </td>
		                            <td>Australia</td>
		                            <td className="text-right">
		                              760
		                            </td>
		                            <td className="text-right">
		                              10.35%
		                            </td>
		                          </tr>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/GB.png" />
		                              </div>
		                            </td>
		                            <td>United Kingdom</td>
		                            <td className="text-right">
		                              690
		                            </td>
		                            <td className="text-right">
		                              7.87%
		                            </td>
		                          </tr>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/RO.png" />
		                              </div>
		                            </td>
		                            <td>Romania</td>
		                            <td className="text-right">
		                              600
		                            </td>
		                            <td className="text-right">
		                              5.94%
		                            </td>
		                          </tr>
		                          <tr>
		                            <td>
		                              <div className="flag">
		                                <img src="../images/flags/BR.png" />
		                              </div>
		                            </td>
		                            <td>Brasil</td>
		                            <td className="text-right">
		                              550
		                            </td>
		                            <td className="text-right">
		                              4.34%
		                            </td>
		                          </tr>
		                        </tbody>
		                      </table>
		                    </div>
		                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
		                      <div className="rounded" id="map" ></div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="row">
		            <div className="col-12 grid-margin">
		              <div className="card">
		                <div className="card-body">
		                  <h5 className="card-title mb-4">Manage Tickets</h5>
		                  <div className="fluid-container">
		                    <div className="row ticket-card mt-3 pb-2 border-bottom">
		                      <div className="col-1">
		                        <img className="img-sm rounded-circle" src="images/faces/face1.jpg" alt="profile image"/>
		                      </div>
		                      <div className="ticket-details col-9">
		                        <div className="d-flex">
		                          <p className="text-primary font-weight-bold mr-2 mb-0 no-wrap">James :</p>
		                          <p className="font-weight-medium mr-1 mb-0">[#23047]</p>
		                          <p className="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
		                        </div>
		                        <p className="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
		                        <div className="row text-muted d-flex">
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Last responded :</p>
		                            <p className="Last-responded mr-2 mb-0">3 hours ago</p>
		                          </div>
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Due in :</p>
		                            <p className="Last-responded mr-2 mb-0">2 Days</p>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="ticket-actions col-2">
		                        <div className="btn-group dropdown">
		                          <button type="button" className="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            Manage
		                          </button>
		                          <div className="dropdown-menu">
		                            <a className="dropdown-item" href="#"><i className="fa fa-reply fa-fw"></i>Quick reply</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-history fa-fw"></i>Another action</a>
		                            <div className="dropdown-divider"></div>
		                            <a className="dropdown-item" href="#"><i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="row ticket-card mt-3 pb-2 border-bottom">
		                      <div className="col-1">
		                        <img className="img-sm rounded-circle" src="images/faces/face2.jpg" alt="profile image" />
		                      </div>
		                      <div className="ticket-details col-9">
		                        <div className="d-flex">
		                          <p className="text-primary font-weight-bold mr-2 mb-0 no-wrap">Stella :</p>
		                          <p className="font-weight-medium mr-1 mb-0">[#23135]</p>
		                          <p className="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.</p>
		                        </div>
		                        <p className="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates fuga quae?</p>
		                        <div className="row text-muted d-flex">
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Last responded :</p>
		                            <p className="Last-responded mr-2 mb-0">3 hours ago</p>
		                          </div>
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Due in :</p>
		                            <p className="Last-responded mr-2 mb-0">2 Days</p>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="ticket-actions col-2">
		                        <div className="btn-group dropdown">
		                          <button type="button" className="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            Manage
		                          </button>
		                          <div className="dropdown-menu">
		                            <a className="dropdown-item" href="#"><i className="fa fa-reply fa-fw"></i>Quick reply</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-history fa-fw"></i>Another action</a>
		                            <div className="dropdown-divider"></div>
		                            <a className="dropdown-item" href="#"><i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="row ticket-card mt-3 pb-2 border-bottom">
		                      <div className="col-1">
		                        <img className="img-sm rounded-circle" src="images/faces/face3.jpg" alt="profile image" />
		                      </div>
		                      <div className="ticket-details col-9">
		                        <div className="d-flex">
		                          <p className="text-primary font-weight-bold mr-2 mb-0 no-wrap">John Doe :</p>
		                          <p className="font-weight-medium mr-1 mb-0">[#23246]</p>
		                          <p className="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet.</p>
		                        </div>
		                        <p className="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		                        <div className="row text-muted d-flex">
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Last responded :</p>
		                            <p className="Last-responded mr-2 mb-0">3 hours ago</p>
		                          </div>
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Due in :</p>
		                            <p className="Last-responded mr-2 mb-0">2 Days</p>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="ticket-actions col-2">
		                        <div className="btn-group dropdown">
		                          <button type="button" className="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            Manage
		                          </button>
		                          <div className="dropdown-menu">
		                            <a className="dropdown-item" href="#"><i className="fa fa-reply fa-fw"></i>Quick reply</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-history fa-fw"></i>Another action</a>
		                            <div className="dropdown-divider"></div>
		                            <a className="dropdown-item" href="#"><i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="row ticket-card mt-3 pb-2 border-bottom">
		                      <div className="col-1">
		                        <img className="img-sm rounded-circle" src="images/faces/face4.jpg" alt="profile image" />
		                      </div>
		                      <div className="ticket-details col-9">
		                        <div className="d-flex">
		                          <p className="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marques Brownlee :</p>
		                          <p className="font-weight-medium mr-1 mb-0">[#23047]</p>
		                          <p className="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
		                        </div>
		                        <p className="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
		                        <div className="row text-muted d-flex">
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Last responded :</p>
		                            <p className="Last-responded mr-2 mb-0">3 hours ago</p>
		                          </div>
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Due in :</p>
		                            <p className="Last-responded mr-2 mb-0">2 Days</p>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="ticket-actions col-2">
		                        <div className="btn-group dropdown">
		                          <button type="button" className="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            Manage
		                          </button>
		                          <div className="dropdown-menu">
		                            <a className="dropdown-item" href="#"><i className="fa fa-reply fa-fw"></i>Quick reply</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-history fa-fw"></i>Another action</a>
		                            <div className="dropdown-divider"></div>
		                            <a className="dropdown-item" href="#"><i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="row ticket-card mt-3 pb-2">
		                      <div className="col-1">
		                        <img className="img-sm rounded-circle" src="images/faces/face5.jpg" alt="profile image" />
		                      </div>
		                      <div className="ticket-details col-9">
		                        <div className="d-flex">
		                          <p className="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marina John :</p>
		                          <p className="font-weight-medium mr-1 mb-0">[#23034]</p>
		                          <p className="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet totam, dignissimos fugiat voluptates, ab magni, necessitatibus excepturi inventore, mollitia ipsa quaerat aliquam.</p>
		                        </div>
		                        <p className="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae animi omnis, a?</p>
		                        <div className="row text-muted d-flex">
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Last responded :</p>
		                            <p className="Last-responded mr-2 mb-0">3 hours ago</p>
		                          </div>
		                          <div className="col-4 d-flex">
		                            <p className="mb-0 mr-2">Due in :</p>
		                            <p className="Last-responded mr-2 mb-0">2 Days</p>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="ticket-actions col-2">
		                        <div className="btn-group dropdown">
		                          <button type="button" className="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            Manage
		                          </button>
		                          <div className="dropdown-menu">
		                            <a className="dropdown-item" href="#"><i className="fa fa-reply fa-fw"></i>Quick reply</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-history fa-fw"></i>Another action</a>
		                            <div className="dropdown-divider"></div>
		                            <a className="dropdown-item" href="#"><i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
		                            <a className="dropdown-item" href="#"><i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		        </div>
		    </div>
        )
    }
}