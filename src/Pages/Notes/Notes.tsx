import React, {Fragment} from "react";
import {connect} from "react-redux";
import bem from "../../bem.confing";
import {NotesEntity} from "../../entities/NoteEntity";
import "./Notes.sass";
import {ADD_NOTE} from "../../actions/NotesActions";
import NotesItem from "../../components/NotesItem/NotesItem";

const n = bem("Notes");

class Notes extends React.Component<any, any> {

  addNote = () => {
    // @ts-ignore
    this.props.onAddNote({title: this.titleRef.value, description: this.descrRef.value});
    // @ts-ignore
    this.titleRef.value = "";
    // @ts-ignore
    this.descrRef.value = "";
  };

  private titleRef: HTMLInputElement | null | undefined; // без undefind не работает, а по другому никак
  private descrRef: HTMLTextAreaElement | null | undefined;

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    const {notes} = this.props;
    const cols: number = 30;
    const rows: number = 10;

    return (
      <Fragment>

        <div className={n()}>
          <h2>Your notes</h2>
          <form action="#" className={n("form")}>
            <legend className={n("form-head")}>Add note</legend>

            <label htmlFor="note-title">Note title</label>
            <input required id="note-title" type="text" ref={(input) => this.titleRef = input}/>

            <label htmlFor="note-description">Note description</label>
            <textarea required id="note-description" cols={cols} rows={rows} ref={(input) => this.descrRef = input}/>

            <button onClick={this.addNote} type="button" className={n("add-btn")}>Add note</button>
          </form>

          <div className={n("notes-container")}>
            {notes.length !== 0 ? notes.map((note: NotesEntity, index: number) => {
              return <NotesItem className={n("item")} key={`${note.title}${index}`} item={note}/>
            }): <h3>You have no notes</h3>}
          </div>

        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    notes: state.notesReducer.notes
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    onAddNote: (note: NotesEntity) => {
      dispatch({type: ADD_NOTE, note})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
