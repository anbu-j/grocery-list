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
            <div class="grocContainer">
                
                <div class="groceryList">
                    <input type="text" value = {this.props.item.item} />
                    <input type="text" value = {this.props.item.brand}/>
                    <input type="text" value = {this.props.item.units}/>
                    <input type="text" value = {this.props.item.quantity}/>
                </div>
            </div>
            
        );
    }
}

export default Purchased;