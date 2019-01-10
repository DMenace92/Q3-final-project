import React from 'react'
import { CardImg, CardTitle,Button} from 'reactstrap'
import unnamed from '../unnamed.jpg'
const ComicsList = props => {
    // console.log(props)
    function fillerImg(img){
        if(!img){
            return unnamed
        }else{
            return img.path +".jpg"
        }
    }
    // console.log(props.comiclist)
    return(
        <div className="Main">
        <div className="container">
        
            {props.comiclist ? props.comiclist.map(comic =>
                
            <div className='wrapper' key={comic.id} value={comic.id}>
            {/* {console.log(comic.images[0])} */}
                <CardTitle className='titleText'>{comic.title}</CardTitle>
                
                <CardImg className="image" src={ fillerImg(comic.images[0]) || unnamed  }/>
                <CardTitle>{comic.pageCount} Pages</CardTitle>
                <CardTitle>${comic.prices[0].price}</CardTitle>
                <Button className="addButton" onClick={()=> props.addComic(comic.id)}>Add To Cart</Button>
               
            </div>
            ) : <div>Loading</div>}
        </div>
        </div>
    )
}
export default ComicsList