import React, { Component } from 'react'

export default class TodoAdd extends Component {

    render() {
        const {item , handelChange ,handelSubmit , editItem} = this.props
        return (
            <div className= "card card-body my-3">
               <form onSubmit = {handelSubmit} >
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-success  text-white">
                              <i className="fas fa-list-alt"></i>
                           </div>
                       </div>
                       <input 
                         type = "text" className = "form-control text-capitalize" 
                         placeholder = "Add what you want to do!" id = "work"
                         onChange = {handelChange} value = {item}></input>
                   </div>
                   
                   <button type="submit" className = {
                       editItem 
                       ? "btn btn-block btn-primary text-white mt-3" 
                       : "btn btn-block btn-success text-white mt-3"
                   }>
                       {editItem ? "Edit" : "Add"}
                   </button>
               </form>
            </div>
        )
    }
}
