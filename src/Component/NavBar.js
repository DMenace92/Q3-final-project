import React, {Component} from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
// import { Navbar, NavbarBrand,Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
// import ComicsList from './ComicsList.js';

class NavBar extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modal: false
    //     };
    
    //     this.toggle = this.toggle.bind(this);
    //   }
    
    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   }
    
    render(){
       
        
        return(
            
            <div>  
                <Navbar color="dark" light>
          <NavbarBrand href="/" className="text-white" >Jester Comics</NavbarBrand>
          {/* <Button color="danger" onClick={this.toggle}>cart {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Comic Cart</ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check out</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Remove</Button>
          </ModalFooter>
        </Modal> */}
          
          
         
        </Navbar>
        
        </div>
         
        )
    }
}
export default NavBar