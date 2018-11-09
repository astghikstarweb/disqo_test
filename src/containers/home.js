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
  }

  createNotepad() {
    this.setState({newNotepad: true});
  }

  saveNotepad(notepad) {
    console.log('saveNotepad', notepad);
    // this.setState({newNotepad: null});
    this.props.actions.create(notepad);
  }

  render() {
    return <div className="p-5">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={this.createNotepad}>Add notepad</button>
        </div>
      </div>
      {this.state.newNotepad && <Notepad {...this.state.newNotepad} addNote={this.addNote} crateNotePad={this.saveNotepad}/>}
      {this.state.notepads.map((notepad, i) => {
        return <div key={i} className="mt-5">
          <Notepad {...notepad} id={i}/>
        </div>;
      })
      }
    </div>
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
