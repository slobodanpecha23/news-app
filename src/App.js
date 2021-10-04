import React, { Component } from 'react'
import NewsList from './components/NewsList'
import SearchLoupe from './assets/search.png'

import './sass/variables.scss'
import './sass/app.scss'

export class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className="header">
          <h1 className="header-title">News App</h1>
          <div className="categories">
            <span className="header-button">Sports</span>
            <span className="header-button">Technology</span>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Find news by keyword" />
          <div>
            <img src={SearchLoupe} alt='search icon' className="search-icon" />
          </div>
        </div>
        <NewsList />
      </div>
    )
  }
}

export default App

