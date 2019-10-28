var React = require('react');

class LoginForm extends React.Component {
  render() {
    return (
        <div>
            <form action="/login" method="POST">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                                <i class="fas fa-user"></i>
                        </span>
                        <input placeholder = "Email" type="email" name="email" class="form-control mb-0" required/>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input placeholder = "Password" type="password" className="form-control mb-0" name="password" required/>
                    </div>
                </div>
                <div className="form-group mt-4 text-center">
                    <button type="submit" class="btn btn-primary mr-3">Login</button>
                    <a class="btn btn-primary text-white" data-toggle="modal" data-target="#register">Register
                    </a>
                </div>
            </form>
            <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">New User Registration</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/register" method="POST">
                                <div class="form-group">
                                    <label>First Name:</label>
                                    <input type="text" name="first_name" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" name="last_name" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Email:</label>
                                    <input type = "email" name="email" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" name="password" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Company:</label>
                                    <input type="text" name="company" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Department:</label>
                                    <input type="text" name="department" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>User Type:</label>
                                    <input type="text" name="user_type" class="form-control" required/>
                                </div>

                                <div class="modal-footer border-0 pb-0">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
  }
}

module.exports = LoginForm;