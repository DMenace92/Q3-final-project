import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        // console.log(this.props.ComicSearch)
        return(
            <div>
            <input className='inputSearch' placeholder="Search" onChange={this.props.ComicSearch}></input>
            </div>
        )
    }
}
export default SearchBar;