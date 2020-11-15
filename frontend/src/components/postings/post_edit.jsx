import React from 'react'
class PostEdit extends React.Component {
    constructor(props){

        super(props)
        this.state = {public: this.props.post.public,
                    priority: this.props.post.priority,
                    application: '',
                    misc: 'none',
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(e){

        e.preventDefault();
        this.props.updateAPosting(this.props.post._id, this.state);
        this.props.closeEdit();
    }
    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        };
    }
    render() {
        return <div className="post-edit">
            <form onSubmit={this.submitHandler}>
                <p id='notes'>Notes</p>
                <br />
                <div class="radio-toolbar">
                    <label id='notes-label'>Privacy:</label>


                        <input type="radio" id="radio1" name="privacy_radios" onChange={this.update("public")} defaultChecked={this.state.public} value={true}/>
                        <label for="radio1">Public</label>
                        
                        <input type="radio" id="radio2" name="privacy_radios" onChange={this.update("public")} defaultChecked={!this.state.public} value={false}/>
                        <label for="radio2">Private</label>

                        <br/>
                    <label id='notes-label'>Priority:</label>
                    <input type="radio" id="radio3" name="priority_radios" onChange={this.update("priority")} defaultChecked={this.state.priority} value={1}/>
                    <label for="radio3">Low</label>

                    <input type="radio" id="radio4" name="priority_radios" onChange={this.update("priority")} defaultChecked={this.state.priority} value={2} />
                    <label for="radio4">Medium</label>

                    <input type="radio" id="radio5" name="priority_radios" onChange={this.update("priority")} defaultChecked={this.state.priority} value={3} />
                    <label for="radio5">High</label>


                        {/* <select onChange={this.update("priority")} value={this.state.priority}>
                            <option defaultValue={this.state.priority === "low"} value="low">low</option>
                            <option defaultValue={this.state.priority === "medium"} value="medium">medium</option>
                            <option defaultValue={this.state.priority === "high"} value="high">high</option>
                        </select> */}
              
                <br/>
                <br/>
                <div>
                    <label id='notes-label'>Application Process:
                        <select id='drop-down' onChange={this.update("application")} value={this.state.application}>
                            <option defaultValue={this.state.application === "Haven't applied"} value="Haven't applied">Haven't applied</option>
                            <option defaultValue={this.state.application === "Applied"} value="Applied">Applied</option>
                            <option defaultValue={this.state.application === "Call Back"} value="Call Back">Call Back</option>
                            <option defaultValue={this.state.application === "Phone Interview"} value="Phone Interview">Phone Interview</option>
                            <option defaultValue={this.state.application === "On-site Interview"} value="On-site Interview">On-site Interview</option>
                            <option defaultValue={this.state.application === "Offer Received"} value="Offer Received">Offer Received</option>
                            <option defaultValue={this.state.application === "Offer Accepted"} value="Offer Accepted">Offer Accepted</option>
                        </select>
                    </label>
                </div>
                <br/>
                </div>
                
                <label><p>Past Misc Notes:</p>
                    <p>{this.state.misc}</p>
                </label>
                <br/>
                <label><p>Misc:</p>
                    <br/>
                    <input type='text' id='notes-field' placeholder='Extra notes?'/>
                </label>
                <br />
                <button type="submit" id='submit-button' value="Save Changes">Save Changes</button>
            </form>
        </div>
    }
}

export default PostEdit