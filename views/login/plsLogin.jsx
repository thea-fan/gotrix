var React = require('react');
var Layout = require('./rootLayout.jsx');

class plsLogin extends React.Component {
  render() {
    return(
        <Layout>
            <p class="text-danger text-center">Please login or register.</p>
        </Layout>
    )
  }
}

module.exports = plsLogin;