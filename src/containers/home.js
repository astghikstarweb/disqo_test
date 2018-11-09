import React, {Component} from 'react';
import Notepad  from '../components/notepad';

class Home extends Component {
  constructor(props) {
    super(props);
    this.createNotepad = this.createNotepad.bind(this);
    this.state = {
      newForm: false
    }
  }

  createNotepad() {
    this.setState({newForm: true});
  }

  render() {
    return <div className="p-5">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={this.createNotepad}>Add notepad</button>
        </div>
      </div>
      {this.state.newForm && <div className="mt-5">
        <Notepad/>
      </div>
      }
    </div>
  }
}

export default Home;