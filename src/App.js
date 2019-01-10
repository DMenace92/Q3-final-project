import React, { Component } from 'react';

import ComicsList from './Component/ComicsList.js'
import SearchBar from './Component/SearchBar.js'
import NavBar from './Component/NavBar.js'
import Cart from './Component/Cart.js'
// import CartList from './Component/CartList.js'
import Footer from './Component/Footer.js'
// import axios from 'axios'


import './App.css';

class App extends Component {
  state = {
    CartItem: [],
    user: [],
    comic: [],
    total: 0,
    filterComics: ''
  }
  

  async componentDidMount (){
    const res = await fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=1505e799a8ca64cdcca6038e57ea8c66')
    const json = await res.json()
    
    this.setState({comic: json.data.results})
    
    this.getUser()
    console.log(json)
  }
  async getUser(){
    const res = await fetch('http://localhost:8000/')
    const json = await res.json()
    this.setState({user: json})
    // console.log(json)
    // console.log(this.state.comic)
  }

    addComic = (id) => {
        const SelectedComic = this.state.comic.filter(comic => comic.id)
      // if(this.state.cameras.inCart === true)
        console.log(SelectedComic)
        this.setState(prevState => {
          console.log(prevState)
          let CartItems = this.state.CartItem
          for(let i = 0; i < this.state.comic.length; i++){
           if(this.state.comic[i].id === id){
              CartItems.push(this.state.comic[i])
              
           }
          }
         return {CartItems};
        })
     }

 
  ComicSearch = (e) => {
    this.setState ({
      filterComics: e.target.value
      
    })
    
   }
     removeItem = (id) => {
        this.setState(prevState => {
         console.log(prevState)
        let CartItems = this.state.CartItem
     
        if(this.state.comic.id !== id){
          CartItems.splice(this.state.comic)
        }
       return {CartItems}
     })
      }

  


  render() {
    return (
      <div className="App">
        
        <NavBar />
        <Cart CartItems={this.state.CartItem} removeItem={this.removeItem}/>
        
        <SearchBar ComicSearch={this.ComicSearch}/>
        <ComicsList comiclist={this.state.comic.filter(comic => comic.title.includes(this.state.filterComics))}
          addComic={this.addComic}/>
      
        <Footer />
       
      </div>
    );
  }
}

export default App;
// comics={this.state.comic.filter(comic =>comic.id.includes(this.state.filterComics))}