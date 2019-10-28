
var React = require("react");
var Layout = require('./components/layout.jsx');

class editActivity extends React.Component {
  render() {
    let activity = this.props.activityInfo[0];
    let url = "/activity/"+activity.id+ "/edit?_method=PUT";
    let eventDate = activity.event_date;
    const months = ["01", "02", "03","04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let date = eventDate.getFullYear() + "-" + months[eventDate.getMonth()] + "-" + eventDate.getDate();
    (console.log(date))

    return (
      <Layout>
         <div class = "container">
                <div class = "content">
                    <h1> Edit: {activity.name} </h1>
                    <form action ={url} method ="POST">

                        <h2>Activity Type</h2>
                        <input type="text" name="type" defaultValue={activity.type}/>

                        <h2>Activity Title</h2>
                        <input type="text" name="name" defaultValue={activity.name}/>

                        <h2>Max Pax</h2>
                        <input type="text" name="max_pax" defaultValue={activity.max_pax}/>

                        <h2>Date of Event</h2>
                        <input type="date" name="event_date" value={date}/>

                        <br/><br/>
                        <input type="submit" value = "Update"/>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = editActivity;