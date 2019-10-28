var React = require('react');
var LoginForm = require('./loginForm.jsx');


class rootLayout extends React.Component {
  render() {
    return(
        <html>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Righteous&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://www.meetup.com/mu_static/en-US/main.6e568a31.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>

            <body>

                <div className="d-flex align-items-center mt-4">
                    <div className="container d-flex flex-column align-items-center">
                        <img src = "https://i.ibb.co/pzxTKtr/photo-2019-10-16-20-46-11.jpg" className = "mb-3"/>
                        <div className="mt-3 py-5 col-6 d-flex justify-content-center border rounded">
                            <div className="col-md-6 col-md-offset-3">
                                <h2 class="text-center mb-4 text-muted font-weight-normal">Login</h2>
                                {this.props.children}
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
  }
}


module.exports = rootLayout;