var React = require('react');

class EditReplyModals extends React.Component {
  render() {
    return(
        <div>
            <div className={"modal fade"} id={this.props.editID} tabindex={"-1"} role={"dialog"}aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"} role={"document"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title font-weight-bold"}> Edit Reply Details</h5>
                            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                                <span aria-hidden={"true"}>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method={'POST'} action={'/activity/'+this.props.question_id+'/reply/'+this.props.reply_id + '/edit?_method=PUT'}>
                              <div className={"form-group"}>
                                <label>Your Reply</label>
                                <textarea className={"form-control"} type={"text"} rows={'5'} name={'reply_text'} defaultValue={this.props.current_reply.charAt(0).toUpperCase() + this.props.current_reply.slice(1)} required></textarea>
                                  </div>
                              <div class="modal-footer">
                                <button type={"button"} class={"btn btn-light"} data-dismiss={"modal"}>Close</button>
                                <button type={"submit"} class={"btn btn-dark"}>Save</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"modal fade"} id={this.props.deleteID} tabindex={"-1"} role={"dialog"} aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"} role={"document"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title font-weight-bold"}>Delete Reply</h5>
                            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                                <span aria-hidden={"true"}>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method={'POST'} action={'/activity/'+this.props.question_id+'/reply/'+this.props.reply_id + '/?_method=DELETE'}>
                              <p> Are you sure you want to delete this reply? </p>
                              <div class="modal-footer">
                                <button type={"button"} class={"btn btn-light"} data-dismiss={"modal"}>Close</button>
                                <button type={"submit"} class={"btn btn-dark"}>Delete</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


module.exports = EditReplyModals;