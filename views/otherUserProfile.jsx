var React = require('react');
var Layout = require('./components/layout.jsx');

class userProfile extends React.Component {
  render() {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    let attend = "";
    if (this.props.attending.length=== 0){
        attend = <li class=" shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">No events yet!<br/></h5></li>;
    }
    else if (this.props.attending) {
        attend = this.props.attending.map(activity =>{
            let attendingURL = "/activity/" + activity.activity_id;
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

            return (
                <div>
                    <li class=" shorter-width d-flex justify-content-between list-group-item">
                        <h5 class = "font-italic">
                        <a href={attendingURL}>{date} - <span class = "text-capitalize">{activity.name}</span>
                        </a>
                        </h5>
                        <form action = {attendingURL} method ="POST">
                        <button type="submit" class="attendance-button btn mr-2 myButton">Join!</button>
                        </form>
                    </li>
                </div>
            );
        });
    };


    let post = "";
    if (this.props.posted.length === 0){
        post = <li class="shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">User has not host any event before.<br/></h5></li>;
    }
    else if (this.props.posted) {
        post =  this.props.posted.map(activity =>{
            let postedURL = "/activity/" + activity.id;
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

            return (
                <div>
                    <li class="shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">
                        <a href={postedURL}>{date} - <span class = "text-capitalize">{activity.name}</span>
                        </a></h5>
                        <form action = {postedURL} method ="POST">
                        <button type="submit" class="attendance-button btn mr-2 myButton">Join!</button>
                        </form>
                    </li>
                </div>
            );
        });
    };


    return(
        <Layout>
             <div class = "container col-8 mt-5 pt-4">
                <div class = "content bg-white bordered p-4 mt-4">
                    <h1 class = "mb-4 underlined profile-header">Profile of <span class = "text-capitalize font-italic">{this.props.attending[0].respondent_name} </span></h1>
                    <div class ="row">
                        <div class ="col">
                            <h5 class="font-weight-bold">Home Postal Code:</h5><p>{this.props.attending[0].postalcode}</p>
                        </div>
                        <div class ="col">
                            <h5 class="font-weight-bold">No. of attending events:</h5><p>{this.props.attending.length}</p>
                        </div>
                        <div class ="col">
                            <h5 class="font-weight-bold">No. of hosted events:</h5><p>{this.props.posted.length}</p>
                        </div>

                    </div>
                    <h4 class = "mt-4"><u>Events that <span class = "text-capitalize"> {this.props.attending[0].respondent_name} is going to attend </span></u></h4>
                    <ul class="list-group mt-3">
                        {attend}
                    </ul>
                    <h4 class = "mt-5"><u>Events hosted by <span class = "text-capitalize">{this.props.attending[0].respondent_name} </span> </u></h4>
                    <ul class="list-group mt-3">
                        {post}
                    </ul>
                </div>
            </div>
        </Layout>
    )
  }
}


module.exports = userProfile;