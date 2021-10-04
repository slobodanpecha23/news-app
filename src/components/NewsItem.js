import React from 'react'
import '../sass/newsItem.scss'

const NewsItem = () => {
    return (
        <div className="news-container">
            <div className="content">
                <h2 className="title">My new post</h2>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className="date-and-author">
                    <p className="author">Slobodan Mitrovic</p>
                    <p className="date">23.3.2121.</p>
                </div>
            </div>
            <div className="news-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoOL5adsBpPv3UerNHk-tjiOi7QQVqzPBJkjFGV89vwSDVgw0Fr4A5OOTgg6-XBPKoAE&usqp=CAU" alt="news img" className="news-picture" />
            </div>
        </div>
    )
}

export default NewsItem;