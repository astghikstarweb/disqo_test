import React, {Component} from 'react';
import Note from './note';

class Notepad extends Component {

  render() {
    return  <div col="col-12">
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Notepad Title</label>
            <input type="text" className="form-control" placeholder="My notepad title..."/>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <button type="button" className="btn btn-primary mr-5">Save</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <div>
        <h4>My notes</h4>
        <div className="form-group">
          <input type="text" ref="newNotetitle" className="form-control" placeholder="Enter note title"/>
        </div>
        <div className="form-group">
          <textarea ref="note" className="form-control" rows="5"/>
        </div>
        <button type="button" className="btn btn-success"
                onClick={() => this.props.addNote({title: this.refs.newNotetitle.value, note: this.refs.note.value})}>
          Add</button>
      </div>
      {
        this.props.notes && this.props.notes.map((note) => {
          return <Note {...note}/>
        })
      }
    </div>
  }
}

export default Notepad;