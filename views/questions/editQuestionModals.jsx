var React = require('react');

class EditQuestionModals extends React.Component {
  render() {
    return(
        <div>
            <div className={"modal fade"} id={"editQuestionModal"} tabindex={"-1"} role={"dialog"}aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"} role={"document"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title font-weight-bold"}> Edit Question Details</h5>
                            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                                <span aria-hidden={"true"}>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method={'POST'} action={'/activity/'+this.props.question_id+'/edit?_method=PUT'}>
                              <div className={"form-group "}>
                                <label>Question Title</label>
                                <input type={"text"} className={"form-control"} name={'question_title'} defaultValue={this.props.question.question_title.charAt(0).toUpperCase() + this.props.question.question_title.slice(1)} required/>
                              </div>
                              <div className={"form-group"}>
                                <label>Equipment</label>
                                <input type={"text"} className={"form-control"} name={'equipment'} defaultValue={this.props.question.equipment.charAt(0).toUpperCase() + this.props.question.equipment.slice(1)} required/>
                              </div>
                              <div className={"form-group"}>
                                <label>Photo</label>
                                <div className="custom-file form-field-height">
                                    <input type="file" class="custom-file-input"/>
                                    <label className={"custom-file-label"} defaultValue={this.props.question.question_photo} name={'question_photo'}/>
                                </div>
                              </div>
                              <div className={"form-group"}>
                                <label>Description</label>
                                <textarea className={"form-control"} type={"text"} rows={'5'} name={'question_text'} defaultValue={this.props.question.question_text.charAt(0).toUpperCase() + this.props.question.question_text.slice(1)} required></textarea>
                              </div>
                              <div className={"form-group row"}>
                                <div className="col-1 text-center my-auto">
                                    <label>Status</label>
                                </div>
                                <select className="py-0 offset-1 form-field-height" type={"text"} name={'question_status'}>
                                    <option value="open">Open</option>
                                    <option value="resolved">Resolved</option>
                                </select>
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
            <div className={"modal fade"} id={"deleteQuestionModal"} tabindex={"-1"} role={"dialog"} aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"} role={"document"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title font-weight-bold"}>Delete Question</h5>
                            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                                <span aria-hidden={"true"}>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method={'POST'} action={'/activity/'+this.props.question_id+'/?_method=DELETE'}>
                              <p> Are you sure you want to delete this question? </p>
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


module.exports = EditQuestionModals;