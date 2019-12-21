import React, {Fragment} from "react";
import {connect} from "react-redux";
import {fetchNews} from "../../actions/NewsActionTypes";
import {NewsEntity} from "../../entities/NewsEntity";
import NewsItem from "../../components/NewsItem/NewsItem";
import "./News.sass";
import bem from "../../bem.confing";

const n = bem("News");

interface IProps {
  news: NewsEntity[],
  getNews(): any
}

class News extends React.Component<IProps> {

  componentDidMount(): void {
    this.props.getNews();
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {news} = this.props;
    return (
      <Fragment>
        <h2>Today's news</h2>
        <div className={n()}>
          {news.map((oneNews: NewsEntity) => {
            return <NewsItem className={n("item")} key={oneNews.id} item={oneNews}/>
          })}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    news: state.newsReducer.news
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    getNews: () => {
      setTimeout(() => dispatch(fetchNews()), 100);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
