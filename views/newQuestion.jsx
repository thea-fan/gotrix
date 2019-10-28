var React = require('react');
var Layout = require('./components/layout.jsx');

class newQuestion extends React.Component {
  render() {
    return(
         <Layout user_name={this.props.status.user_name} user_company = {this.props.status.user_company} user_type = {this.props.status.user_type} user_id = {this.props.status.user_id}>
            <div class = "bg-white pb-4 col-8 offset-2 border rounded mt-4 px-5">
                <div className={'row'}>
                    <div className={'col-10 offset-1 mt-5'}>
                        <h1> Add New Question </h1>
                        <form method={'POST'} action={'/activity/new'}>
                          <div className={"form-group row"}>
                            <div className="col-2 text-center my-auto">
                                <label>Title</label>
                            </div>
                            <input type={"text"} className={"col-6 offset-1 form-field-height"} placeholder={"Post Title"} name={'question_title'}  />
                          </div>
                          <div className={"form-group row"}>
                            <div className="col-2 text-center my-auto">
                                <label>Equipment</label>
                            </div>
                            <input type={"text"} className={"col-6 offset-1 form-field-height"} placeholder={"Equipment Name"} name={'equipment'}  />
                          </div>
                          <div className={"form-group row"}>
                            <div className="col-2 text-center mt-0">
                                <label>Description</label>
                            </div>
                            <textarea className={"col-8 offset-1 "} placeholder={'Description of the issue'} rows={'5'} name={'question_text'} ></textarea>
                          </div>
                          <div className={"form-group row"}>
                            <div className="col-3 text-center my-auto">
                                <label>Upload Image</label>
                            </div>
                                <div className="custom-file col-6 form-field-height">
                                    <input type="file" class="custom-file-input" id="customFile"/>
                                    <label className={"custom-file-label"} placeholder={"Photos"} name={'question_photo'} >/img/default-book.jpg</label>
                              </div>
                          </div>
                          <div className={"form-group row"}>
                            <div className="col-2 text-center my-auto">
                                <label>Status</label>
                            </div>
                            <select className="py-0 offset-1 form-field-height" type={"text"} placeholder={"status"} name={'question_status'}>
                                <option value="open">Open</option>
                                <option value="resolved">Resolved</option>
                            </select>
                          </div>
                          <div className="text-right">
                            <button type={"submit"} class={"btn btn-dark"}>Post Question</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }
}

module.exports = newQuestion;