import React, {Component} from 'react';
import Notepad  from '../components/notepad';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNotepad: null,
      notepads: []
    };
    this.createNotepad = this.createNotepad.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(note) {console.log('note', note);
    let selectedNotepad = this.state.newNotepad;
    const notes = selectedNotepad['notes'] ? [...selectedNotepad['notes'], note] : [note];
    this.setState({newNotepad: {...selectedNotepad, notes}});
  }

  updateNote(i, note) {
    let selectedNotepad = this.state.newNotepad;
    selectedNotepad['notes'][i] = note
    this.setState({newNotepad: selectedNotepad});
  }

  deleteNote(i) {
    let selectedNotepad = this.state.newNotepad;
    const notes = selectedNotepad['notes'].splice(i, 1);
    this.setState({newNotepad: {...selectedNotepad, notes}});
  }

  createNotepad() {
    this.setState({newNotepad: {}});
  }

  saveNotepad() {
    this.setState({notepads: [this.state.newNotepad, ...this.state.notepads], newNotepad: null});
  }

  render() {
    return <div className="p-5">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={this.createNotepad}>Add notepad</button>
        </div>
      </div>
      {this.state.newNotepad && <Notepad {...this.state.newNotepad} addNote={this.addNote}/>}
      {this.state.notepads.map((notepad, i) => {
        return <div key={i} className="mt-5">
          <Notepad {...notepad} index={i} addNote={this.addNote}/>
        </div>;
      })
      }
    </div>
  }
}

export default Home;