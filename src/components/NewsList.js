import React from 'react'
import NewsItem from './NewsItem'; import '../sass/newsItem.scss'


const NewsList = ({ news }) => {

    return (
        <div>
            {news && !!news.length && news.map(item => {
                return (
                    <NewsItem data={item} key={item.published_at} />
                )
            })}
        </div>
    )
}

export default NewsList;