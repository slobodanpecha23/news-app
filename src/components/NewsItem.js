import React from 'react'
import '../sass/newsItem.scss'

const NewsItem = ({ data }) => {
    return (
        <a href={data.url} target="_blank" className="news-container">
            <div className="content">
                <h2 className="title">{data.title}</h2>
                <p className="description">{data.description}</p>
                <div className="date-and-author">
                    <p className="author">{data.author}</p>
                    <p className="date">{data.published_at}</p>
                </div>
            </div>
            <div className="news-img">
                <img src={data.image} alt="news img" className="news-picture" />
            </div>
        </a>
    )
}

export default NewsItem;