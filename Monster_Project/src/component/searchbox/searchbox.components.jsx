
import { Component } from "react";
import './searchbox.style.css';

class Searhbox extends Component{



    render(){
        return(
            <div>
            <input
          className={` search-box   ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
            </div>
        )
    }
}

export default Searhbox;