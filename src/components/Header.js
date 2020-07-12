import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {Route, NavLink} from 'react-router-dom'

// Header contains the search and navigation buttons
class Header extends Component {

  // this function manipulates the router history by adding new items when user submits new search
  handleSubmit = (e) => { /* using arrow function here binds the method to the Header component */
    e.preventDefault()
    const path = `/${this.query.value}`
    this.props.history.push(path)
    e.currentTarget.reset()
  }

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit} > {/* call handleSubmit when form is submitted */}
          <input type="search" name="search" placeholder="Search" ref={(input) => this.query = input} required/> {/* use ref to access the value of the input field */}
            <button type="submit" className="search-button" >
                <svg fill="#fff" height="40" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>
        </form>
        
        {/* navigation buttons with NavLinks to perform specific searches */}
        <nav className="main-nav">
          <ul>
              <li><NavLink to={`/space`} >Space</NavLink></li>
              <li><NavLink to={`/biking`} >Biking</NavLink></li>
              <li><NavLink to={`/golf`} >Golf</NavLink></li>
          </ul>
        </nav>
  
        <Route path={`/space`} />         
        <Route path={`/biking`} />     
        <Route path={`/golf`} />
      </div>
    )
  }
}

export default withRouter(Header);