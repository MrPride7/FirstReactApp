import React from "react";
import "./NotesItem.sass";
import bem from "../../bem.confing";
import {NotesEntity} from "../../entities/NotesEntity";
import "./NotesItem.sass";

const ni = bem("NotesItem");

interface IProps {
  item: NotesEntity;
  key: string;
  className?: string;
};

const NotesItem = (props: IProps) => {
  return <div className={`${ni()} ${props.className}`}>
    <h4 className={ni("title")}>{props.item.title}</h4>
    <div className={ni("description")}>{props.item.description}</div>
  </div>
};

export default NotesItem;
