import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";




import NewsItem from './NewsItem'; import '../sass/newsItem.scss'


export class NewsList extends Component {

    render() {
        return (
            <InfiniteScroll
                dataLength={this.props.news.length}
                hasMore={true}
            // next={this.fetchMoreData}
            >
                {this.props.news && !!this.props.news.length && this.props.news.map((item, index) => {
                    return (
                        <NewsItem data={item} key={index} />
                    )
                })}
            </InfiniteScroll>
        )
    }
}

export default NewsList;