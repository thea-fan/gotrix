var React = require('react');
var NAVBAR = require('./navbar.jsx');

class Layout extends React.Component {
  render() {
    return(
        <html>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Righteous&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://www.meetup.com/mu_static/en-US/main.6e568a31.css"/>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet" />
            <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"} />
            <script src={"https://code.jquery.com/jquery-3.3.1.min.js"}></script>
            <script src={"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"}></script>
            <script src={"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"}></script>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>

            <body>
                <div class="page-wrapper chiller-theme toggled">
                    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                    <NAVBAR user_name={this.props.user_name} user_company={this.props.user_company} user_type={this.props.user_type} user_id={this.props.user_id}/>
                    <main class="page-content">
                        <div class="container-fluid p-0">
                            {this.props.children    }
                            <script src="./script.js"/>
                        </div>
                    </main>
                </div>
            </body>
        </html>
    )
  }
}


module.exports = Layout;