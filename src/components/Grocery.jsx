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
           quantity:'',
           isPurchased:false

        }
    }
    handleChange=(eventToBeChanged)=>{
        this.setState(
            {
                [eventToBeChanged.target.id]: eventToBeChanged.target.value
            }
        )
    }


     addToList=()=>{
        let listArray = this.state.list
       // this.preventDefault();
        //console.log()
        console.log(this.state.item)
        console.log(this.state.brand)
        console.log(this.state.units)
        console.log(this.state.quantity)
        var newItems = {
            "item": this.state.item,
            "brand":this.state.brand,
            "quantity":this.state.quantity,
            "units":this.state.units,
            isPurchased:false
            
        };
        console.log(newItems)
        listArray.push(newItems)
        this.setState({
            list:listArray,
            /*[this.state.item.value]:'',
            [this.state.brand.value]:'',
            [this.state.units.value]:'',
            [this.state.quantity.value]:'',
            [this.state.item]:'',
            [this.state.brand]:'',
            [this.state.units]:'',
        [this.state.quantity]:''*/

        })
        console.log(this.state.list)
    }
          /*this.setState({
             items:listArray,
              newObj
         })

     }*/

    render() {
        return (
            
            <div className="mainContainer">
                <h1> Grocery Bag!</h1>
            <div className="subContainer">
            <div className="inpContainer">
                <form className="inpForm">
                
                        <input type="text" className="inpTab"  placeholder="Item"
                        onChange={this.handleChange} id="item"
                        />
                       {/* (event)=> {
                           // this.changeUserInput(event.target.value)
                       // }
                    } /> */}
                        <input type="text" className="inpTab"  placeholder="Brand"
                        onChange={this.handleChange} id="brand"/>
                       {/* (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } /> */}
                        <input type="text" className="inpTab"  placeholder="No of units"
                        onChange={this.handleChange} id="units"/>
                       {/*} (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } /> */}
                        <input type="text" className="inpTab"  placeholder="Quantity"
                        onChange={this.handleChange} id="quantity"/>
                       { /* (event)=> {
                            this.changeUserInput(event.target.value)
                        }
                    } /> */}

                    
                    </form>
                    <button onClick={()=>this.addToList()} className="subGroc"> Add to Grocery list</button>
            </div>
                <div className="printList">
                {/*<h1 className="headCSS">List</h1>*/}
                    {this.state.list.map((itemInTheList,i)=>{
                     return itemInTheList.isPurchased?<Purchased item={itemInTheList} />:''
                    })}
                </div>
            </div>   
            </div>
        );
    }
}

export default Grocery;