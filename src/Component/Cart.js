import React, { Component } from 'react'
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import CartList from './CartList'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {
        
        const newComic = this.props.CartItems.map(comic =>
            <Card className="cartInfo" key={comic.id}>
                <h6>Comic Title: {comic.title}</h6>
                {/* <h6>{this.props.CartItems.reduce((sum,comic)=>{
                    return sum + comic.prices[0].price},0).toFixed(2)}</h6> */}
                <h6>Subtotal: ${comic.prices[0].price}</h6>
                {/* <h3>Tax: ${this.props.CartItems.reduce((sum,comic)=>{
                    return sum + comic.prices[0].price * 0.086},0).toFixed(2)}</h3> */}
                
            </Card>
            
            
        )
        


        return (
            
            <div>
        <Button className="cartButton" color="danger" onClick={this.toggle}>Cart{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Comic Cart</ModalHeader>
          <ModalBody>
          <div>
                {newComic}
            </div>
            <h6>Tax: ${this.props.CartItems.reduce((sum,comic)=>{
                    return sum + comic.prices[0].price * 0.086},0).toFixed(2)}</h6>
            <h4>Total: ${this.props.CartItems.reduce((sum,comic)=>{
                    return sum + comic.prices[0].price * 1.086},0).toFixed(2)}</h4>
        

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check Out</Button>{' '}
            <Button color="secondary" onClick={this.props.removeItem}>Remove</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
        //     <div>
        //         {newComic}
        //     </div>
    //     )
    // }
}
export default Cart