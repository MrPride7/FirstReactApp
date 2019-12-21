import React, {Fragment} from "react";
import {connect} from "react-redux";
import bem from "../../bem.confing";
import {NotesEntity} from "../../entities/NotesEntity";
import "./Notes.sass";
import {addNote, findNote} from "../../actions/NotesActionTypes";
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

  findNote = () => {
    // @ts-ignore
    this.props.onFindNote(this.searchRef.value);
  };

  private titleRef: HTMLInputElement | null | undefined; // без undefind не работает, а по другому никак
  private descrRef: HTMLTextAreaElement | null | undefined;
  private searchRef: HTMLInputElement | null | undefined;

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    const {notes} = this.props;
    const cols: number = 30;
    const rows: number = 10;

    return (
      <Fragment>

        <div className={n()}>
          <h2>Your notes</h2>

          <div>
            <label htmlFor="note-search">Find note</label>
            <input required id="note-search" type="text" ref={(input) => this.searchRef = input}/>
            <button onClick={this.findNote} type="button" className={n("btn")}>Find note</button>
          </div>

          <form action="#" className={n("form")}>
            <legend className={n("form-head")}>Add note</legend>

            <label htmlFor="note-title">Note title</label>
            <input required id="note-title" type="text" ref={(input) => this.titleRef = input}/>

            <label htmlFor="note-description">Note description</label>
            <textarea required id="note-description" cols={cols} rows={rows} ref={(input) => this.descrRef = input}/>

            <button onClick={this.addNote} type="button" className={n("btn")}>Add note</button>
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
    notes: state.notesReducer.notes.filter((note: NotesEntity) => note.title.includes(state.notesReducer.noteForSearch))
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    onAddNote: (note: NotesEntity) => {
      dispatch(addNote(note))
    },
    onFindNote: (note: string) => {
      dispatch(findNote(note))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
