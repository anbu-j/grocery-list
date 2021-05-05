import React, { Component } from 'react';
import items from '../data/items';
import Purchased from './Purchased';
console.log(items)
class Grocery extends Component {
    constructor(props){
        super(props)
        this.state={
            
           list:items,
           items:"",
           brands:"",
           units:'',
           quantity:'0',
           isPurchased:false

        }
    }

    changeUserInput=(input)=>{
        // const items = this.state.userInput.split(',')
         this.setState({ 
             userInput:input,
             //list:"item"
         },()=>console.log(input)
         )
     }

     addToList=(in1,in2,in3,in4)=>{
        let listArray = this.state.items
        let newObj = {
                "item": in1,
                "brand": in2,
                "quantity": in4,
                "units": in3,
                "isPurchased":true
        }
         this.setState({
             items:listArray,
             newObj
         })

     }

    render() {
        return (
            
            <div className="mainContainer">
                <h1> ENTER Grocery list</h1>
            <div className="inpContainer">
                        <input type="text" className="inpTab" value = {this.state.item} 
                        onChange={
                        (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } />
                        <input type="text" className="inpTab" value = {this.state.brand} 
                        onChange={
                        (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } />
                        <input type="text" className="inpTab" value = {this.state.units} 
                        onChange={
                        (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } />
                        <input type="text" className="inpTab" value = {this.state.quantity} 
                        onChange={
                        (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } />
                    <button onClick={()=>this.addToList(this.state.item, this.state.brand, this.state.units, this.state.quantity)}> Add to the Grocery list</button>
            </div>
                <div className="subContainer">
                    {this.state.list.map((itemInTheList,i)=>{
                    console.log(itemInTheList)
                    return <Purchased item={itemInTheList} />
                    })}
                </div>
                
            </div>
        );
    }
}

export default Grocery;