import React from 'react'
import '../sass/newsItem.scss'

const NewsItem = ({ data }) => {
    return (
        <a href={data.url} target="_blank" rel="noreferrer" className="news-container">
            <div className="content">
                <h2 className="title">{data.title}</h2>
                <p className="description">{data.description}</p>
                <div className="date-and-author">
                    <p className="author">{data.author}</p>
                    <p className="date">{data.published_at.slice(0, 10)}</p>
                </div>
            </div>
            <div className="news-img">
                <img src={data.image} alt="news img" className="news-picture" />
            </div>
        </a>
    )
}

export default NewsItem;