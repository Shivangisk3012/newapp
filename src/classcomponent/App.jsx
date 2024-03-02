import React, { Component } from 'react'
import Footer from './Footer'
import Home from './Home'
import Navbar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      language: 'hi',
      search: ""
      
     }
}
changeLanguage = (data)=>{
  console.log('Changing language to:', data);

  this.setState({
    language: data
  })
}
changeSearch = (data)=>{
  console.log('Changing search to:', data);
  this.setState({
    search: data
  })
}


  render() {
    console.log('Current language:', this.state.language);
    console.log('Current search:', this.state.search);

    return (
      <BrowserRouter>
      <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
        <Routes>
        <Route
            path="/"
            element={<Home language={this.state.language} q={this.state.search ? this.state.search : 'All'} />}
          />
          <Route path="/All" element={<Home language={this.state.language} q={this.state.search ? this.state.search : "All"}/>}/>
          <Route path="/Politics" element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Politics"}/>}/>
          <Route path="/Science" element={<Home language={this.state.language} q={this.state.search ? this.state.search :"Science"}/>}/>
          <Route path="/Technology" element={<Home language={this.state.language} q={this.state.search ? this.state.search :"Technology"}/>}/>
          <Route path="/Crime" element={<Home language={this.state.language} q={this.state.search ? this.state.search :"Crime"}/>}/>
          <Route path="/Education" element={<Home language={this.state.language} q={this.state.search ? this.state.search :"Education"}/>}/>
          <Route path="/Sport" element={<Home language={this.state.language} q={this.state.search ? this.state.search:"Sport"}/>}/>
          <Route path="/Cricket" element={<Home language={this.state.language} q={this.state.search ? this.state.search :"Cricket"}/>}/>



          </Routes>
      <Footer/>
      </BrowserRouter>
    )
  }
}
