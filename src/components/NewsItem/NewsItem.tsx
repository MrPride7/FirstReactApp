import React from "react";
import "./NewsItem.sass";
import bem from "../../bem.confing";
import {NewsEntity} from "../../entities/NewsEntity";

const ni = bem("NewsItem");

interface IProps {
  item: NewsEntity;
  key: string;
  className?: string;
};

const NewsItem = (props: IProps) => {
  return <div className={`${ni()} ${props.className}`}>
    <h3 className={ni("title")}>{props.item.title}</h3>
    <img className={ni("img")} src={props.item.image} alt={props.item.title}/>
    <div className={ni("description")}>{props.item.description}</div>
  </div>
};

export default NewsItem;
