import React, {Component} from 'react';

class Note extends Component {

  render() {
    return <div className="mt-5">
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter note title" defaultValue={this.props.title || ''}/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="5" defaultValue={this.props.title || ''}/>
          </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-danger" onClick={() => this.props.remove(this.props.id)}>Delete</button>
        </div>
      </div>
    </div>
  }
}

export default Note;