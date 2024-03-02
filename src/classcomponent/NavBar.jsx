import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  postSearch = (e) => {

    e.preventDefault()
    this.props.changeSearch(this.state.search)
    console.log('search:', this.state.search);
    this.setState({
      search: ""
    })


  }

  render() {

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-secondary sticky">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" onClick={()=>{this.props.changeSearch("")}} to="/All">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-togglerName-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light"  aria-current="page" onClick={()=>{this.props.changeSearch("")}} to="/All">All</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" onClick={()=>{this.props.changeSearch("")}} to="/Politics">Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" onClick={()=>{this.props.changeSearch("")}} to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" onClick={()=>{this.props.changeSearch("")}} to="/Technology">Technology</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" onClick={()=>{this.props.changeSearch("")}} to="/Education">Education</Link></li>

                    <li><Link className="dropdown-item" onClick={()=>{this.props.changeSearch("")}} to="/Crime">Crime</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>{this.props.changeSearch("")}} to="/Sport">Sport</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>{this.props.changeSearch("")}} to="/Cricket">Cricket</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </Link>
                  <ul className="dropdown-menu">

                    <li><button onClick={() => this.props.changeLanguage('hi')} className="dropdown-item">Hindi</button></li>
                    <li><button onClick={() => this.props.changeLanguage('en')} className="dropdown-item">English</button></li>
                  </ul>
                </li>


              </ul>

              <form className="d-flex" role="search" onSubmit={(e) => { this.postSearch(e) }}>
                <input className="form-control me-2" type="search" name='search' value={this.state.search} onChange={(e) => { this.setState({ search:e.target.value})}} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
