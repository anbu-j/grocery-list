import React, { Component } from 'react';

class Purchased extends Component {
    constructor(props){
        super(props)
        this.state={
            purchased:false,
        }
    }
    render() {
        return (
            <div className="grocContainer">
                
                <div className="groceryList">
                    <form>
                    <p>{this.props.item.item}</p>
                    <p>{this.props.item.brand}</p>
                    <p>{this.props.item.units}</p>
                    <p>{this.props.item.quantity}</p>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Purchased;