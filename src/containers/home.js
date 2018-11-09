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
    this.crateOrUpdateNotepad = this.crateOrUpdateNotepad.bind(this);
    this.removeNotepad = this.removeNotepad.bind(this);
  }

  createNotepad() {
    this.setState({newNotepad: true});
  }

  crateOrUpdateNotepad(notepad) {
    if (!notepad.id) {
      this.props.actions.create(notepad);
      this.setState({newNotepad: null});
    } else {
      this.props.actions.update(notepad.id, notepad);
    }

  }

  removeNotepad(id) {
    this.props.actions.remove(id);
  }

  render() {
    return <div className="p-5">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={this.createNotepad}>Add notepad</button>
        </div>
      </div>
      {this.state.newNotepad && <Notepad {...this.state.newNotepad} addNote={this.addNote} crateOrUpdateNotepad={this.crateOrUpdateNotepad}/>}
      {this.props.notepads && this.props.notepads.map((notepad, i) => {
        return <div key={i} className="mt-5">
          <Notepad {...notepad} removeNotepad={this.removeNotepad} crateOrUpdateNotepad={this.crateOrUpdateNotepad}/>
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
