import React, {Component} from 'react';
import Note from './note';

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: [],
      notes: []
    };
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  save() {
    const notepadTitle = this.refs.notepadTitle.value;
    const files  = {};
    this.state.notes.forEach((note) => {
      files[note.title] = {content: note.note};
    });
    this.props.crateNotePad({description: notepadTitle, files});
  }

  remove(id) {
    this.props.removeNotePad(id);
  }

  addNote(note) {
    const notes = [...this.state.notes, note];
    this.setState({notes});
  }

  updateNote(i, note) {
    let notes = this.state.notes;
    notes[i] = note; //toDO
    this.setState({notes});
  }

  deleteNote(i) {
    const notes = this.state.notes.splice(i, 1);
    this.setState({notes});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes) {
      this.setState({notes: nextProps.notes})
    }

  }

  componentDidMount() {
    if(this.props.notes) {
      this.setState({notes: this.props.notes})
    }
  }

  render() {
    return  <div col="col-12">
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Notepad Title</label>
            <input type="text" ref="notepadTitle" className="form-control" defaultValue={this.props.title || ''} placeholder="My notepad title..."/>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <button type="button" className="btn btn-primary mr-5" onClick={this.save}>Save</button>
            <button type="button" className="btn btn-danger" onClick={() => this.remove(this.props.id)}>Delete</button>
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
                onClick={() => this.addNote({title: this.refs.newNotetitle.value, note: this.refs.note.value})}>
          Add</button>
      </div>
      {
        this.state.notes && this.state.notes.map((note, i) => {
          return <Note key={i} {...note} id={i} remove={this.deleteNote}/>
        })
      }
    </div>
  }
}

export default Notepad;