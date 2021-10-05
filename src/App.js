import React, { Component } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import { BASE_URL, API_KEY } from './constants/api_constants'


import './sass/variables.scss'
import './sass/app.scss'

export class App extends Component {
  state = {
    search_input: '',
    searchArray: [],
    page: 1
  }

  handleChange = e => {
    this.setState({ search_input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${BASE_URL}news?access_key=${API_KEY}&keywords=${this.state.search_input}&countries=us&offset=${this.state.page}`)
      .then(res => {
        this.setState({ searchArray: res.data.data })
      })
    this.setState({ search_input: '' });
  }

  handleClickOnSport = async () => {
    const res = await axios.get(`${BASE_URL}news?access_key=${API_KEY}&categories=sports&countries=us&offset=${this.state.page}`);
    this.setState({ searchArray: res.data.data })
  }

  handleClickOnTech = async () => {
    const res = await axios.get(`${BASE_URL}news?access_key=${API_KEY}&categories=technology&countries=us&offset=${this.state.page}`);
    this.setState({ searchArray: res.data.data })
  }

  render() {
    return (
      <div className='app-container'>
        <div className="header">
          <h1 className="header-title">News App</h1>
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <input className="input-1" type="text" placeholder="Find news by keyword" value={this.state.search_input} onChange={this.handleChange} />
            <input className="input-2" type="submit" value="Search" />
          </form>
        </div>
        <div className="categories">
          <span className="header-button" onClick={this.handleClickOnSport}>Sports</span>
          <span className="header-button" onClick={this.handleClickOnTech}>Technology</span>
        </div>
        <NewsList news={this.state.searchArray} page={this.state.page} />
      </div>
    )
  }
}

export default App

