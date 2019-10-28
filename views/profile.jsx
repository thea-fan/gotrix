var React = require('react');
var Layout = require('./components/layout.jsx');

class userProfile extends React.Component {
  render() {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    let attend = "";
    if (this.props.attending.length=== 0){
        attend = <li class=" shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">No events yet!<br/></h5><form action = "/home"><button class="myButton new-input"> Find events now</button></form></li>;
    }
    else if (this.props.attending) {
        attend = this.props.attending.map((activity,index) =>{
            let attendingURL = "/activity/" + activity.activity_id;
            let deleteURL = "/activity/"+ activity.activity_id + "?_method=DELETE";
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];
            let deleteModalId = "delete-attending-"+index;
            let deleteModalButtonId = "#delete-attending-"+index;

            return (
                <div>
                    <div class="modal fade" id={deleteModalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">Change RSVP status</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action ={deleteURL} method ="POST">
                                            <p class ="text-center"> Are you sure you are not going to attend <br/><span class = "text-capitalize font-weight-bold">'{activity.name}'</span> <br/>hosted by <span class = "text-capitalize">{activity.username}</span> anymore? </p>
                                            <div class="justify-content-center modal-footer border-0 pb-0">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">No, I'm still attending</button>
                                                <button type="submit" class="btn btn-danger">Not attending anymore</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <li class=" shorter-width d-flex justify-content-between list-group-item">
                        <h5 class = "font-italic">
                        <a href={attendingURL}>{date} - <span class = "text-capitalize">{activity.name}</span>
                        </a>
                        </h5>
                        <button name = "activity_id" type="submit" class="myButton new-input" data-toggle="modal" data-target={deleteModalButtonId}>Change of Mind</button>
                    </li>
                </div>
            );
        });
    };


    let post = "";
    if (this.props.posted.length === 0){
        post = <li class="shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">You have not host any event before.<br/> How about adding one now?</h5><button class="myButton new-input" data-toggle="modal" data-target="#new"> Post an event </button></li>;
    }
    else if (this.props.posted) {
        post =  this.props.posted.map((activity, index) =>{
            let postedURL = "/activity/" + activity.id;
            let editURL = "/activity/"+activity.id+ "/edit?_method=PUT";
            let deleteURL = "/activity/" + activity.id +"/delete?_method=DELETE";
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];
            const editMonths = ["01", "02", "03","04", "05", "06", "07", "08", "09", "10", "11", "12"];
            let editDate = eventDate.getFullYear() + "-" + editMonths[eventDate.getMonth()] + "-" + eventDate.getDate();
            let editModalId = "edit-"+index;
            let editModalButtonId = "#edit-"+index;
            let deleteModalId = "delete-"+index;
            let deleteModalButtonId = "#delete-"+index;

            return (
                <div>
                    <div class="modal fade" id={deleteModalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">Delete Event</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action ={deleteURL} method ="POST">
                                        <p> Are you sure you want to delete your event <span class = "text-capitalize">'{activity.name}'</span> ? </p>
                                        <div class="modal-footer border-0 pb-0">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">No, keep the event</button>
                                            <button type="submit" class="btn btn-danger">Delete</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id={editModalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">Edit your posted events</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action ={editURL} method ="POST">
                                    <label class = "font-weight-bold">Activity Type</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="type"defaultValue = {activity.type}/>

                                    <label class = "font-weight-bold">Activity Title</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="name" defaultValue={activity.name}/>

                                    <label class = "font-weight-bold">Max Pax</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="max_pax"defaultValue={activity.max_pax}/>

                                    <label class = "font-weight-bold">Event Address</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="event_address" defaultValue={activity.event_address}/>

                                    <label class = "font-weight-bold">Event Postal</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="event_postal" defaultValue={activity.event_postal}/>

                                    <label class = "font-weight-bold">Event Desciption</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="event_description" defaultValue={activity.event_description}/>

                                    <label class = "font-weight-bold">Event Photo</label>
                                    <input type="text" class="p-0 pl-2 new-input mb-3" name="event_photo" defaultValue={activity.event_photo}/>

                                    <label class = "font-weight-bold">Date of Event</label>
                                    <input type="date" class="p-0 pl-2 new-input mb-3" name="event_date" Value={editDate}/>

                                    <label class = "font-weight-bold">Start Time</label>
                                    <input type="time" class="p-0 pl-2 new-input mb-3" name="start_time" defaultValue={activity.start_time}/>

                                    <label class = "font-weight-bold">Ending Time</label>
                                    <input type="time" class="p-0 pl-2 new-input mb-3" name="end_time" placeholder="Max Pax" defaultValue={activity.end_time}/>
                                    <div class="modal-footer border-0 pb-0">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <li class="shorter-width d-flex justify-content-between list-group-item"><h5 class = "font-italic">
                        <a href={postedURL}>{date} - <span class = "text-capitalize">{activity.name}</span>
                        </a></h5>
                        <div class = "row">
                        <button type="submit" class="myButton mx-2 new-input" data-toggle="modal" data-target={editModalButtonId}>Edit</button>
                        <button type="submit" class="myButton mx-2 new-input" data-toggle="modal" data-target={deleteModalButtonId}>Delete Event</button>
                        </div>
                    </li>
                </div>
            );
        });
    };


    return(
        <Layout>
             <div class = "container col-8 mt-5 pt-4">
                <div class = "content bg-white bordered p-4 mt-4">
                    <h1 class = "mb-4 underlined profile-header">Welcome to nēi, <span class = "text-capitalize font-italic">{this.props.userInfo.user_name}! </span></h1>
                    <div class ="row">
                        <div class ="col">
                            <h5 class="font-weight-bold">Home Postal Code:</h5><p>{this.props.userInfo.user_postal}</p>
                        </div>
                        <div class ="col">
                            <h5 class="font-weight-bold">No. of attending events:</h5><p>{this.props.attending.length}</p>
                        </div>
                        <div class ="col">
                            <h5 class="font-weight-bold">No. of hosted events:</h5><p>{this.props.posted.length}</p>
                        </div>
                    </div>
                    <h4 class = "mt-4"><u>Events you are attending</u></h4>
                    <ul class="list-group mt-3">
                        {attend}
                    </ul>
                    <h4 class = "mt-5"><u>Events hosted by you </u></h4>
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