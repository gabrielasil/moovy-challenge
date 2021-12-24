import React, { Component } from 'react';    
import { ToastContainer} from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';      
class Toastr extends Component {    
  render(){    
    return (    
      <div>      
        <ToastContainer />    
      </div>    
    );    
  }    
}    
export default Toastr 