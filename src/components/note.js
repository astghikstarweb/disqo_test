import React, {Component} from 'react';

class Note extends Component {

  render() {
    return <div className="mt-5">
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <input type="text" className="form-control" ref="noteTitle" placeholder="Enter note title" onChange={() => this.props.edit('title', this.refs.noteTitle.value, this.props.id)} defaultValue={this.props.title || ''}/>
          </div>
          <div className="form-group">
            <textarea className="form-control" ref="noteDescription" rows="5" onChange={(e) => this.props.edit('note', this.refs.noteDescription.value, this.props.id)} defaultValue={this.props.title || ''}/>
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