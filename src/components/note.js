import React, {Component} from 'react';

class Note extends Component {

  render() {
    return  <div className="mt-5">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter note title" value={this.props.title || ''}/>
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="5">{this.props.title || ''}</textarea>
      </div>
    </div>
  }
}

export default Note;