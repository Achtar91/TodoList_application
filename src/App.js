import React, { Component } from 'react';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import TodoAdd from './component/TodoAdd';

import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid";


class App extends Component {
  
    state = {
    items: [], 
    id: uuid(),
    item: "",
    editItem: false,
    completed : false
  };

  handelChange = (e) => {
    this.setState({
      item : e.target.value
    });
  };

  
  handelSubmit = (e) =>{
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title: this.state.item
    };
    
    const updateItem = [...this.state.items,newItem]

    this.setState({
      items:updateItem,
      item: " ",
      id: uuid(),
      editItem : false,
      complteted : false

    })

  }

  
  addItem = (item) =>{
      item.id = 0;
      item.editItem = false
      item.complteted = false
      let items = this.state.items;
      items.push(item);
      
      this.setState({
        items
      })

  }

  itemDelete = (id) =>{
    const filtedrItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filtedrItems

    });
  }

  itemEdit = (id)=>{
    const filtedrItems = this.state.items.filter(item => item.id !== id)
    const selectItem = this.state.items.find(item => item.id === id );

    this.setState({
      items:filtedrItems,
      item: selectItem.title,
      editItem:true,
      id:id
    })
  }

  render(){
  return (
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto col-md-8 mt-4">
         <h3 className = "text-capitalize text-center">
            input todo
         </h3>
         <TodoAdd  item = {this.state.item} 
           handelChange = {this.handelChange}
           handelSubmit = {this.handelSubmit}
           editItem = {this.state.editItem}
        />
         <TodoList items = {this.state.items}
           itemDelete = {this.itemDelete} 
           itemEdit = {this.itemEdit}
           complteted = {this.state.complteted}
        />
        </div>
      </div>
    </div>
   );
  }
}

export default App;
