var React = require('react');
var Layout = require('./components/layout.jsx');
var moment = require('moment');


class Home extends React.Component {
  render() {

    const questions = this.props.allQuestions.map(question =>{
        let username = ""
        if (question.first_name === null){
            username = "Demo User";
        } else {
            username = question.first_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); }) + " " + question.last_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); });
        }

        let ownershipIndicator = ""
        if (parseInt(question.user_id) === parseInt(this.props.status.user_id)){
            ownershipIndicator = <i className="fas fa-2x fa-bookmark"></i>
        }

        let numOfReplies = question.count;
        let questionURL ="/activity/"+question.qn_id;
        let userURL = "/user/"+question.user_id;
        let questionTitle = question.question_title.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); });
        let equipment = question.equipment.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); });
        let created_time = question.created_date;
        var postTime = moment(created_time).fromNow();
        var postDate = moment(created_time).format('DD MMM YY');


        return (

            <li class="home-event-list mb-3 rounded">
                    <div class="row">
                        {ownershipIndicator}
                        <div class="text-center col-2 p-4 my-auto">
                            <p class="text-uppercase font-weight-bold mb-0">{numOfReplies}</p><small>Replies</small>
                        </div>
                        <div class="col-7">
                           <a href={questionURL}>
                            <span class="mt-3 badge badge-secondary">{question.question_status}</span>
                            <p class="home-activity-name text-capitalise font-weight-bold my-1">{questionTitle} <br/></p>
                            </a>
                            <p class ="text-capitalise"><span className="badge badge-equipment">{equipment}</span></p>
                        </div>
                        <div class = " mt-5 d-flex flex-column align-items-center">
                            <small>Asked {postTime} on {postDate}</small>
                            <div className="row">
                                <img class="img-responsive img-rounded home-profile-icon pr-2" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                alt="User picture"/>
                                <a href={userURL}><small>{username}</small></a>
                            </div>
                        </div>
                    </div>
            </li>
        )
    });

    return (
        <Layout user_name={this.props.status.user_name} user_company = {this.props.status.user_company} user_type = {this.props.status.user_type} user_id = {this.props.status.user_id}>
            <div class=" mt-5 d-flex text-center align-items-center justify-content-center flex-column">
                <input class="form-control homepage-searchbar" id="myInput" type="text" placeholder="Type here to search for questions "/>
            </div>
                <div class="container mt-3">
                <div class = "container">
                <div class = "mt-5 px-5">
                    <ul id="myTable" className = "col-10 offset-1">
                        {questions}
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Home;