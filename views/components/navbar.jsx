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
                                <span>Issues</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                        </li>
                        <li class="sidebar">
                            <a href="/activity/new">
                                <i class="fa fa-folder"></i>
                                <span>Add New Issue</span>
                            </a>
                        </li>
                        <li class="sidebar">
                            <a href="/equipment">
                                <i class="fas fa-wrench"></i>
                                <span>Equipment</span>
                                <span class="badge badge-pill badge-warning">New</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
      </a>
      <a href='<%=edit_user_registration_path%>'>
        <i class="fa fa-cog"></i>
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