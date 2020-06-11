import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
   
    render() {
        const {items , itemDelete,  itemEdit} = this.props
        return (
            <div>
               <ul className = "list-group my-5">
                 <h3 className = "text-capitalize text-center">List of work</h3>
                     { items.map(item => {

                         return(
                            <TodoItem  key = {item.id} 
                            title = {item.title}
                            itemDelete = {() => itemDelete(item.id)}
                            itemEdit = {() => itemEdit(item.id)}
                            
                            />
                         )
                     } )      
                 }
                
               </ul>
            </div>
        );
    }
}
