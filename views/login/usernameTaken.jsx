var React = require('react');
var Layout = require('./rootLayout.jsx');

class Taken extends React.Component {
  render() {
    return (
        <Layout>
            <p class="text-danger text-center">This username has been taken.</p>
        </Layout>
    );
  }
}

module.exports = Taken;