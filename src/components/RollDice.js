import React from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends React.Component{
    static defaultProps = {
        'data': [
            "fas fa-dice-one", 
            "fas fa-dice-two", 
            "fas fa-dice-three", 
            "fas fa-dice-four", 
            "fas fa-dice-five", 
            "fas fa-dice-six"
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            die1: "fas fa-dice-six",
            die2: "fas fa-dice-one",
            isDie: false
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        let rand1 = Math.floor(Math.random() * this.props.data.length),
        rand2 = Math.floor(Math.random() * this.props.data.length)
        this.setState({
            die1: this.props.data[rand2],
            die2: this.props.data[rand1],
            isDie: true
        })
        setTimeout(() => {
            this.setState({
                isDie: false
            })
        }, 1000);
    }
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <Die anything={this.state.die1} wobble="wobble" class={this.state.isDie && "wobble" }/>
                <Die anything={this.state.die2} wobble="wobble" class={this.state.isDie && "wobble" }/><br/>
                <button 
                onClick={this.roll} 
                style={{color: 'white', background: 'black', borderRadius: 5, padding: 15, fontSize:35}}
                disabled={this.state.isDie ? "disabled" : null}
                >
                {this.state.isDie ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        )
    }
}
export default RollDice