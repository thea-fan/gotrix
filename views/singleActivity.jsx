var React = require('react');
var React = require('react');
var Layout;
var memberNav = require('./components/layout.jsx');
var nonMemberNav = require('./login/rootLayout.jsx');
var EDITMODALS = require('./questions/editQuestionModals.jsx');
var moment = require('moment');

class singleActivity extends React.Component {
  render() {
    if (this.props.status.loggedIn !== undefined ){
        Layout = memberNav;
    } else {
        Layout = nonMemberNav;
    }

    let question = this.props.specificQuestion[0];

    let author_username = "";
        if (question.first_name  === null){
            author_username = "Demo User";
        } else {
            author_username = question.first_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); }) + " " + question.last_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); });
        }

    let editQuestion = ""
        if (parseInt(question.user_id) === parseInt(this.props.status.user_id)){
            editQuestion = (
                <div className = {'row mt-3 mb-4 edit-question-controls'} >
                    <span data-toggle={"modal"} data-target={"#editQuestionModal"} className={"mr-3"} >
                        <i class="fas fa-edit"></i>
                    </span>
                        <span data-toggle={"modal"} data-target={"#deleteQuestionModal"}>
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
            )
        } else {
            editQuestion;
        }

    let numOfReplies = this.props.replyDetails;
    let questionURL = "/activity/"+this.props.Id;
    let post_time = question.created_date;
    var postTime = moment(post_time).fromNow();
    var postDate = moment(post_time).format('DD MMM YY');


    let reply = "";

    if (numOfReplies[0].replied_user_id === null && numOfReplies[1] === undefined){
        reply = <div className={'mt-2 comment-height text-center'}>
                    <p className={"mb-0"}> No one has replied yet. </p>
                    <small>Be the first to respond.</small>
                </div>

    } else {

        reply = this.props.replyDetails.filter(reply => reply.reply_text !== null).map(reply =>{

            let reply_username = "";
            let reply_time = reply.reply_date;
            let replyTime = moment(reply_time).fromNow();
            let replyDate = moment(reply_time).format('DD MMM YY');

            if (reply.first_name === null){
                reply_username = "Demo User";
            } else {
                reply_username = reply.first_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); }) + " " + reply.last_name.toLowerCase().replace(/\b(\w)/g, x => { return x.toUpperCase(); });
            }

            return (
                    <div className={'mt-2 row'}>
                        <div className={'col-2 text-center'}>
                            <img class="img-responsive img-rounded profile-icon" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                alt="User picture"/>
                            <span class = "text-capitalize">{reply_username}</span>
                        </div>
                        <div className={'col-10 d-flex flex-column justify-content-center pb-4 border-bottom comment-height'}>
                            <p>{reply.reply_text}</p>
                            <small> Replied {replyTime} on {replyDate}</small>
                        </div>
                     </div>
            )
        })
    }

    return (
         <Layout user_name={this.props.status.user_name} user_company = {this.props.status.user_company} user_type = {this.props.status.user_type} user_id = {this.props.status.user_id}>
            <div class = "bg-white pb-4 col-8 offset-2 border rounded mt-4 px-5">
                <div class = "row mt-5 pb-3 border-bottom">
                    <div class = "col-1">
                        <img class="img-responsive img-rounded profile-icon" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                            alt="User picture"/>
                    </div>
                    <div className = "offset-1">
                        <h3 class = "text-uppercase font-weight-bold mb-0">{question.question_title}</h3>
                        <h6 class="mb-1">Equipment: {question.equipment}</h6>
                        <small className="font-italic text-capitalize">Submitted by {author_username} {postTime} on {postDate}</small>
                    </div>
                    {editQuestion}
                </div>
                <div class = "row px-4 pb-4 mb-4 justify-content-center border-bottom">
                    <EDITMODALS question_id = {this.props.Id} question = {this.props.specificQuestion[0]}/>
                    <div class = "mt-4 pr-3">
                        <div>
                            <h6 className = "mb-3">{question.question_text}</h6>
                            <div>
                                <img className = "single-question-photo mx-auto" src={question.question_photo}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'px-2 pb-4 comment-height'}>
                    <form method={'POST'} action={'/activity/'+this.props.Id+'/reply'}>
                      <div class="input-group mb-3">
                        <textarea name="reply_text" type="text" className="col mb-0" rows="3" placeholder="Your reply"/>
                        <div class="input-group-append">
                            <button class="btn btn-dark" type="submit">Submit</button>
                          </div>
                        </div>
                    </form>
                </div>
                {reply}
            </div>
        </Layout>
    );
  }
}

module.exports = singleActivity;