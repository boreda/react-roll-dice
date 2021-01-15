import React, {Component} from 'react'

class Die extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <span ><i className={this.props.anything} style={{fontSize: 200}} ></i></span>
            </div>
        )
    }
}
export default Die