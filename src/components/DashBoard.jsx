import React, { Component } from 'react'
import './app.css'
export default class DashBoard extends Component {
  
  render() {
    return (
        <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">AdminKit</span>
            </a>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Pages</li>
              <li className="sidebar-item active">
                <a className="sidebar-link" href="#">
                  <i className="align-middle" data-feather="grid" />{" "}
                  <span className="align-middle">Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="category.html">
                  <i className="align-middle" data-feather="grid" />{" "}
                  <span className="align-middle">Category</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="product.html">
                  <i className="align-middle" data-feather="square" />{" "}
                  <span className="align-middle">Product</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="user.html">
                  <i className="align-middle" data-feather="user" />{" "}
                  <span className="align-middle">User</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle mx-2">
              <i className="hamburger align-self-center" />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-align">
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="align-middle" data-feather="settings" />
                  </a>
                  <a
                    className="nav-link dropdown-toggle d-none d-sm-inline-block"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="img/avatars/avatar.jpg"
                      className="avatar img-fluid rounded me-1"
                      alt="Charles Hall"
                    />
                    <span className="text-dark">Chris Hung</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i className="align-middle me-1" data-feather="user" />
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="align-middle me-1" data-feather="pie-chart" />
                      Change Pass
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" onclick="handleLogout()">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h3 mb-3">
                <strong>Analytics</strong> Dashboard
              </h1>
              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Sales</h5>
                              </div>
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="truck"
                                  />
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">2.382</h1>
                            <div className="mb-0">
                              <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" /> -3.65%{" "}
                              </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Visitors</h5>
                              </div>
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="users"
                                  />
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">14.212</h1>
                            <div className="mb-0">
                              <span className="text-success">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" /> 5.25%{" "}
                              </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Earnings</h5>
                              </div>
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="dollar-sign"
                                  />
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">$21.300</h1>
                            <div className="mb-0">
                              <span className="text-success">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
                              </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Orders</h5>
                              </div>
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="shopping-cart"
                                  />
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">64</h1>
                            <div className="mb-0">
                              <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
                              </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                      <div className="chart chart-sm">
                        <canvas id="chartjs-dashboard-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Browser Usage</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="py-3">
                          <div className="chart chart-xs">
                            <canvas id="chartjs-dashboard-pie" />
                          </div>
                        </div>
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <td>Chrome</td>
                              <td className="text-end">4306</td>
                            </tr>
                            <tr>
                              <td>Firefox</td>
                              <td className="text-end">3801</td>
                            </tr>
                            <tr>
                              <td>IE</td>
                              <td className="text-end">1689</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Real-Time</h5>
                    </div>
                    <div className="card-body px-4">
                      <div id="world_map" style={{ height: 350 }} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Calendar</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="chart">
                          <div id="datetimepicker-dashboard" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-hover my-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="d-none d-xl-table-cell">Start Date</th>
                          <th className="d-none d-xl-table-cell">End Date</th>
                          <th>Status</th>
                          <th className="d-none d-md-table-cell">Assignee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Project Apollo</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                        </tr>
                        <tr>
                          <td>Project Fireball</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                        <tr>
                          <td>Project Hades</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">Sharon Lessman</td>
                        </tr>
                        <tr>
                          <td>Project Nitro</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-warning">In progress</span>
                          </td>
                          <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                        </tr>
                        <tr>
                          <td>Project Phoenix</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                        <tr>
                          <td>Project X</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">Sharon Lessman</td>
                        </tr>
                        <tr>
                          <td>Project Romeo</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Christina Mason
                          </td>
                        </tr>
                        <tr>
                          <td>Project Wombat</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-warning">In progress</span>
                          </td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Monthly Sales</h5>
                    </div>
                    <div className="card-body d-flex w-100">
                      <div className="align-self-center chart chart-lg">
                        <canvas id="chartjs-dashboard-bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a className="text-muted" href="" target="_blank">
                      <strong>DemoAdminKit</strong>
                    </a>
                    -{" "}
                    <a className="text-muted" href="" target="_blank">
                      <strong>Bootstrap Admin Template</strong>
                    </a>{" "}
                    ©
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Support
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Help Center
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Privacy
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
