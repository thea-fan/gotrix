var React = require("react");

class Navbar extends React.Component {
  render() {

    return (
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <div class="sidebar-brand">
                    <a href='/home'>Gotrix</a>
                    <div id="close-sidebar">
                         <i class="fas fa-times"></i>
                    </div>
                </div>
                <a href = '/profile'>
                    <div class="sidebar-header">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                            alt="User picture"/>
                        </div>
                        <div class="user-info">
                            <span class="user-name"><strong class="text-capitalize">{this.props.user_name}</strong></span>
                            <span class="user-role text-capitalize">{this.props.user_company} - {this.props.user_type}</span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                          </span>
                        </div>
                    </div>
                </a>
                <div class="sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>General</span>
                        </li>
                        <li class="sidebar">
                            <a href='/home'>
                                <i class="fa fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-folder"></i>
                                <span>Questions</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="/activity/new">Add New</a>
                                    </li>
                                    <li>
                                        <a href={'/home/'+this.props.user_id}>Posted</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar">
                            <a href="/equipment">
                                <i class="fas fa-wrench"></i>
                                <span>Equipment</span>
                                <span class="badge badge-pill badge-warning">New</span>
                            </a>
                        </li>
                        <li class="header-menu">
                            <span>Beta</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-book"></i>
                                <span>Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-calendar"></i>
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li class="sidebar">
                            <a href="#">
                              <i class="fa fa-globe"></i>
                              <span>Maps</span>
                              <span class="badge badge-pill badge-success">Pro</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href='<%=edit_user_registration_path%>'>
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href = "/logout">
        <i class="fa fa-power-off"></i>
      </a>
            </div>
        </nav>
    );
  }
}

module.exports = Navbar;