import React, {Component} from 'react';
import {connect} from "react-redux";
import actions from '../redux/actions/notepad';
import {bindActionCreators} from "redux";
import Notepad  from '../components/notepad';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNotepad: null,
      notepads: []
    };
    this.createNotepad = this.createNotepad.bind(this);
    this.saveNotepad = this.saveNotepad.bind(this);
    this.removeNotePad = this.removeNotePad.bind(this);
  }

  createNotepad() {
    this.setState({newNotepad: true});
  }

  saveNotepad(notepad) {
    console.log('saveNotepad', notepad);
    this.props.actions.create(notepad);
    this.setState({newNotepad: null});
  }

  removeNotePad(id) {
    this.props.actions.remove(id);
  }

  render() {
    return <div className="p-5">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={this.createNotepad}>Add notepad</button>
        </div>
      </div>
      {this.state.newNotepad && <Notepad {...this.state.newNotepad} addNote={this.addNote} crateNotePad={this.saveNotepad}/>}
      {this.props.notepads && this.props.notepads.map((notepad, i) => {
        return <div key={i} className="mt-5">
          <Notepad {...notepad} removeNotePad={this.removeNotePad}/>
        </div>;
      })
      }
    </div>
  }
}

const mapStateToProps = (state) => ({
  notepads: state.Notepad.data,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
