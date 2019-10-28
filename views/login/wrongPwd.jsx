var React = require('react');
var Layout = require('./rootLayout.jsx');

class wrongPwd extends React.Component {
  render() {
    return (
        <Layout>
            <p class="text-danger text-center">Wrong password. Please try again.</p>
        </Layout>
    );
  }
}

module.exports = wrongPwd;