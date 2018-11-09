import React, {Component} from 'react';

class Note extends Component {

  render() {
    return  <div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter note title"/>
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="5"/>
      </div>
      <button type="button" className="btn btn-success">Add</button>
    </div>
  }
}

export default Note;