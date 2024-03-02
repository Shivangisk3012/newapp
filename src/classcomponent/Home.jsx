import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from './NewsItem'

export default class Home extends Component {

    constructor(){
        super()
        this.state = {
            article: [],
            totalResults: 0,
            page: 1
        }
    }
 async getApiData(){
      let response = await fetch(`https://newsapi.org/v2/everything?page=${this.state.page}&q=${this.props.q}&sortBy=publishedAt&language=${this.props.language}&apiKey=1583170c035e409e896b13c1caa6e72c`)
      response = await response.json()
      if(response.article){
      }
      console.log(response);
        this.setState({
            article: response.articles,
            totalResults: response.totalResults
        })
 }

 fetchData=async ()=>{
  this.setState({
    page: this.state.page + 1
  })
  let response = await fetch(`https://newsapi.org/v2/everything?page=${this.state.page}&q=${this.props.q}&sortBy=publishedAt&language=${this.props.language}&apiKey=1583170c035e409e896b13c1caa6e72c`)
  response = await response.json()
  console.log(response);
    this.setState({
      article: this.state.article.concat(response.article),
    })

  

}


    componentDidMount(){
        this.getApiData()
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.q !== this.props.q){
            this.getApiData()
        }
    }

  render() {
    console.log('hello')

    return (
      <div className='container text-center '>
     <h5 className='container-fluid bg-secondary m-2 p-2 text-white'>
        {this.props.q} News Article
     </h5>
     <InfiniteScroll
  dataLength={this.state.article.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.article.length < this.state.totalResults}
  loader={<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>No more data</b>
    </p>
  }
  // below props only if you need pull down functionality
>


     <div className='row'>
         

        {this.state.article.map((item,index)=>{
            return <NewsItem 
                      key={index}
                      title={item.title}
                      source={item.source.name}
                        pic={item.urlToImage}
                        desc={item.description}
                        date={item.publishedAt}
                        url={item.url}

                      />
                
        })}
            </div>
            </InfiniteScroll>

      </div>
    )
  }
}
