import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
 <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>

<div className="card " >
  <img src={this.props.pic} height={150} className="card-img-top" alt="..."/>
  <div classname="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <div className='card-source'>
      <p>{this.props.source}</p>
      <p>{(new Date(this.props.date)).toDateString()}</p>
    </div>
    <p className="card-text">{this.props.desc}</p>
    <a href={this.props.url} target='_blank' rel='noreferrer'className="btn btn-secondary w-100">Go somewhere</a>
  </div>
  
        </div>
</div>  
  )
  }
}
