import React, { Component } from 'react'
import NewsList from './components/NewsList'

import './sass/variables.scss'
import './sass/app.scss'

export class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className="header">
          <h1 className="header-title">News App</h1>
          <form className="searchForm">
            <input className="input-1" type="text" placeholder="Find news by keyword" />
            <input className="input-2" type="submit" value="Search" />
          </form>
        </div>
        <div className="categories">
          <span className="header-button">Sports</span>
          <span className="header-button">Technology</span>
        </div>
        <NewsList />
      </div>
    )
  }
}

export default App

