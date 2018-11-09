import React, {Component} from 'react';
import Note from './note';

class Home extends Component {

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
        <Note/></div>
    </div>
  }
}

export default Home;